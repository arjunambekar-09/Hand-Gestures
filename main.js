gesture_1 = "";
gesture_2 = "";
gesture_3 = "";

Webcam.set({
    width: 350,
    height: 300,
    img_format: "jpg",
    jpg_quality: 150
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("camera_1").innerHTML = "<img id='captured_img' src='" + data_uri + "'>"
    });
}

console.log("ml5 version:" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CGwOLGhdJ/model.json",model_loaded());

function model_loaded(){
    console.log("Model Loaded!");
}