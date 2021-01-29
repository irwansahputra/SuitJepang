let getComp = function () {
	var comp = Math.random();
	if (comp < 0.34){ 
		return 'batu';
	}
	if (comp >= 0.34 && comp < 0.67) {
		return 'gunting';
	}
	return 'kertas';
	}

let getRules = function (comp, user) {
	if (user === comp) {
		return 'Seri !';
	}
	if (user === 'batu' && comp == 'gunting') {
		return "Menang"
	}
	if (user === 'gunting' && comp == 'batu') {
		return "Kalah"
	}
	if (user === 'batu' && comp == 'kertas') {
		return "Kalah"
	}
	if (user === 'kertas' && comp == 'batu') {
		return "Menang"
	}
	if (user === 'gunting' && comp == 'kertas') {
		return "Menang"
	}
	if (user === 'kertas' && comp == 'gunting') {
		return "Kalah"
	}
	
}


let proses = function () {
	const imgCompu =document.querySelector('.img-komputer');
	const gambar = ['batu2', 'gunting2', 'kertas2'];
	let i =0;
	const wakMulai = new Date().getTime();

	setInterval(function(){
		if ( new Date().getTime()- wakMulai > 1000) {
			clearInterval;
			return;
		}

		imgCompu.setAttribute('src', 'img/' + gambar[i++] +'.png');
		if (i == gambar.length) {
			i = 0;
		}
	}, 100)
}


const pilih = document.querySelectorAll('li img');
pilih.forEach(function(milih){
	milih.addEventListener('click', function(){
		const pComp = getComp();
		const pUser = milih.className;
		const hasil = getRules(pComp, pUser);
		
		proses();

		setTimeout(function(){
			const imgComp = document.querySelector('.img-komputer');
			imgComp.setAttribute('src', 'img/' + pComp + '2.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		},1100);

	});

});











