/* In this file the funtions for styling rasters and shapefiles are defined.
First, the different color schemas are defined. Then a function called "Style" 
is declared which returns the styling objects that are exported to data.js 
Shapefiles needs a seperate function to define opacity, fillcolor etc (see examples in style()) 
Rasters only need the colorScheme*/

/*Examples diverging colorscheme */
const redToBlueColor = (d) => {
  return d > 0.9
    ? "#4878b7"
    : d > 0.8
    ? "#849cb8"
    : d > 0.7
    ? "#c1c0b8"
    : d > 0.6
    ? "#fde3b8"
    : d > 0.5
    ? "#f0ac8c"
    : d > 0.4
    ? "#e2745f"
    : "#d43c33";
};

/*Examples sequential colors scheme*/
const bluesColor = (d) => {
  return d > 0.8
    ? "#08519c"
    : d > 0.6
    ? "#3182bd"
    : d > 0.4
    ? "#6baed6"
    : d > 0.2
    ? "#bdd7e7"
    : d > 0
    ? "#eff3ff"
    : null;
};
const greensColor = (d) => {
  return d > 0.8
    ? "#006d2c"
    : d > 0.6
    ? "#31a354"
    : d > 0.4
    ? "#74c476"
    : d > 0.2
    ? "#bae4b3"
    : "#edf8e9";
};
const redsColor = (d) => {
  return d > 0.4
    ? "#a50f15"
    : d > 0.3
    ? "#de2d26"
    : d > 0.2
    ? "#fb6a4a"
    : d > 0.1
    ? "#fcae91"
    : d > 0
    ? "#fee5d9"
    : null;
};
const purplesColor = (d) => {
  return d > 0.44
    ? "#54278f"
    : d > 0.33
    ? "#756bb1"
    : d > 0.22
    ? "#9e9ac8"
    : d > 0.11
    ? "#cbc9e2"
    : d > 0
    ? "#f2f0f7"
    : null;
};

/*Examples catagorical colorscheme*/
const accessibilityColor = (d) => {
  switch (d) {
    case 0:
      return "#2892c7";
    case 0.3:
      return "#bfd48a";
    case 0.6:
      return "#fcb344";
    case 0.9:
      return "#e81515";
    default:
      return null;
  }
};


const greenAndRedColor = (d) => {
  switch (d) {
    case 1:
      return "#ab1700";
    case -1:
      return "#00ab39";
    default:
      return null;
  }
};

const Agriculture = (d) => {
  switch (d) {
    case 1:
      return "#acac31";
    default:
      return null;
  }
};

const Urban = (d) => {
  switch (d) {
    case 0:
      return "#000000";
    default:
      return null;
  }
};

const Roads = (d) => {
  switch (d) {
    case 1:
      return "#595959";
    default:
      return null;
  }
};

const Railways = (d) => {
  switch (d) {
    case 1:
      return "#2c2c2c";
    default:
      return null;
  }
};

const Mines = (d) => {
  switch (d) {
    case 1:
      return "#950000";
    default:
      return null;
  }
};

const landcoverColor = (d) => {
  switch (d) {
    case 0:
      return "#000000";
    case 1:
      return "#ffffff";
    case 2:
      return "#73004c";
    case 3:
      return "#004000";
    case 4:
      return "#008000";
    case 5:
      return "#d2d291";
    case 6:
      return "#baba2d";
    case 7:
      return "#ff8000";
    case 8:
      return "#f2b59b";
    case 9:
      return "#949768";
    case 10:
      return "#804000";
    case 11:
      return "#808080";
    case 12:
      return "#000000";
    case 13:
      return "#ffff00";
    case 14:
      return "#91d7d7";
    case 15:
      return "#a87000";
    case 16:
      return "#a87000";
    case 17:
      return "#a87000";
    case 18:
      return "#ff0000";
    case 19:
      return "#0000ff";
    default:
      return null;
  }
};

// the returning object from this function is exported to data.js
function Style() {
  // example -- red outline
  function redOutline() {
    return {
      fillColor: "none",
      weight: 2,
      opacity: 0.9,
      color: "#ff0000",
    };
  }

  // example -- styling based on the property called "Base_idx" in the shapefile
  function redToBlue(feature) {
    return {
      fillColor: redToBlueColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }

  // example functions for shapefiles -- change "xxx" to the name of your shapefile property
  function blues(feature) {
    return {
      fillColor: bluesColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function greens(feature) {
    return {
      fillColor: greensColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function reds(feature) {
    return {
      fillColor: redsColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function purples(feature) {
    return {
      fillColor: purplesColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function accessScheme(feature) {
    return {
      fillColor: accessibilityColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
}  

  // This exports an object containing all the styling functions to be used in data.js
  return {
    redToBlue: redToBlue,
    redOutline: redOutline,
    blues: blues,
    greens: greens,
    reds: reds,
    purples: purples,
    greenAndRedRaster: greenAndRedColor, // raster only need a color
    Roads: Roads,
    landcoverColor: landcoverColor,
    Agriculture: Agriculture,
    Railways: Railways,
    Mines: Mines,
    Nightlight: redsColor,
    Urban: Urban,
    Herders: purplesColor,
    accessScheme:accessScheme,
  };
}

export default Style;
