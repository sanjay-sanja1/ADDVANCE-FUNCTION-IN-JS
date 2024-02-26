function all(a){
   return /^\d+$/ .test(a)

}
console.log( all(89))



 function str(b){
  return /^[A-Z]+$/.test(b)
 }

console.log(str("HELLo"))

function str2(c){
    return c === c.toLowercase;
}
console.log(str2("sanjay"))