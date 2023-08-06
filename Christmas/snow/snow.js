function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


const createSnow = (min,max,saturationSnow) => {
const style = document.createElement('style')
style.textContent = ` 

body{
	position:relative
}

.snow{
	position:fixed;
	width:30px;
	height:30px;
	top:-30px;
	background-repeat:no-repeat;
	z-index: 99999;
	animation-name: fall;
	animation-timing-function:linear;
	pointer-events:none;
	background-position:center;
	
}

@keyframes fall {

	100%{
		transform:translate(0vw,100vh)
	}
}

`
// если в анимации добавить 100vw снежинки в другую сторону полетят

document.head.append(style)

let start = 1;
const count = 4;

const createSnowItem = () => {
	const snowItem = document.createElement('div')
	snowItem.classList.add('snow')

	// const time = Math.round(((Math.random() * 10)+2) * n * 700);
	const time = getRandom(min, max) * 700;

// console.log('time:',time)

 snowItem.style.cssText = ` 
 left: ${Math.random() * document.documentElement.clientWidth}px;
 background-image: url('snow/snowflake${start}.svg');
 animation-duration: ${time}ms;

 `

 if(start == count){
 	start = 1;
 } else {
 	start++
 }

	document.body.append(snowItem)

	setTimeout(() => {
 snowItem.remove()
	},time)

}
// createSnowItem

// setInterval(createSnowItem,200)
setInterval(createSnowItem,saturationSnow)

}

createSnow(3,15,200)