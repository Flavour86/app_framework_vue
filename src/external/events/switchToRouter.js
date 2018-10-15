export default function switchToRouter (to) {
  if (!to) return
  this.$router.push(to)
}
