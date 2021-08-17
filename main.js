let str = `
010-1234-5678
1234@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps the lazy dog.
abbccccdddd
`

//const regexp = new RegExp('the','gi') //g는 소문자 gi 대소문자 구분없이 찾는 플래그
//const regexp = /the/gi //리터널 방식
//console.log(str.match(regexp))

const regexp = /fox/gi
//console.log(regexp.test(str)) //찾는 값이 있는지 true false
str = str.replace(regexp, 'AAA') //찾아서 변경한 후 반환
console.log(str)