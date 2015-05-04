      var x=null,y=null,a=null,b=null;
function lin(){
new Path([
  a, b,
  x, y,
]).addTo(stage).stroke('red',5).on('pointerdown',function(e)
{
          x=e.stageX;
  y=e.stageY;
if(a==null)
{
a=x;
b=y;
}
else{
lin();
a=null;
x=null;
}
});
}
new Rect(0,0,500,500).addTo(stage).fill('white').on('pointerdown',function(e)
{
          x=e.stageX;
  y=e.stageY;
if(a==null)
{
a=x;
b=y;
}
else
{
  lin();

a=null;
x=null;
}
}
          );