fetch('https://koreanjson.com/users')
  .then((response) => response.text())
  .then((stringData) => JSON.parse(stringData))
  .then((result) => { console.log(result) })
