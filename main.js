let str = `
010-1234-5678.
1234@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps the lazy dog.
abbccccdddd
`

//const regexp = new RegExp('the','gi') //g는 모든 문자 일치 gi 대소문자 구분없이 찾는 플래그
//const regexp = /the/gi //리터널 방식
//console.log(str.match(regexp))

const regexp = /the/gi
//console.log(regexp.test(str)) //찾는 값이 있는지 true false
// str = str.replace(regexp, 'AAA') //찾아서 변경한 후 반환
// console.log(str)
//console.log(str.match(/the/gi))
//console.log(str.match(/\.$/gim))

//이스케이프 문자: \ 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자