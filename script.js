(function(){
    var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.playAudioList([this.audio_18F0997B_03DB_F9E5_4182_2C34A13C223F])",
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143144",
 "id": "panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454",
 "hfov": 360,
 "overlays": [
  "this.overlay_11F141B6_03CF_296C_4173_D0B190548480",
  "this.overlay_11AF04E3_03CF_28E4_418D_6D29F09FAC36",
  "this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 163.42,
   "yaw": -7.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0809E884_03DD_6723_418E_703A71AF256C"
  },
  {
   "backwardYaw": 21.73,
   "yaw": -90.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_camera",
 "initialPosition": {
  "yaw": -9.04,
  "class": "PanoramaCameraPosition",
  "pitch": -5.78
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143133",
 "id": "panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE",
 "hfov": 360,
 "overlays": [
  "this.overlay_12F9F0D1_03CB_6724_4158_35C8FD45A1D7",
  "this.overlay_121EB9D4_03CD_392C_418B_ECB8AECB6FC7",
  "this.overlay_1146C631_03CD_6B64_4159_C7350AC94A62",
  "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 108.15,
   "yaw": -62.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF"
  },
  {
   "backwardYaw": -163.42,
   "yaw": 113.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1"
  },
  {
   "backwardYaw": -90.32,
   "yaw": 21.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_080F8522_03DD_E967_4183_FAAACD80174E_camera",
 "initialPosition": {
  "yaw": -104.26,
  "class": "PanoramaCameraPosition",
  "pitch": -5.02
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EBA4AE2_0437_38E7_418D_04DFC92B4F2C",
 "initialPosition": {
  "yaw": 147.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0819C73C_03DD_2963_4180_4748DA881F46_camera",
 "initialPosition": {
  "yaw": -77.38,
  "class": "PanoramaCameraPosition",
  "pitch": -3.77
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143206",
 "id": "panorama_0809E884_03DD_6723_418E_703A71AF256C",
 "hfov": 360,
 "overlays": [
  "this.overlay_10FA5BD7_03CF_592C_417B_03AC21F99AF0",
  "this.overlay_108CDD46_03CE_F92F_4178_3C5F7D14DA9A",
  "this.panorama_0809E884_03DD_6723_418E_703A71AF256C_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 148.59,
   "yaw": -32.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B"
  },
  {
   "backwardYaw": -7.92,
   "yaw": 163.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F3FDB9B_0437_3924_4188_38A982DCCCFC",
 "initialPosition": {
  "yaw": -71.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_camera",
 "initialPosition": {
  "yaw": -87.42,
  "class": "PanoramaCameraPosition",
  "pitch": 4.52
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0809E884_03DD_6723_418E_703A71AF256C_camera",
 "initialPosition": {
  "yaw": -21.1,
  "class": "PanoramaCameraPosition",
  "pitch": -3.77
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EAEAAD3_0437_3B24_4142_3241A8A1A49F",
 "initialPosition": {
  "yaw": -66.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143231",
 "id": "panorama_08080D3A_03DD_D967_4175_81FA26A52EBF",
 "hfov": 360,
 "overlays": [
  "this.overlay_17DABBCC_03CB_D93C_4166_33CCC9ECD9E5",
  "this.overlay_10BDBF82_03CB_7924_418E_835B45EDA940",
  "this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 80.01,
   "yaw": -72.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E"
  },
  {
   "backwardYaw": -62.18,
   "yaw": 108.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E9B9AB6_0437_3B6C_418D_1962634655B6",
 "initialPosition": {
  "yaw": 80.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_142505",
 "id": "panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1",
 "hfov": 360,
 "overlays": [
  "this.overlay_1313B564_03DB_69EC_416D_7863CAE8D343",
  "this.overlay_12C8BD62_03D5_D9E7_4153_EE55B7263CFC",
  "this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.96,
   "yaw": 3.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90"
  },
  {
   "backwardYaw": 113.17,
   "yaw": -163.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EE36B0D_0437_393C_4176_19BAFB5E6294",
 "initialPosition": {
  "yaw": -31.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E8B1A99_0437_3B24_418E_2719C9DE3FD3",
 "initialPosition": {
  "yaw": 117.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143218",
 "id": "panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B",
 "hfov": 360,
 "overlays": [
  "this.overlay_1045D99C_03CD_595C_416D_C793FCF07EAB",
  "this.overlay_10776D32_03CD_7964_4183_CB34DBF6EC3E",
  "this.overlay_10535C25_03CA_DF6C_416A_986F7E2087B4",
  "this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -32.28,
   "yaw": 148.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0809E884_03DD_6723_418E_703A71AF256C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E"
  },
  {
   "backwardYaw": -70.22,
   "yaw": -3.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0819C73C_03DD_2963_4180_4748DA881F46"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143312",
 "id": "panorama_0819C73C_03DD_2963_4180_4748DA881F46",
 "hfov": 360,
 "overlays": [
  "this.overlay_175382FC_03F7_28DC_4144_C53B40FA73D0",
  "this.overlay_17BA2D61_03F7_39E4_4186_725F99493FB7",
  "this.panorama_0819C73C_03DD_2963_4180_4748DA881F46_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.39,
   "yaw": -70.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B"
  },
  {
   "backwardYaw": -99.86,
   "yaw": -37.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_t.jpg"
},
{
 "class": "MediaAudio",
 "data": {
  "label": "Justin Bieber ft Pink Sweat$ Chill Guitar Type Beat"
 },
 "id": "audio_18F0997B_03DB_F9E5_4182_2C34A13C223F",
 "audio": {
  "mp3Url": "media/audio_18F0997B_03DB_F9E5_4182_2C34A13C223F.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_18F0997B_03DB_F9E5_4182_2C34A13C223F.ogg"
 },
 "autoplay": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143253",
 "id": "panorama_080F8522_03DD_E967_4183_FAAACD80174E",
 "hfov": 360,
 "overlays": [
  "this.overlay_17637E33_03F5_3B65_418E_B22D21F2977D",
  "this.overlay_16E09AE9_03F5_38E5_418D_B825F09721AF",
  "this.overlay_17CA1F75_03F6_D9EC_4185_0656264497CD",
  "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0809E884_03DD_6723_418E_703A71AF256C"
  },
  {
   "backwardYaw": -72.73,
   "yaw": 80.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF"
  },
  {
   "backwardYaw": -37.56,
   "yaw": -99.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0819C73C_03DD_2963_4180_4748DA881F46"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F11FB38_0437_3964_4163_28795BFC2BB8",
 "initialPosition": {
  "yaw": 142.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F01AB2A_0437_3967_418C_4DD6E5EF0C4A",
 "initialPosition": {
  "yaw": 107.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EA23AC5_0437_3B2C_4172_250D6A67D3EC",
 "initialPosition": {
  "yaw": 85.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetPitch": 2.76,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "yaw": -61.55,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_camera",
 "initialPosition": {
  "yaw": -61.55,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_camera",
 "initialPosition": {
  "yaw": -65.82,
  "class": "PanoramaCameraPosition",
  "pitch": -6.78
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F4DBBBE_0437_395F_4175_19C82FD3E505",
 "initialPosition": {
  "yaw": 16.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E822A8B_0437_3B24_418C_EB19B2C56118",
 "initialPosition": {
  "yaw": -99.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F1E1B5A_0437_3927_4190_06368B346C1F",
 "initialPosition": {
  "yaw": -16.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EF39B1C_0437_3923_418A_D132FAB6AABD",
 "initialPosition": {
  "yaw": 172.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_camera",
 "initialPosition": {
  "yaw": -0.75,
  "class": "PanoramaCameraPosition",
  "pitch": -4.77
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1ED55AFE_0437_38DC_417D_4B18E036406D",
 "initialPosition": {
  "yaw": -176.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_143000",
 "id": "panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90",
 "hfov": 360,
 "overlays": [
  "this.overlay_0DA71F9E_03DA_F95C_4170_B31316781FCC",
  "this.overlay_13588A35_03DB_5B6D_4180_6766C510539D",
  "this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.14,
   "yaw": -94.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EC79AF1_0437_38E5_4179_6680DBA26BC6",
 "initialPosition": {
  "yaw": 109.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F2FAB7D_0437_39DC_4158_817A6076890C",
 "initialPosition": {
  "yaw": -158.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F5DCBE0_0437_38E4_4159_7114D9860040",
 "initialPosition": {
  "yaw": 89.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "camera": "this.panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_camera",
   "media": "this.panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_camera",
   "media": "this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_camera",
   "media": "this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_camera",
   "media": "this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_camera",
   "media": "this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0809E884_03DD_6723_418E_703A71AF256C_camera",
   "media": "this.panorama_0809E884_03DD_6723_418E_703A71AF256C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_camera",
   "media": "this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_camera",
   "media": "this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E_camera",
   "media": "this.panorama_080F8522_03DD_E967_4183_FAAACD80174E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0819C73C_03DD_2963_4180_4748DA881F46_camera",
   "media": "this.panorama_0819C73C_03DD_2963_4180_4748DA881F46",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E90DAA8_0437_3B64_4160_8DBB54D997A4",
 "initialPosition": {
  "yaw": 176.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220404_142853",
 "id": "panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC",
 "hfov": 360,
 "overlays": [
  "this.overlay_0DEF12D9_03DD_2B24_418B_C520A9AD5C41",
  "this.panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_t.jpg"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": 13,
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "shadow": false,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "height": "100%",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "height": "100%",
 "paddingLeft": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE, this.camera_1F2FAB7D_0437_39DC_4158_817A6076890C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142CE3E0_03FB_68E4_4167_5A756DA76B30",
   "yaw": -90.32,
   "pitch": -23.94,
   "distance": 100,
   "hfov": 12.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.85,
   "yaw": -90.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.94
  }
 ],
 "id": "overlay_11F141B6_03CF_296C_4173_D0B190548480",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0809E884_03DD_6723_418E_703A71AF256C, this.camera_1F1E1B5A_0437_3927_4190_06368B346C1F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142C33E1_03FB_68E4_412A_E38F7D7329F4",
   "yaw": -7.92,
   "pitch": -18.41,
   "distance": 100,
   "hfov": 13.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.34,
   "yaw": -7.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ],
 "id": "overlay_11AF04E3_03CF_28E4_418D_6D29F09FAC36",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1, this.camera_1F4DBBBE_0437_395F_4175_19C82FD3E505); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142DF3E0_03FB_68E4_4174_23A267105520",
   "yaw": 113.17,
   "pitch": -7.61,
   "distance": 100,
   "hfov": 13.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.94,
   "yaw": 113.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.61
  }
 ],
 "id": "overlay_12F9F0D1_03CB_6724_4158_35C8FD45A1D7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF, this.camera_1F3FDB9B_0437_3924_4188_38A982DCCCFC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142D23E0_03FB_68E4_4180_20A05AAB7E9E",
   "yaw": -62.18,
   "pitch": -20.93,
   "distance": 100,
   "hfov": 13.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.13,
   "yaw": -62.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.93
  }
 ],
 "id": "overlay_121EB9D4_03CD_392C_418B_ECB8AECB6FC7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454, this.camera_1F5DCBE0_0437_38E4_4159_7114D9860040); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142D53E0_03FB_68E4_418D_1D33FAE112D2",
   "yaw": 21.73,
   "pitch": -19.67,
   "distance": 100,
   "hfov": 13.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.24,
   "yaw": 21.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.67
  }
 ],
 "id": "overlay_1146C631_03CD_6B64_4159_C7350AC94A62",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B, this.camera_1EE36B0D_0437_393C_4176_19BAFB5E6294); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142C53E1_03FB_68E4_4170_CEB20C34724F",
   "yaw": -32.28,
   "pitch": -19.42,
   "distance": 100,
   "hfov": 13.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.26,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.42
  }
 ],
 "id": "overlay_10FA5BD7_03CF_592C_417B_03AC21F99AF0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454, this.camera_1EF39B1C_0437_3923_418A_D132FAB6AABD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1433E3E1_03FB_68E4_4172_000EDB66CACA",
   "yaw": 163.42,
   "pitch": -12.89,
   "distance": 100,
   "hfov": 13.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.71,
   "yaw": 163.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.89
  }
 ],
 "id": "overlay_108CDD46_03CE_F92F_4178_3C5F7D14DA9A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0809E884_03DD_6723_418E_703A71AF256C_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE, this.camera_1E8B1A99_0437_3B24_418E_2719C9DE3FD3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_143233E2_03FB_68E4_4180_05C093A877A7",
   "yaw": 108.15,
   "pitch": -5.35,
   "distance": 100,
   "hfov": 14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14,
   "yaw": 108.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ],
 "id": "overlay_17DABBCC_03CB_D93C_4166_33CCC9ECD9E5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_080F8522_03DD_E967_4183_FAAACD80174E, this.camera_1E822A8B_0437_3B24_418C_EB19B2C56118); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1433C3E2_03FB_68E4_4186_A629060B46A9",
   "yaw": -72.73,
   "pitch": -12.89,
   "distance": 100,
   "hfov": 11.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.26,
   "yaw": -72.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.89
  }
 ],
 "id": "overlay_10BDBF82_03CB_7924_418E_835B45EDA940",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90, this.camera_1EA23AC5_0437_3B2C_4172_250D6A67D3EC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142F33DE_03FB_68DC_4185_969AA5209513",
   "yaw": 3.14,
   "pitch": -15.4,
   "distance": 100,
   "hfov": 10.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.65,
   "yaw": 3.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.4
  }
 ],
 "id": "overlay_1313B564_03DB_69EC_416D_7863CAE8D343",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE, this.camera_1EAEAAD3_0437_3B24_4142_3241A8A1A49F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142EB3DF_03FB_68DC_4177_0895FC14CDC5",
   "yaw": -163.42,
   "pitch": -11.38,
   "distance": 100,
   "hfov": 11.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.82,
   "yaw": -163.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.38
  }
 ],
 "id": "overlay_12C8BD62_03D5_D9E7_4153_EE55B7263CFC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0819C73C_03DD_2963_4180_4748DA881F46, this.camera_1EC79AF1_0437_38E5_4179_6680DBA26BC6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_143333E1_03FB_68E4_4176_2067B95F45F1",
   "yaw": -3.39,
   "pitch": -19.17,
   "distance": 100,
   "hfov": 13.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.28,
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.17
  }
 ],
 "id": "overlay_1045D99C_03CD_595C_416D_C793FCF07EAB",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_143343E1_03FB_68E4_415E_8B7EB6D19A22",
   "yaw": -66.2,
   "pitch": -17.66,
   "distance": 100,
   "hfov": 13.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.4,
   "yaw": -66.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.66
  }
 ],
 "id": "overlay_10776D32_03CD_7964_4183_CB34DBF6EC3E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0809E884_03DD_6723_418E_703A71AF256C, this.camera_1EBA4AE2_0437_38E7_418D_04DFC92B4F2C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1432F3E2_03FB_68E4_418A_D1DCE4C19576",
   "yaw": 148.59,
   "pitch": -11.13,
   "distance": 100,
   "hfov": 13.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.8,
   "yaw": 148.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.13
  }
 ],
 "id": "overlay_10535C25_03CA_DF6C_416A_986F7E2087B4",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_080F8522_03DD_E967_4183_FAAACD80174E, this.camera_1E9B9AB6_0437_3B6C_418D_1962634655B6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_143213E3_03FB_68E4_417E_BBC66F135D20",
   "yaw": -37.56,
   "pitch": -18.16,
   "distance": 100,
   "hfov": 13.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.36,
   "yaw": -37.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.16
  }
 ],
 "id": "overlay_175382FC_03F7_28DC_4144_C53B40FA73D0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B, this.camera_1E90DAA8_0437_3B64_4160_8DBB54D997A4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1431A3E3_03FB_68E4_418B_CFA62C8CCFAC",
   "yaw": -70.22,
   "pitch": -17.91,
   "distance": 100,
   "hfov": 13.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.38,
   "yaw": -70.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.91
  }
 ],
 "id": "overlay_17BA2D61_03F7_39E4_4186_725F99493FB7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0819C73C_03DD_2963_4180_4748DA881F46_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_08080D3A_03DD_D967_4175_81FA26A52EBF, this.camera_1F01AB2A_0437_3967_418C_4DD6E5EF0C4A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_143313E2_03FB_68E4_4189_A9EB098B62A6",
   "yaw": 80.01,
   "pitch": -8.37,
   "distance": 100,
   "hfov": 13.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 80.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.37
  }
 ],
 "id": "overlay_17637E33_03F5_3B65_418E_B22D21F2977D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1432B3E2_03FB_68E4_4160_26F010579D9C",
   "yaw": 14.19,
   "pitch": -14.65,
   "distance": 100,
   "hfov": 13.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 14.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.65
  }
 ],
 "id": "overlay_16E09AE9_03F5_38E5_418D_B825F09721AF",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0819C73C_03DD_2963_4180_4748DA881F46, this.camera_1F11FB38_0437_3964_4163_28795BFC2BB8); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1432C3E3_03FB_68E4_4157_769E7887D150",
   "yaw": -99.86,
   "pitch": -13.89,
   "distance": 100,
   "hfov": 10.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -99.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.89
  }
 ],
 "id": "overlay_17CA1F75_03F6_D9EC_4185_0656264497CD",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_080F8522_03DD_E967_4183_FAAACD80174E_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1, this.camera_1ED55AFE_0437_38DC_417D_4B18E036406D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_15CC65E1_03FB_28E5_4181_5B3E8F3207EA",
   "yaw": -94.96,
   "pitch": -4.35,
   "distance": 100,
   "hfov": 10.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.35
  }
 ],
 "id": "overlay_0DA71F9E_03DA_F95C_4170_B31316781FCC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142DA3E0_03FB_68E4_4181_279E73229ED8",
   "yaw": 101.62,
   "pitch": -6.1,
   "distance": 100,
   "hfov": 13.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.98,
   "yaw": 101.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.1
  }
 ],
 "id": "overlay_13588A35_03DB_5B6D_4180_6766C510539D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_142EC3DF_03FB_68DC_416A_A02DC1E98775",
   "yaw": -52.51,
   "pitch": -15.27,
   "distance": 100,
   "hfov": 9.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.45,
   "yaw": -52.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.27
  }
 ],
 "id": "overlay_0DEF12D9_03DD_2B24_418B_C520A9AD5C41",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "rotate": false,
 "id": "panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "height": "100%",
 "paddingLeft": 0,
 "visible": false
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 40,
 "top": "0%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 1,
 "class": "Container",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 40,
 "height": "100%"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142CE3E0_03FB_68E4_4167_5A756DA76B30",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142C33E1_03FB_68E4_412A_E38F7D7329F4",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_08185C60_03DD_7FE4_4178_0C98A6CCE454_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142DF3E0_03FB_68E4_4174_23A267105520",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142D23E0_03FB_68E4_4180_20A05AAB7E9E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142D53E0_03FB_68E4_418D_1D33FAE112D2",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F1F76_03DD_59EF_4180_F1311BB9D5BE_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142C53E1_03FB_68E4_4170_CEB20C34724F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1433E3E1_03FB_68E4_4172_000EDB66CACA",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0809E884_03DD_6723_418E_703A71AF256C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_143233E2_03FB_68E4_4180_05C093A877A7",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1433C3E2_03FB_68E4_4186_A629060B46A9",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_08080D3A_03DD_D967_4175_81FA26A52EBF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142F33DE_03FB_68DC_4185_969AA5209513",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142EB3DF_03FB_68DC_4177_0895FC14CDC5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0FC180BB_03DA_E764_416D_8F565E4BD1E1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_143333E1_03FB_68E4_4176_2067B95F45F1",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_143343E1_03FB_68E4_415E_8B7EB6D19A22",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1432F3E2_03FB_68E4_418A_D1DCE4C19576",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0818849D_03DD_2F5D_4141_739B79AD1E3B_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_143213E3_03FB_68E4_417E_BBC66F135D20",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1431A3E3_03FB_68E4_418B_CFA62C8CCFAC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0819C73C_03DD_2963_4180_4748DA881F46_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_143313E2_03FB_68E4_4189_A9EB098B62A6",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1432B3E2_03FB_68E4_4160_26F010579D9C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1432C3E3_03FB_68E4_4157_769E7887D150",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_080F8522_03DD_E967_4183_FAAACD80174E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_15CC65E1_03FB_28E5_4181_5B3E8F3207EA",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142DA3E0_03FB_68E4_4181_279E73229ED8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0809C8E8_03DD_38E4_417F_0EE35EDBFB90_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_142EC3DF_03FB_68DC_416A_A02DC1E98775",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_081FCE49_03DA_DB25_4189_EEA352B44CEC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "height": "100%"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "borderRadius": 0,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingRight": 0,
 "top": "40%",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "bottom": "40%",
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "backgroundOpacity": 0,
 "maxWidth": 80
},
{
 "maxHeight": 1095,
 "borderRadius": 0,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.jpg",
 "minHeight": 30,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 40,
 "horizontalAlign": "left",
 "class": "Image",
 "height": "25%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "backgroundOpacity": 0,
 "maxWidth": 1095
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "width": "100%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "25%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "25%",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "100%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "0%",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "height": "26.316%",
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "borderRadius": 0,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "paddingBottom": 0,
 "right": "3.67%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingRight": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "bottom": "30.3%",
 "minWidth": 1,
 "class": "IconButton",
 "height": 42,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingLeft": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "backgroundOpacity": 0,
 "maxWidth": 80
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Localiza\u00e7ao",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://g.page/r/CXhgKaMmS2O_EAE', '_blank')",
 "class": "Button",
 "gap": 5,
 "height": 50,
 "shadow": false,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Instagram",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://www.instagram.com/atriumra/', '_blank')",
 "class": "Button",
 "gap": 23,
 "height": 50,
 "shadow": false,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Location",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "WhatsApp",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://api.whatsapp.com/send?phone=5534996365265&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20atendente%20da%20loja%20Atrium.', '_blank')",
 "class": "Button",
 "gap": 5,
 "height": 50,
 "shadow": false,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 2,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": 78,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Atrium</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>R. Oleg\u00e1rio Maciel, 881<BR/>Centro</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tel: (34) 3216-3899</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
}],
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 20,
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "scripts": {
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.7,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
