const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const facectx = faceCanvas.getContext('.face');

const faceDetector = new window.FaceDetector();

console.log(video,canvas,faceCanvas,faceDetector);

// Write a function that will populate the users video.

async function populateVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({
        video:{width:1280,height:720},
        audio:true,
    });
    video.srcObject = stream;
    await video.play();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}
function drawFace(face){
    ctx.strokeStyle = '#ffc600';
    ctx.lineWidth = 2;
    const {width,height,top,left} = face.boundingBox;
}
async function detector(){
    const faces = await faceDetector.detect(video);
    // console.log(faces);
    // console.log(faces.length) => It gives us the number of faces detected.
    faces.forEach(drawFace);

    requestAnimationFrame(detector);
};



populateVideo().then(detector);
