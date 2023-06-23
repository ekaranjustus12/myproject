const moreBtn = document.getElementById('More');
const pText = document.getElementById('text');
const closeBtn = document.getElementById('close');
moreBtn.addEventListener('click',function (argument) {
	// body...
	pText.style.display = 'block';
})
closeBtn.addEventListener('click',function(){
	pText.style.display = 'none';
})
