function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(220,200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image(video,5,5,390,390);
    tint(tint_color);

}
function filterTint(){
    tint_color = document.getElementById("Color").value;
}

function take_snapshot(){
    save('IMG.png');
}

