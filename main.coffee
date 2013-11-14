canvas = document.getElementById 'draw'
context = canvas.getContext '2d'

radius = 10

canvas.width = window.innerWidth
canvas.height = window.innerHeight

putPoint = (e) ->
	context.beginPath()
	context.arc e.offsetX, e.offsetY, radius, 0, Math.PI*2
	context.fill()

canvas.addEventListener 'mousedown', putPoint
