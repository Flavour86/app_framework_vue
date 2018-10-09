// import postcss from 'postcss'
// import autoprefixer from 'autoprefixer'
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

let str = 'display: inline-block;margin: 0 10px;transform: scale(1.2)'
postcss([
  autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']})
]).process(str, {from: undefined}).then(res => {
  console.log(res.css)
})
