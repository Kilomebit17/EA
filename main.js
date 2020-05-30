(function(){
	const burger2 = document.querySelector('.header-menu')
	const burger4 = document.querySelector('.burger__nav')
	burger2.addEventListener('click', () =>{
		burger2.classList.toggle('menu-active')
		burger4.classList.toggle('burger__nav-active')
	})
}())