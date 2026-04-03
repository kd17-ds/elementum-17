export function revealClass(visible, from = 'translate-y-12') {
  return `transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : `opacity-0 ${from}`}`;
}
