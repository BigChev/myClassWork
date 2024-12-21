var spongebob=0

//The setup function only happens once
function setup() {
	createCanvas(500, 700); //create a 500px X 500px canvas
  background (0,0,0);
}

 {
   
  

  
  fill(250,250,250);
  stroke(0,0,0);
  rect(110,110,280,130, 5); // give all corners a radius of 5.

  stroke(0,0,0);
  strokeWeight(2);
  line(375,152,120,152);

   stroke(0,0,0);
   strokeWeight(2):
  line(375,192,120,192);
  
  stroke(250,250,250);
  fill(255,127,150);
  strokeWeight(1);
  textFont("Times New Roman");
  textSize(21);
  text("A Journey Beyond The Truth",125,150);

  stroke(250,250,250);
  strokeWeight(1);
  textFont("Times New Roman");
  textSize(21);
  text("By Unknown",190,190);


  
  
}


function mousePressed()  {

  if (spongebob>=500) {
    spongebob=0;
  }else{ 

  spongebob=spongebob+10;
}

}
