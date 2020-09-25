const requireAll = r => r.keys().forEach(r)

try {
  requireAll(require.context('../../icons/', true, /\.svg$/))
} catch(e) {
  // console.log(e)
}
