export default function zeroPad_factory () {
  return function zeroPad (n, width, z) {
    width = width || 2
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
}
