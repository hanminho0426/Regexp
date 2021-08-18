// let str = `
// 010-1234-5678
// 1234@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps the lazy dog.
// abbccccdddd
// http://localhost:1234
// hxyp
// d`

//const regexp = new RegExp('the','gi') //g는 모든 문자 일치 gi 대소문자 구분없이 찾는 플래그
//const regexp = /the/gi //리터널 방식
//console.log(str.match(regexp))

//const regexp = /the/gi
//console.log(regexp.test(str)) //찾는 값이 있는지 true false
// str = str.replace(regexp, 'AAA') //찾아서 변경한 후 반환
// console.log(str)
//console.log(str.match(/the/gi))
//console.log(str.match(/\.$/gim))

//이스케이프 문자: \ 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자


// console.log(
//   str.match(/d$/gm) //d로 끝나는 부분을 찾기
// ) 


// console.log(
//   str.match(/^t/gim) //t로 시작하는 부분을 찾기
// ) 

// console.log(
//   str.match(/h..p/g) //임의의 한 문자와 일치
// )

// console.log(
//   str.match(/h..p/g) //임의의 한 문자와 일치
// )

// console.log(
//   str.match(/fox|dog/)// 둘 중 먼저 찾아지는 곳에서 stop
// )

// console.log(
//     str.match(/fox|dog/g)// g를 붙이면 모두 찾아냄
//   )

// console.log(
//   str.match(/https?/g)//s가 있을 수도 있고 없을 수도 있고
// )

// console.log(
//   str.match(/d{2}/g) //d가 2번이상 연속적으로 반복되는 곳
// )

// console.log(
//   str.match(/d{2,}/g) //d가 두번이상 연속적으로 반복
// )

// console.log(
//   str.match(/d{2,3}/g)// d가 두번이상 3번 이하 반복
// )

// console.log(
//   str.match(/\w{2,3}/g) //숫자를 포함한 영어 알파벳이  2번이상 3번 이하 반복
// )

// console.log(
//   str.match(/\b\w{2,3}\b/g) //\b \b 경계를 만들어줌
// )

// console.log(
//   str.match(/[fox]/g) //f또는 o또는 x
// )

// console.log(
//   str.match(/[0-9]{1,}/g) //숫자가 1개이상 연속되는 0-9
// )

// console.log(
//   str.match(/[가-힣]{1,}/g) //1개이상 모든 한글이 연속되는 것
// )

// let st = `
// 010-1234-5678
// 1234@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps the lazy dog.
// abbccccdddd
// http://localhost:1234
// hxyp
// 동해물과_백두산이 마르고 닳도록
// d`


// console.log(
//   st.match(/\w/g)
// )

// console.log(
//   st.match(/\bf\w{1,}\b/g) //숫자 f로 시작하는 모든 알파벳
// )

// console.log(
//   st.match(/\d/g) //모든숫자 일치
// )


// console.log(
//   st.match(/\d{1,}/g) // 숫자 1개이상 일치
// )

// const h = ` the hello  world   !`

// console.log(
//   h.replace(/\s/g,'') //모든 공백 삭제
// )
 

// const s = `
// 010-1234-5678
// 1234@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps the lazy dog.
// abbccccdddd`

// console.log(
//   s.match(/.{1,}(?=@)/g) //이메일의 앞쪽 추출
// )

// console.log(
//   s.match(/(?<=@).{1,}/g) //이메일의 뒷쪽 추출
// )

