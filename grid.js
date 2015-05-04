var stageWidth = 700;
var stageHeight = 600;
var gridDist = 100;

// Move the entire movie a bit down and right, so it is easier to read
stage = new Group().addTo(stage);
stage.attr({x:20, y:20});

// Draw a grid.
for (var i=0; i<stageWidth; i+=10){
  new Path().addTo(stage)
    .attr({strokeWidth:1, strokeColor:'black', opacity:i%gridDist==0 ? 0.5 : 0.2})
    .moveTo(0, i)
    .lineTo(stageHeight, i);
}
for (var i=0; i<stageHeight; i+=10){
  new Path().addTo(stage)
    .attr({strokeWidth:1, strokeColor:'black', opacity:i%gridDist==0 ? 0.5 : 0.2})
    .moveTo(i, 0)
    .lineTo(i, stageWidth);
}
