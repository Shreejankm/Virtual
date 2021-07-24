var dog,sadDog,happyDog;
var button1,button2,foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  foodS = loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("FEED");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed:"+lastFed%12 + "PM", 350, 30);
  }
  else if(lastFed == 0){
    text("Last Feed: 12AM",350,30);
  }
  else{
    text("Last Feed:" + lastFed%12 + "AM", 350, 30);
  }

  drawSprites();
}

function lastFed(){
  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val()
  });
}

function feedDog(){
  dog.addImage(happyDog);

  foogObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })

}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}