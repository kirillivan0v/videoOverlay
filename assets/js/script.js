const mainVideo = document.querySelector('.mainVideo');
let videoInfo = {};
let overlayVideoContainer = document.querySelector('.overlayVideo');
let overlayVisible = false;


// Get information from giving to taking
function getVideoInfo(taking, giving){
    taking.currentTime = giving.currentTime;
    taking.paused = giving.paused;
    taking.muted = giving.muted;
    taking.volume = giving.volume;
    if(!giving.paused)
        taking.play();
    }

function onScroll(){
    if(window.scrollY > 500)
    {
        if(!overlayVideoContainer.firstElementChild)
            showOverlay(true);
    }else
            showOverlay(false);
}

function showOverlay(visibility){
    if(visibility){ // if need to show overlay
        if(!overlayVisible){ // if overlay wasn't showed earlier
            let clone = mainVideo.cloneNode(true);
                clone.className = ''; // clear clone's class for clean css 
                getVideoInfo(clone, mainVideo);
            overlayVideoContainer.appendChild(clone);
            overlayVisible = true;

            mainVideo.pause(); // pause for main video
        }
    }else{
        if(overlayVisible){
            if(overlayVideoContainer.firstElementChild){
                getVideoInfo(mainVideo, overlayVideoContainer.firstElementChild)
                overlayVideoContainer.removeChild(overlayVideoContainer.firstElementChild);
                // mainVideo.play();
                overlayVisible = false;
            }
        }
    }
}


window.addEventListener('scroll', onScroll);

