var initRaindrop = () =>{

var _requestAnimationFrame = window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.msRequestAnimationFrame || 
  window.oRequestAnimationFrame || 
  function(callback) {
    window.setTimeout(callback, 1000/60)
  };
  var canvas = document.createElement("canvas"),
      ctx    = canvas.getContext('2d');
      document.getElementById('waterdrop').appendChild(canvas);

  var springs = [],
      MAX_SPRINGS = 250;

  canvas.width = window.innerWidth;
  canvas.height = 50;

ctx.fillStyle = '#1C1F2F';

for (var i=0; i<MAX_SPRINGS; i++)
{
  springs[i] = new Spring();
}

function updateSprings( spread )
{
  var i;
  for (i=0; i<MAX_SPRINGS; i++)
  {
    springs[i].update( 0.02, 0.1 );
  }
  
  var leftDeltas = [],
      rightDeltas = [];
  
  for (var t=0; t<8; t++) {
  
  for (i=0; i<MAX_SPRINGS; i++)
  {
    if (i > 0)
    {
      leftDeltas[i] = spread * (springs[i].p - springs[i-1].p);
      springs[i-1].v += leftDeltas[i];
    }
    if (i < MAX_SPRINGS-1)
    {
      rightDeltas[i] = spread * (springs[i].p - springs[i+1].p);
      springs[i+1].v += rightDeltas[i];
    }
  }
  
  for (i=0; i<MAX_SPRINGS; i++)
  {
    if (i > 0)
      springs[i-1].p += leftDeltas[i];
    if (i < MAX_SPRINGS-1)
      springs[i+1].p += rightDeltas[i];
  }
    
  }
  
}

function Spring()
{
  this.p = 0;
  this.v = 0;
  this.update = function( damp, tens )
  {
    this.v += (-tens * this.p - damp * this.v);
    this.p += this.v;
  }
}

function renderWaves()
{
  var i;
  ctx.beginPath();
  ctx.moveTo( 0, canvas.height );
  for (i=0; i<MAX_SPRINGS; i++)
  {
    ctx.lineTo( i * (canvas.width / MAX_SPRINGS), (canvas.height/2) + springs[i].p );
  }
  ctx.lineTo( canvas.width, canvas.height );
  ctx.fill();
}

function tick()
{
  if (Math.random() > 0.95)
    springs[Math.floor(Math.random() * MAX_SPRINGS)].p = 150;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateSprings( 0.1 );
  renderWaves();
  _requestAnimationFrame(tick);
}

tick();
};

export default initRaindrop;