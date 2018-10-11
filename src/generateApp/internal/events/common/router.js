export function switchToRouter (to) {
  console.log(to, '22')
  this.$router.push(to)
}

export function attend (...args) {
  console.log('11', args)
}
