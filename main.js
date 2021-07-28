Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
var Cam = document.getElementById("Camera");
Webcam.attach('#Camera');

function snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("Result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ML5 version:',ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jl3tuEvC6/model.json', modelLoaded);
function modelLoaded(){
    console.log('Model loaded!');
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}