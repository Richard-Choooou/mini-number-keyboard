import KeyBoard from '../src/index'


let keyBoard = new KeyBoard({
    container: 'container'
})

keyBoard.on('keydown', function(code) {
    console.log(code)
})