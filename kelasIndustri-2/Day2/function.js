const hello = () => {
    console.log('Hello!')
}
const greet = (name = 'Guest') => {
    console.log('You are ' + name)
}


module.exports = {hello, greet}