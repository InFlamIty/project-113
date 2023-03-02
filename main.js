function setup()
{
    canvas = createCanvas(600 , 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(600 , 600)
    video.hide()
}
function draw()
{
    image(video , 100 , 100 , 400 , 400)
    fill("purple")
    circle(30 , 30 , 60)
    circle(570 , 30 , 60)
    circle(30 , 570 , 60)
    circle(570 , 570 ,60)
    fill("red")
    rect(60 , 15 , 480 , 30)
    rect(60 , 555 , 480 , 30)
    rect(15 , 60 , 30 , 480)
    rect(555 , 60 , 30 , 480)
}