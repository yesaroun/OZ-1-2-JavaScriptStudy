// fetch('https://www.daum.net')
//   .then((response) => response.text())
//   .then((result) => { console.log(result) })

// fetch('https://www.daum.net')
//   .then((response) => { console.log(response) })

fetch('https://koreanjson.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) })
