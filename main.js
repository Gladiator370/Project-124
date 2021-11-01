function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550)
    canvas.position(550,150)
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotreslt)
}
function draw(){
    backround('#969A97')
}
function modelloaded(){
    console.log('poseNet is loaded!');
}
function gotreslt(){  
        if(reslt < 0)
{
    console.log('gotreslt')

}
}    