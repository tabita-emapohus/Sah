function setup() {
    createCanvas(600, 600)
    generateCirclePositions()
    keyPressed()
}
function draw() {
    background("black");
    drawsah();
    smilyFaceTabita();
}
function drawsah() {
    //
    square(0, 0, 75)
    fill("white")
    //
    square(150, 0, 75)
    fill("white")
    //
    square(300, 0, 75)
    //
    square(450, 0, 75)
    fill("white")
    // 
    square(75, 75, 75)
    fill("white")
    //
    square(225, 75, 75)
    fill("white")
    // 
    square(375, 75, 75)
    fill("white")
    //
    square(525, 75, 75)
    fill("white")
    //
    square(0, 150, 75)
    fill("white")
    //
    square(150, 150, 75)
    fill("white")
    //
    square(300, 150, 75)
    fill("white")
    //
    square(450, 150, 75)
    fill("white")
    //
    square(75, 225, 75)
    fill("white")
    // 
    square(225, 225, 75)
    fill("white")
    //
    square(375, 225, 75)
    fill("white")
    //
    square(525, 225, 75)
    fill("white")
    //
    square(0, 300, 75)
    fill("white")
    // 
    square(150, 300, 75)
    fill("white")
    //
    square(300, 300, 75)
    fill("white")
    // 
    square(450, 300, 75)
    fill("white")
    //
    square(75, 375, 75)
    fill("white")
    //
    square(225, 375, 75)
    fill("white")
    //
    square(375, 375, 75)
    fill("white")
    // 
    square(525, 375, 75)
    fill("white")
    //
    square(0, 450, 75)
    fill("white")
    //
    square(150, 450, 75)
    fill("white")
    // 
    square(300, 450, 75)
    fill("white")
    //
    square(450, 450, 75)
    fill("white")
    //
    square(75, 525, 75)
    fill("white")
    //
    square(225, 525, 75)
    fill("white")
    //
    square(375, 525, 75)
    fill("white")
    //
    square(525, 525, 75)
    fill("white")
}
function smilyFaceTabita() {
    //Body1
    stroke("black");
    fill("gray");
    circle(33,190,50);

    // 2
    fill("gray");
    stroke("black");
    circle(115,114,50);

     //3
     fill("gray");
     stroke("black");
     circle(190,260,50);

     //4
     fill("gray");
     stroke("black");
     circle(263,114,50);

     //5
     fill("gray");
     stroke("black");
     circle(340,190,50);

     //6
     fill("gray");
     stroke("black");
     circle(415,114,50);
     
     //7
     fill("gray");
     stroke("black");
     circle(490,260,50);

     //8
     fill("gray");
     stroke("black");
     circle(565,114,50);

     //Body White
     //1
     fill("beige");
     stroke("black");
     circle(35,485,50);

     //2
     fill("beige");
     stroke("black");
     circle(115,340,50);

     //3
     fill("beige");
     stroke("black");
     circle(190,485,50);

     //4
     fill("beige");
     stroke("black");
     circle(260,410,50);


     //5
     fill("beige");
     stroke("black");
     circle(336,340,50);


     //6
     fill("beige");
     stroke("black");
     circle(415,415,50);


     //7
     fill("beige");
     stroke("black");
     circle(485,485,50);

     //8
     fill("beige");
     stroke("black");
     circle(565,410,50);

}
function generateCirclePositions() {
    circlePositions = [];
    for (let i = 0; i < 16; i++) {
        let x = random(width);
        let y = random(height);
        circlePositions.push({ x: x, y: y });
    }
}

function keyPressed() {
    if (keyCode == ENTER) {
        generateCirclePositions();
    }
}
