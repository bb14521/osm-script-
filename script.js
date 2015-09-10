<html><body> 
  <div id="mapdiv"></div> 
  <script src="http://www.openlayers.org/api/OpenLayers.js"></script>
  <script>    #import Libaray 
    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());  #class object opnelayer    # addlayer function 
 
    var pois = new OpenLayers.Layer.Text( "My Points",       #function 
                    { location:"./textfile.txt",
                      projection: map.displayProjection
                    });
    map.addLayer(pois);
 
    //Set start centrepoint and zoom    
    var lonLat = new OpenLayers.LonLat( 75.86, 30.89 )     #variable   passparameter from function 
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=15;
    map.setCenter (lonLat, zoom);     
 
  </script>
</body></html>
