// Boolean、 Number、string、RegExp、Date、Error
// let b:Boolean = new Boolean()
// let n: Number = new Number(true)
// let d: Date = new Date()
// let r: RegExp = /^1/
// let e: Error = new Error('error!')
// let div:NodeList = document.querySelectorAll('div')
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let srt = 'hzqcx123456'.split('');
let Arr = Array(Math.ceil(canvas.width / 5)).fill(0);
console.log(Arr);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    Arr.forEach((item, index) => {
        ctx.fillText(srt[Math.floor(Math.random() * srt.length)], index * 10, item + 10);
        Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(rain, 40);
