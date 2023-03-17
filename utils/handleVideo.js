export function playVideo(video){
    video.play()
    video.volume = 1;
}
export function pauseVideo(video){
    video.currentTime = 0;
    video.pause()
}