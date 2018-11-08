import InitEvent from '../modules/events'

class Keyboard {
    constructor(options) {
        this.options = Object.assign({
            container: ''
        }, options)
        this.container = document.getElementById(this.options.container)
        this.initDom()
        this.initEvent()
    }

    initDom() {
        let domStr = `
            <div class="left">
                <div>
                    <span data-keycode="1">1</span>
                    <span data-keycode="2">2</span>
                    <span data-keycode="3">3</span>
                </div>
                <div>
                    <span data-keycode="4">4</span>
                    <span data-keycode="5">5</span>
                    <span data-keycode="6">6</span>
                </div>
                <div>
                    <span data-keycode="7">7</span>
                    <span data-keycode="8">8</span>
                    <span data-keycode="9">9</span>
                </div>
                <div>
                    <span data-keycode="dot">.</span>
                    <span data-keycode="0">0</span>
                    <span data-keycode="del">删除</span>
                </div>
            </div><div class="right">
                <div class="top" data-keycode="next">下一项</div>
                <div class="bottom" data-keycode="confirm">确认</div>
            </div>
        </div>
        `

        this.container.innerHTML = domStr
    }

    initEvent() {
        this.container.addEventListener('click', e => {
            let target = e.target
            let keyCode = target.getAttribute('data-keycode')
            if(keyCode) {
                this.dispatchEvent('keydown', keyCode)
            }
        })
    }
}

InitEvent(Keyboard)
export default Keyboard