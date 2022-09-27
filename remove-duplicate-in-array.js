function removeDuplicate(names) {
    let unicsNames = []
    for (let element of names) {
        if (unicsNames.indexOf(element) == -1) {
            unicsNames.push(element)
        }
    }
    return unicsNames;
}
let names = ['liza', 'lizy', 'lilu', 'lalu', 'liza', 'lalu']
console.log(removeDuplicate(names))