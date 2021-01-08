var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_laporan={}
                    var clusterStyleCache_laporan={}
                    var style_laporan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(185,81,1,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_laporan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_em_boundary={}
                    var clusterStyleCache_em_boundary={}
                    var style_em_boundary = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(186,123,208,0.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_em_boundary = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_em_waterbody={}
                    var clusterStyleCache_em_waterbody={}
                    var style_em_waterbody = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(173,128,195,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_em_waterbody = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_pusat_pemindahan={}
                    var clusterStyleCache_pusat_pemindahan={}
                    var style_pusat_pemindahan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(183,238,169,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
        var labelText = feature.get("Name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_pusat_pemindahan[key]){
            var text = new ol.style.Text({
                  font: '10.0px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0.0,
                  offsetY: 0.0 
                });
            textStyleCache_pusat_pemindahan[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_pusat_pemindahan[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_pusat_pemindahan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
        var labelText = feature.get("Name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_pusat_pemindahan[key]){
            var text = new ol.style.Text({
                  font: '10.0px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0.0,
                  offsetY: 0.0 
                });
            textStyleCache_pusat_pemindahan[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_pusat_pemindahan[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_ngo_base={}
                    var clusterStyleCache_ngo_base={}
                    var style_ngo_base = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(225,171,109,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_ngo_base = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_village={}
                    var clusterStyleCache_village={}
                    var style_village = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(30,162,101,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_village = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_em_river={}
                    var clusterStyleCache_em_river={}
                    var style_em_river = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(196,230,24,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_em_river = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'Open topo map',
    source: new ol.source.XYZ({
        url: 'http://s.tile.opentopomap.org/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: ['Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)']
        })]
    }),
    projection: 'EPSG:3857'
})

];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_mukabumi_ = new ol.layer.Image({
                                opacity: 1.0,
                                 
                                title: "MukaBumi_",
                                id: "MukaBumi20210106204540711",
                                timeInfo: null,
                                source: new ol.source.ImageStatic({
                                   url: "./data/mukabumi_.jpg",
                                    projection: "EPSG:4326",
                                    alwaysInRange: true,
                                    imageSize: [1000, 1000],
                                    imageExtent: [99.609100, 2.985190, 105.259100, 6.535190]
                                })
                            });
var lyr_laporan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_laporan,
                    selectedStyle: selectionStyle_laporan,
                    title: "Laporan",
                    id: "Laporan20210108072856028",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
laporan_geojson_callback = function(geojson) {
                              lyr_laporan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_em_boundary = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_em_boundary,
                    selectedStyle: selectionStyle_em_boundary,
                    title: "em_Boundary",
                    id: "em_Boundary20210106204525650",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
em_boundary_geojson_callback = function(geojson) {
                              lyr_em_boundary.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_em_waterbody = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_em_waterbody,
                    selectedStyle: selectionStyle_em_waterbody,
                    title: "em_WaterBody",
                    id: "em_WaterBody20210106204526174",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
em_waterbody_geojson_callback = function(geojson) {
                              lyr_em_waterbody.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_pusat_pemindahan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_pusat_pemindahan,
                    selectedStyle: selectionStyle_pusat_pemindahan,
                    title: "pusat_pemindahan",
                    id: "pusat_pemindahan20210106204526565",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
pusat_pemindahan_geojson_callback = function(geojson) {
                              lyr_pusat_pemindahan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_ngo_base = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_ngo_base,
                    selectedStyle: selectionStyle_ngo_base,
                    title: "NGO_base",
                    id: "NGO_base20210106204526549",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
ngo_base_geojson_callback = function(geojson) {
                              lyr_ngo_base.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_village = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_village,
                    selectedStyle: selectionStyle_village,
                    title: "Village",
                    id: "em_Village20210106204526127",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
village_geojson_callback = function(geojson) {
                              lyr_village.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_em_river = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_em_river,
                    selectedStyle: selectionStyle_em_river,
                    title: "em_River",
                    id: "em_River20210106204525908",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
em_river_geojson_callback = function(geojson) {
                              lyr_em_river.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_mukabumi_.setVisible(true);
lyr_laporan.setVisible(true);
lyr_em_boundary.setVisible(true);
lyr_em_waterbody.setVisible(true);
lyr_pusat_pemindahan.setVisible(true);
lyr_ngo_base.setVisible(true);
lyr_village.setVisible(true);
lyr_em_river.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_mukabumi_,lyr_laporan,lyr_em_boundary,lyr_em_waterbody,lyr_pusat_pemindahan,lyr_ngo_base,lyr_village,lyr_em_river];layersList.unshift(baseLayersGroup);
var printLayouts = [];
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:4326'});
var originalExtent = [102.019787, 5.420469, 102.725575, 6.246314];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.FullScreen(),
new ol.control.ZoomSlider(),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_mukabumi_,lyr_laporan,lyr_em_boundary,lyr_em_waterbody,lyr_pusat_pemindahan,lyr_ngo_base,lyr_village,lyr_em_river]}));
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{text: 'Table', icon: 'list-alt', onClick: this._toggleTable.bind(this)},
{text: 'Query', icon: 'filter', onClick: this._toggleQuery.bind(this)},
{jsx: React.createElement(Measure, {toggleGroup:'navigation', map:map})},
{jsx: React.createElement(ImageExport, {map:map})},
{
                              jsx: React.createElement(Select, {toggleGroup: 'navigation', map:map})
                            }, {
                              text: 'Navigation',
                              icon: 'hand-paper-o',
                              onClick: this._navigationFunc.bind(this)
                            },
{jsx: React.createElement(QGISPrint, {map:map, layouts:printLayouts, thumbnailPath: './resources/print/',})},
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "MY_Flood_2021")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_laporan, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map}))
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


