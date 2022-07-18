const left_arrow = document.getElementById('arrow-left')
const right_arrow = document.getElementById('arrow-right')
left_arrow.addEventListener('click', changeIMGleft)
right_arrow.addEventListener('click', changeIMGright)
const colors = [
  '#7D8587',
  '#41636c',
  '#4fab3f',
  '#825338',
  '#533882',
  '#828138',
]
let x = 0
function changeIMGleft() {
  x--
  if (x < 0) x = colors.length - 1
  document.getElementById('bg-image').style.background = colors[x]
}
function changeIMGright() {
  x++
  if (x == colors.length) x = 0
  document.getElementById('bg-image').style.background = colors[x]
}

//# sourceMappingURL=index.6781882e.js.map
