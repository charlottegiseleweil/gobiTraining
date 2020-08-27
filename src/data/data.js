import React from "react";
import Style from "./mapStyling";
import Tooltip from "./tooltips";
import Popup from "./popups";

function Data() {
  return {
    explorer: {
      // <---START HERE!!--->
      config: {
        showInfoButton: true, // show more information for all data sections
        showDownloadButton: true, // show download button if there is a link to the dataset
        chartIsLinkedTo: null, // the datasetID the chart should be linked to, if no linking write chartIsLinkedTo: null
        showLandingPage: false, // toggle landing page
      },

      // ADD YOUR BASEMAP HERE
      baseMap: {
        src:
          "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
        center: [46.0, 109.7],
        zoom: 5.25,
        labelsSrc:
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      },
      /*Example of satelite basemap
      src:
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution:
          "attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'",
      */

      /* <--- IN THIS ARRAY ALL DATASECTIONS ARE INCLUDED --->
      Each datasection include:
      id -- order in array 
      title -- title of section
      
      infotext -- text that will be diplayed in the secondary panel if showInfoButton: true
      img -- image for secondary panel (optional) should be saved in static/images/

      expanded -- if the secion is expanded or collapsed by default (true or false)
       */
      dataSections: [
        {
          id: 0,
          title: "General InVEST Inputs",
          infotext: [
            {
              subtitle: "InVEST Software",
              text: (
                <div>
                  <a href="https://naturalcapitalproject.stanford.edu/software/invest">
                    InVEST (Integrated Valuation of Ecosystem Services and Tradeoffs)
                  </a>{" "}
                  is a suite of models used to map and value the goods and services from
                  nature that sustain and fulfill human life. It helps explore how changes
                  in ecosystems can lead to changes in the flows of many different
                  benefits to people.
                </div>
              ),
            },
          ],
          expanded: true,
        },
        {
          id: 1,
          title: "Habitat quality model",
          infotext: [
            {
              subtitle: "Habitat Quality Model",
              text: (
                <div>
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/habitat_quality.html"
                    target="_blank">
                    User Guide
                  </a>
                  <br />
                  InVEST models habitat quality and rarity as proxies for biodiversity,
                  ultimately estimating the extent of habitat and vegetation types across
                  a landscape, and their state of degradation. Habitat quality and rarity
                  are a function of four factors: each threat’s relative impact, the
                  relative sensitivity of each habitat type to each threat, the distance
                  between habitats and sources of threats, and the degree to which the
                  land is legally protected.
                </div>
              ),
            },
            {
              subtitle: "Tabular Model inputs",
              text: (
                <div>
                  <a href="DOWNLOAD CSV.html" target="_blank">
                    Sensitivity of Land Cover Types to Each Threat
                  </a>
                  <br />
                  <a href="DOWNLOAD CSV.html" target="_blank">
                    Threats data
                  </a>
                </div>
              ),
            },
          ],
          expanded: false,
        },
        {
          id: 2,
          title: "Carbon model",
          infotext: [
            {
              subtitle: "Description",
              text: (
                <div>
                  This section has an linked chart connected to the shapefile. Read about
                  details for this in the readme.
                </div>
              ),
            },
          ],
          expanded: false,
        },
      ],

      /* <--- IN THIS ARRAY ALL DATASETS ARE INCLUDED --->
      Each dataset include:
      id -- order in array 
      sectionID -- which section the dataset belongs to
      title -- title of dataset
      type -- what type of source (choose between shapefile, tiles (webhosted) or rasters (tif - must be projected with EPSG:4326)  )
      src -- file name (place the files in the corresponding folders for shapefile .. )
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
      link -- link for data download (optional)
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)

      ONLY FOR SHAPEFILES 
      styleProperty -- the property you want to use for styling the map (if conditional styling based on properties in the shapefile)
      tooltip -- created in tooltips.js
      popup -- created in popups.js
      
      If map layer is linked to chart:
      chartProperties -- which properties from the shapefile to be used 
      namesOfProperties -- Names of the properties (use the same names in the chart for the colors)
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Accessibility",
          type: "shapefile",
          src: "accessibility.zip",
          style: Style().newColorStyle,
          styleProperty: "ACCESS", // change to the name of the shapefile property you want the styling to be based on
          legendSrc: "access_legend.png",
          selected: false,
          link:
            "https://drive.google.com/open?id=1UP8wiEaM3Bry6jwC8nVpWVfZefWiOWIf&authuser=jademd%40stanford.edu&usp=drive_fs",
        },
        {
          id: 1,
          sectionID: 0,
          title: "Area of interest",
          type: "shapefile",
          src: "aoi_gcs.zip",
          style: Style().redOutline,
          legendSrc: "aoi_legend.png",
          selected: true,
          link: "https://en.wikipedia.org/wiki/Region_of_interest",
        },
        {
          id: 2,
          sectionID: 0,
          title: "Land use cover",
          type: "raster",
          src: "lulc_modis.tif", // must be projected with EPSG:4326
          style: Style().landcoverColor,
          legendSrc: "lulc_legend.png",
          selected: false,
        },
        {
          id: 3,
          sectionID: 1,
          title: "Roads",
          type: "raster",
          src: "all_road_c.tif", // must be projected with EPSG:4326
          style: Style().Roads,
          legendSrc: "roads_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kFYY6DCSpG45fM9lkJ6LNsnX5DDS-H0a/view?usp=sharing",
        },
        {
          id: 4,
          sectionID: 1,
          title: "Agriculture",
          type: "raster",
          src: "all_ag_c.tif", // must be projected with EPSG:4326
          style: Style().Agriculture,
          legendSrc: "agriculture_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kKC1YQRvmgQZbuuiPzeVrbOR90qIVkJs/view?usp=sharing",
        },
        {
          id: 5,
          sectionID: 1,
          title: "Urban Areas",
          type: "raster",
          src: "urban_c.tif", // must be projected with EPSG:4326
          style: Style().Urban,
          legendSrc: "urban_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kSMBXoN174ox3iSqh6YdlwHFw6BenhRg/view?usp=sharing",
        },
        {
          id: 6,
          sectionID: 1,
          title: "Herders",
          type: "raster",
          src: "herders_c.tif", // must be projected with EPSG:4326
          style: Style().Herders,
          legendSrc: "herders_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kLGPrOJ2iFlUxqgHETPEr16VMWEH2cfH/view?usp=sharing",
        },
        {
          id: 7,
          sectionID: 1,
          title: "Mines",
          type: "raster",
          src: "mine_c.tif", // must be projected with EPSG:4326
          style: Style().Mines,
          legendSrc: "mines_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kPEZKwWBcvfS00urkVobl9tzw7yzKemw/view?usp=sharing",
        },
        {
          id: 8,
          sectionID: 1,
          title: "Nightlight",
          type: "raster",
          src: "nightlight_c.tif", // must be projected with EPSG:4326
          style: Style().Nightlight,
          legendSrc: "nightlight_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kUA_OwAITCg-gWVsKr9Ia7-Ytm7Um9QP/view?usp=sharing",
        },
        {
          id: 9,
          sectionID: 1,
          title: "Railways",
          type: "raster",
          src: "railways_c.tif", // must be projected with EPSG:4326
          style: Style().Railways,
          legendSrc: "railways_legend.png",
          selected: false,
          link:
            "https://drive.google.com/file/d/1kS7Uo9bR_fiomyc13caXQi6dYakEOlJP/view?usp=sharing",
        },

        /*{
          id: 2,
          sectionID: 0,
          title: "Shapefile (points)",
          type: "shapefile",
          src: "nationalParks.zip",
          legendSrc: "nationalParksLegend.png",
          selected: false,
          icon: "forest.svg",
          tooltip: Tooltip().nameTooltip,
          popup: Popup().examplePopup,
        },
        {
          id: 3,
          sectionID: 0,
          title: "Tiles",
          type: "tiles",
          src:
            "https://charlottegiseleweil.github.io/tiles/amazon/Dengue_PEM_pres/{z}/{x}/{y}.png",
          legendSrc: "exampleLegend4.png",
          selected: false,
        },
        {
          id: 4,
          sectionID: 0,
          title: "Raster",
          type: "raster",
          src: "exampleRaster.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster,
          legendSrc: "exampleLegend2.png",
          selected: false,
        },
        // Example of map layer linked to chart
        {
          id: 5,
          sectionID: 1,
          title: "Styled shapefile",
          type: "shapefile",
          src: "Watersheds.zip",
          style: Style().redToBlue,
          styleProperty: "Base_idx",
          legendSrc: "exampleLegend1.png",
          selected: true,
          chartProperties: ["L_ann", "Qf_ann", "Qb_ann"], // properties from the shapefile to display on the chart
          namesOfProperties: ["Property1", "Property2", "Property3"], // Names of the properties (use the same names in the chart for the colors)
        },*/
      ],

      /* HERE YOU INCLUDE THE CHART --remove if you don't want a chart
      A chart include:
      title -- chart title
      yLabel -- label of y axis
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data 
      type -- line or bar
      yMax,yMin -- optional max and min values for the y-axis*/
      chart: null,

      /* Example of a non linked chart
          title: "Example Line chart",
          yLabel: "Example y Label",
          columns: [
            ["x-label", "Label-1", "Label-2", "Label-3"],

            ["Data-1", 30, 10, 25],
            ["Data-2", 11, 13, 5],
            ["Data-3", 10, 15, 20],
          ],
          colors: {
            "Data-1": "#a6a6a6",
            "Data-2": "#ffd633",
            "Data-3": "#009933",
          },
          type: "line",
        }, */
    },
  };
}

export default Data;
