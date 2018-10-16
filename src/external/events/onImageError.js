import defaultImage from '@/generateApp/theme/images/none.png'

export default function onImageError ($route, item, $event) {
  const target = $event.target
  if (target) {
    target.src = defaultImage
  }
}
