img = "";
Status = "";
object = [];
sound="";
function preload() {
    sound = loadSound("alarm.wav");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(640, 420);
    video.hide();
}

function modelLoaded() {
    console.log("model is loaded");
    Status = true;
    objectDetected.detect(video, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(result);
        object = result;
    }
}

function start() {
    objectDetected = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Detection Status: Detecting objects";
}

function draw() {
    image(video, 0, 0, 640, 420);
    if (Status) {
        document.getElementById("status").innerHTML = "Detection Status: Objects Detected";
        r = random(255);
        b = random(255);
        g = random(255);
        objectDetected = ml5.objectDetector("cocossd", modelLoaded)

        for (i = 0; i < object.length; i++) {
            fill(r, g, b);
            strokeWeight(1);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            strokeWeight(3);
            stroke(r, g, b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);

        
        if (object[i].label == "person") {
            sound.play();
        }
    }
    }
}

function stop() {
    sound.stop()
}