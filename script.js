
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'),{center: {lat: -19.91888999938965,
lng: -43.93870162963867 }, 
    zoom: 19});
    
  

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;


                var div = document.querySelector(".conteudo");
                var iframe = document.createElement("iframe");


// Define o atributo src do iframe para map.html
iframe.src = "map.html";

// Define o estilo do iframe para se ajustar à div
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.style.overflow = "hidden";
iframe.style.resize = "both";

// Adiciona o iframe à div
div.appendChild(iframe);
function resizeIframe() {
  // Obtém a altura do conteúdo do iframe
  var contentHeight = iframe.contentWindow.document.body.scrollHeight;

  // Define a altura do iframe para a altura do conteúdo
  iframe.height = contentHeight + "px";
}
iframe.addEventListener("load", resizeIframe);            