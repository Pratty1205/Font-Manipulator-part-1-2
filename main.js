function setup() {
    canvas = createCanvas(400, 300);
    video = createCapture(VIDEO);
    video.size(400, 300);
    canvas.position(650, 200);
    video.position(200, 200);
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", getResult);
}

function model_loaded() {
    console.log("Model is not loaded");
}

function getResult(result) {
    if (result.length > 0) {
        console.log(result);
    }
}