import InitEvent from '../modules/events'
const arrow = require('../static/arrow.png')
class Keyboard {
    constructor(options) {
        this.options = Object.assign({
            container: ''
        }, options)
        this.container = this.getDom(this.options.container)
        this.container.classList.add('keyboard-container')
        this.initDom()
        this.initEvent()
    }

    getDom(target) {
        if (target instanceof HTMLDocument) {
            return target
        } else {
            return document.getElementById(target)
        }
    }

    initDom() {
        let domStr = `
            <div class="keyboard-container">
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
                        <span data-keycode="del"><img src="${arrow}"></span>
                    </div>
                </div><div class="right">
                    <div class="top" data-keycode="next">下一项</div>
                    <div class="bottom" data-keycode="confirm">确认</div>
                </div>
            </div>
        </div>
        `

        this.container.innerHTML = domStr
    }

    initEvent() {
        const self = this
        this.container.addEventListener('click', function(e) {
            for(let target = e.target; target && target != this; target = target.parentNode) {
                let keyCode = target.getAttribute('data-keycode')
                if(keyCode) {
                    self.dispatchEvent('keydown', keyCode)
                    return
                }
            }
        })
    }
}

InitEvent(Keyboard)
export default Keyboard