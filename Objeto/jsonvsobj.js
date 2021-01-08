const obj = {a : 1, b:2, soma(){
    return a + b
}}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1}'))