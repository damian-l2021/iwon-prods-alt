export default function observer(
  target: HTMLElement,
  optionsParameter: any,
  nextUrl: any,
  actualUrl: any
): string {
  let url = actualUrl;

  const options = {
    root: optionsParameter.root,
    rootMargin: optionsParameter.rootMargin,
    threshold: optionsParameter.threshold,
  };

  const changeActualVideo = (entries: any, observer: any) => {
    entries.forEach((entrie: any) => {
      if (entrie.intersectionRatio == optionsParameter.threshold) {
        url = nextUrl;
      }
    });
  };

  const observer = new IntersectionObserver(changeActualVideo, options);
  observer.observe(target);

  return url;
}
