console.log(1);

fetch('https://koreanjson.com/users/1')
  .then((response) => response.json())
  .then((result) => { console.log(result) })

console.log(3);
