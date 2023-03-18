export function showControls(video) {
  video.setAttribute('controls', true)
}

export function hideControls(video) {
  video.removeAttribute('controls')
}

export function handleClick(video) {
  console.log(video)
}
