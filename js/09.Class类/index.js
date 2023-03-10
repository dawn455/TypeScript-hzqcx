// 1.class的基本用法 继承 和 类型的约束 implements
// 2.class的修饰符readonly private private protected public
// 3.super原理
// 4.静态方法
// 5.get set
// 虚拟duo简单版
class Dom {
    // 创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
            tag: 'div',
            children: [
                {
                    tag: 'section',
                    text: '我是子节点1'
                },
                {
                    tag: 'section',
                    text: '我是子节点2'
                },
                {
                    tag: 'input',
                    text: '我是子节点3'
                },
            ]
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app'
});
