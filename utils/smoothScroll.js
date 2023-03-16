const smoothScroll = (target, duration, compensation) => {
    let elemTarget = target;
    let elemPos = elemTarget.getBoundingClientRect().top - compensation;
    let initialPos = window.scrollY;
    let initialTime = null;

    const animation = presentTime => {
        if(initialTime === null) initialTime = presentTime;
        let passedTime = presentTime - initialTime;
        let typeAnimation = easeInOutQuad(passedTime, initialPos, elemPos, duration);

        window.scrollTo(0, typeAnimation);

        if(passedTime < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

const easeInOutQuad = (t, b, c, d) => {
    t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
}; 

export { smoothScroll };