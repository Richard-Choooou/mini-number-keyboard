import KeyBoard from '@src/index'


let keyBoard = new KeyBoard({
    container: 'container',
    left: [
        [{key: 1, code: 1}, {key: 2, code: 2}, {key: 3, code: 3}],
        [{key: 4, code: 4}, {key: 5, code: 5}, {key: 6, code: 6}],
        [{key: 7, code: 7}, {key: 8, code: 8}, {key: 9, code: 9}],
        [{key: '.', code: 'dot'}, {key: 0, code: 0}, {key: '', code: 'del', type: 'image'}]
    ],
    right: [
        {key: '下一项', code: 'next'},
        {key: '确认', code: 'confirm'}
    ]
})

keyBoard.on('keydown', function(code) {
    console.log(code)
})