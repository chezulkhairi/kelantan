'use strict';



var map;

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());

map.on('load', function() {
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#afa7a0',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
});

var date = new Date();
var start = new Date(date.getFullYear(), 0, 1);
var diff = date - start;

var day = getDOY(date);
var time = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();

// var circle = document.getElementById('circle');
var sunDirLine = document.getElementById('sun-dir');
var sunPosLine = document.getElementById('sun-pos');
var sunriseLine = document.getElementById('sunrise');
var sunsetLine = document.getElementById('sunset');
var sunIcon = document.getElementById('sun');
var eyeIcon = document.getElementById('eye');
var sunriseIcon = document.getElementById('sunrise-icon');
var sunsetIcon = document.getElementById('sunset-icon');
var timeInput = document.getElementById('time');
var dayInput = document.getElementById('day');
var timeText = document.getElementById('time-text');
var dayText = document.getElementById('day-text');

dayInput.value = day;
timeInput.value = time;

dayInput.oninput = function () {
    day = +dayInput.value;
    date = new Date(start.valueOf());
    date.setDate(day);
    date.setHours(Math.floor(time / 60 / 60));
    date.setMinutes(Math.floor(time / 60) % 60);
    date.setSeconds(time % 60);
    draw();
}

timeInput.oninput = function () {
    time = +timeInput.value;
    date.setHours(Math.floor(time / 60 / 60));
    date.setMinutes(Math.floor(time / 60) % 60);
    date.setSeconds(time % 60);
    draw();
}

function draw() {

    var tr = map.transform;
    var cx = tr.width / 2;
    var cy = tr.height / 2;
    // var r = Math.min(cx, cy) - 5;

    var loc = map.getCenter();
    var sunPos = SunCalc.getPosition(date, loc.lat, loc.lng);
    var sunTimes = SunCalc.getTimes(date, loc.lat, loc.lng);
    var sunAngle = Math.PI / 2 + sunPos.azimuth + tr.angle;
    var sunriseAngle = SunCalc.getPosition(sunTimes.sunrise, loc.lat, loc.lng).azimuth + Math.PI / 2 + tr.angle;
    var sunsetAngle = SunCalc.getPosition(sunTimes.sunset, loc.lat, loc.lng).azimuth + Math.PI / 2 + tr.angle;
    var pitchCos = Math.cos(tr.pitch * Math.PI / 180);

    var m = new Float64Array(16);
    mat4.perspective(m, tr._fov, tr.width / tr.height, 1, 3000);
    mat4.scale(m, m, [1, -1, 1]);
    mat4.translate(m, m, [0, 0, -tr.cameraToCenterDistance]);
    mat4.rotateX(m, m, tr._pitch);
    mat4.rotateZ(m, m, tr.angle);
    mat4.translate(m, m, [-tr.x, -tr.y, 0]);

    var m2 = mat4.create();
    mat4.scale(m2, m2, [tr.width / 2, -tr.height / 2, 1]);
    mat4.translate(m2, m2, [1, -1, 0]);
    mat4.multiply(m, m2, m);

    var coord = tr.pointCoordinate(tr.centerPoint, tr.zoom);
    var p = [
        coord.column * tr.tileSize + Math.sin(-sunPos.azimuth),
        coord.row * tr.tileSize + Math.cos(-sunPos.azimuth), Math.sin(sunPos.altitude), 1];
    vec4.transformMat4(p, p, m);

    var dx = p[0] / p[3] - tr.centerPoint.x;
    var dy = p[1] / p[3] - tr.centerPoint.y;

    var r2 = Math.min(Math.abs(cx / dx), Math.abs(cy / dy)) - 30;

    val(eyeIcon.x, cx - val(eyeIcon.width) / 2);
    val(eyeIcon.y, cy - val(eyeIcon.height) / 2);

    var isDay = sunPos.altitude > -0.833 * Math.PI / 180;

    if (isDay) {
        drawGroundLine(sunDirLine, null, sunAngle, pitchCos, cx, cy, 5);
    } else {
        hideLine(sunDirLine, null);
    }

    drawGroundLine(sunriseLine, sunriseIcon, sunriseAngle, pitchCos, cx, cy, -30);
    drawGroundLine(sunsetLine, sunsetIcon, sunsetAngle, pitchCos, cx, cy, -30);

    if (isDay) {
        drawLine(sunPosLine, sunIcon, cx, cy, r2 * dx, r2 * dy);
    } else {
        hideLine(sunPosLine, sunIcon);
    }

    timeText.innerHTML = pad(Math.floor(time / 60 / 60)) + ':' + pad(Math.floor(time / 60 % 60));
    dayText.innerHTML = pad(date.getMonth() + 1) + '/' + pad(date.getDate());

    map.setLight({
        anchor: 'map',
        position: [1.5, 180 + sunPos.azimuth * 180 / Math.PI, 90 - sunPos.altitude * 180 / Math.PI],
        'position-transition': {duration: 0}
    }, {duration: 0});
}

function drawGroundLine(line, icon, angle, pitchCos, cx, cy, pad) {
    var sunSin = Math.cos(angle);
    var sunCos = Math.sin(angle);
    var r = Math.min(Math.abs(cx / sunSin), Math.abs(cy / sunCos / pitchCos)) + pad;

    drawLine(line, icon, cx, cy, r * sunSin, r * sunCos * pitchCos);
}

function hideLine(line, icon) {
    line.style.display = 'none';
    if (icon) icon.style.display = 'none';
}

function drawLine(line, icon, cx, cy, dx, dy) {
    line.style.display = '';

    val(line.x1, cx);
    val(line.y1, cy);
    val(line.x2, cx + dx);
    val(line.y2, cy + dy);

    if (icon) {
        icon.style.display = '';
        val(icon.x, val(line.x2) - val(icon.width) / 2);
        val(icon.y, val(line.y2) - val(icon.height) / 2);
    }
}

function val(attr, value) {
    if (value !== undefined) {
        attr.baseVal.value = value;
    } else {
        return attr.baseVal.value;
    }
}

map.on('load', draw);
map.on('resize', draw);
map.on('move', draw);


function isLeapYear(date) {
    var year = date.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

function getDOY(date) {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = date.getMonth();
    var dn = date.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && isLeapYear(date)) dayOfYear++;
    return dayOfYear;
};

function pad(num) {
    return num <= 9 ? '0' + num : num;
}
