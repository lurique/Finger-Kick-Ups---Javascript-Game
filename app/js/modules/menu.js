(function() {

	var play = document.getElementById('play')

	var start = () => {
		var menu = document.getElementById('menu')
		var canvas = document.getElementById('canvas')

		menu.classList.add('ingame');
	}

	play.addEventListener('click', () => {
		start()
	})

})();