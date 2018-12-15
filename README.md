# 一个简单的移动端数字键盘

![160027](https://user-images.githubusercontent.com/23492006/49925297-6c2a0000-fef3-11e8-807b-acf9e5f8db3e.gif)


## 安装
> npm i mini-number-keyboard --save

## 导入
```js
import MiniKeyboard from 'mini-number-keyboard'
or
<script src="/node_modules/mini-number-keyboard/dist/keyboard.min.js"></srcipt>
```

## 使用
```html
<div id="container" class="keyboard-container"></div>
<script>
    let keyboard = new MiniKeyboard({
        container: 'container'
    })
    keyboard.on('keydown', function(key) {
        console.log(key)
    })
</script>
```