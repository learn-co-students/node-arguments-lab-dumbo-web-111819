let _ = require('lodash');

process.argv.shift()
process.argv.shift()
passwordLength=parseInt(process.argv[0])
noOfPassword=parseInt(process.argv[1])

function generatePassword(){
    let emptyString=''
    let passWord="abcdefghijklmnopqrstuvwxyz123456789"
    let i=0
    while(i!==passwordLength){
        emptyString+=_.sample(passWord.split(''))
        i++
    }
    return emptyString
}

let j=0
while (j!==noOfPassword){
    process.stdout.write(`${generatePassword()}\n`)
    j++
}
process.exit(0)