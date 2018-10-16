export default function switchToRouter (to) {
  console.log(1111, to)
  if (!to) return
  this.$router.push(to)
}
