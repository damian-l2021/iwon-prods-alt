export function playVideo(video) {
  video.setAttribute('controls', true)
}

export function pauseVideo(video) {
  video.removeAttribute('controls')
  video.pause();
  video.load();
}
