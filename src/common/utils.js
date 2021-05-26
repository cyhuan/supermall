export function debounce(func, delay) {
  let tiemr = null;
  return function (...args) {
    if (tiemr) clearTimeout(tiemr);
    tiemr = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
