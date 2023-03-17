export function playVideo(video){
    video.play()
    video.volume = 1;
}
export function pauseVideo(video){
    video.pause()
    video.load()
}