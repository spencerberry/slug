// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options:{
    width: window.innerWidth,
    height: window.innerHeight-100,
    background: '#f00',
    pixelRatio: 1
  }
});

var ground = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight-120,
  window.innerWidth-20,
  20,
  { isStatic: true }
);

var terrain = []
terrain.push(ground);

function basicBox(x, y){
  return Bodies.rectangle(x, y, 20, 20);
}

function varietyBox(x,y){
  return Bodies.rectangle(x, y, 20, randI(200,20));
}

function randI(max = 10, min = 1){
  return Math.floor(( Math.random() * (max - min + 1) ) + min);
}
// create two boxes and a ground
var i;
for (i = 1; i < window.innerWidth / 20 - 1; i ++){
  terrain.push(varietyBox(i*20, ground.position.y - randI(window.innerHeight)));
}
// add all of the bodies to the world
World.add(engine.world, terrain);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
