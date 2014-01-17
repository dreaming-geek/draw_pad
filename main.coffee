canvas = document.getElementById 'draw'
context = canvas.getContext '2d'

radius = 10
dragging = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.lineWidth = radius*2

putPoint = (evt) ->
	if dragging
    context.lineTo evt.clientX, evt.clientY
    context.stroke()
    context.beginPath()
    context.arc evt.clientX, evt.clientY, radius, 0, Math.PI*2
    context.fill()
    context.beginPath()
    context.moveTo evt.clientX, evt.clientY


engage = (evt) ->
	dragging = true
	putPoint evt

disengage = () ->
  dragging = false
  context.beginPath()


canvas.addEventListener 'mousedown', engage
canvas.addEventListener 'mousemove', putPoint
canvas.addEventListener 'mouseup', disengage


minRad = 5
maxRad = 100
defaultRad = 20
interval = 5
radSpan = document.getElementById 'radval'
decRad = document.getElementById 'decRad'
incRad = document.getElementById 'incRad'

setRadius = (newRadius) ->
  if newRadius<minRad
    newRadius = minRad
  else if newRadius>maxRad
    newRadius = maxRad

  radius = newRadius
  context.lineWidth = radius*2

  radSpan.innerHTML = radius

decRad.addEventListener 'click', ->
  setRadius radius-interval

incRad.addEventListener 'click', ->
  setRadius radius+interval

# Puts the line height back to default on load
setRadius defaultRad

### Colors ###

colors = ['black','pink', 'cyan', 'mediumpurple', 'lawngreen', 'mistyrose', 'sienna', 'tomato', 'lavender']

swatches = document.getElementsByClassName 'swatch'

setSwatch = (evt) ->
#  Get the swatch
  swatch = evt.target
  #  Set the color
  setColor swatch.style.backgroundColor
  swatch.className += ' active'

setColor = (color) ->
  context.fillStyle = color
  context.strokeStyle = color
  active = document.getElementsByClassName('active')[0]
  active.className = 'swatch' if active

`for(var i=0, n=colors.length;i<n;i++){
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}`
# Sets the first active color
setSwatch {target: document.getElementsByClassName('swatch')[0]}