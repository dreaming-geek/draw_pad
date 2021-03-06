// Generated by CoffeeScript 1.6.3
(function() {
  var canvas, colors, context, decRad, defaultRad, disengage, dragging, engage, incRad, interval, maxRad, minRad, putPoint, radSpan, radius, setColor, setRadius, setSwatch, swatches;

  canvas = document.getElementById('draw');

  context = canvas.getContext('2d');

  radius = 10;

  dragging = false;

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;

  context.lineWidth = radius * 2;

  putPoint = function(evt) {
    if (dragging) {
      context.lineTo(evt.clientX, evt.clientY);
      context.stroke();
      context.beginPath();
      context.arc(evt.clientX, evt.clientY, radius, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      return context.moveTo(evt.clientX, evt.clientY);
    }
  };

  engage = function(evt) {
    dragging = true;
    return putPoint(evt);
  };

  disengage = function() {
    dragging = false;
    return context.beginPath();
  };

  canvas.addEventListener('mousedown', engage);

  canvas.addEventListener('mousemove', putPoint);

  canvas.addEventListener('mouseup', disengage);

  minRad = 5;

  maxRad = 100;

  defaultRad = 20;

  interval = 5;

  radSpan = document.getElementById('radval');

  decRad = document.getElementById('decRad');

  incRad = document.getElementById('incRad');

  setRadius = function(newRadius) {
    if (newRadius < minRad) {
      newRadius = minRad;
    } else if (newRadius > maxRad) {
      newRadius = maxRad;
    }
    radius = newRadius;
    context.lineWidth = radius * 2;
    return radSpan.innerHTML = radius;
  };

  decRad.addEventListener('click', function() {
    return setRadius(radius - interval);
  });

  incRad.addEventListener('click', function() {
    return setRadius(radius + interval);
  });

  setRadius(defaultRad);

  /* Colors*/


  colors = ['black', 'pink', 'cyan', 'mediumpurple', 'lawngreen', 'mistyrose', 'sienna', 'tomato', 'lavender'];

  swatches = document.getElementsByClassName('swatch');

  setSwatch = function(evt) {
    var swatch;
    swatch = evt.target;
    setColor(swatch.style.backgroundColor);
    return swatch.className += ' active';
  };

  setColor = function(color) {
    var active;
    context.fillStyle = color;
    context.strokeStyle = color;
    active = document.getElementsByClassName('active')[0];
    if (active) {
      return active.className = 'swatch';
    }
  };

  for(var i=0, n=colors.length;i<n;i++){
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
};

  setSwatch({
    target: document.getElementsByClassName('swatch')[0]
  });

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
