// Define the URL of your Vega-Lite JSON specification
var vg_1 = "/Users/allen/Downloads/week9-homework/map.json";

// Embed the Vega-Lite visualization in the div with id="map_chart"
vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);