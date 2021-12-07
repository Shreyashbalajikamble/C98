var sr = window.webkitSpeechRecognition;
var SpeechRecognition = new sr();

function start(){
 document.getElementById("textBox").innerHTML="";
 SpeechRecognition.start();
}

SpeechRecognition.onresult = function run(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    speak();
}

function speak(){
    var api = window.speechSynthesis;

    text_box = document.getElementById("textBox").value;

    var utterThis = new SpeechSynthesisUtterance(text_box);

    api.speak(utterThis);

    camara = document.getElementById("web_cam");

    Webcam.attach(camara);
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90 
});