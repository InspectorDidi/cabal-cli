// print and simplify are debugging utils
function print (t, arr, printAll) {
  console.error(`${t}: ${arr.length}`)
  if (printAll) {
    console.error('v'.repeat(30))
    arr.map((m) => console.error(m))
    console.error('^'.repeat(30))
  }
}

function simplify (arr) {
  if (arr.length && arr[0].value) {
    return arr.map((m) => {
      let content = m.value.content ? m.value.content.text : JSON.stringify(m.value)
      return `${m.value.timestamp}: ${content}`
    })
  }
  return arr
}

module.exports = { simplify, print }
