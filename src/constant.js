export function constant (x) {
  return function constant() {
    return x;
  };
}
