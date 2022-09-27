function reversString(names){
    let reversNames=''
    for(let letter of names){
        reversNames=letter+reversNames
    }
    return reversNames
}
let names='hello'
console.log(reversString(names))