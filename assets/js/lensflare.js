window.osuny = window.osuny || {};

window.osuny.Lensflare = function (parent) {
  this.options = { 
    quantity: 40,
  };

  this.parent = parent;
  this.init();
}

window.osuny.Lensflare.prototype.init = function () {
  this.element = document.createElement('div');
  this.element.setAttribute('aria-hidden', true);
  this.element.classList.add('lensflare');
  this.parent.appendChild(this.element);
  this.addCircles();
};

window.osuny.Lensflare.prototype.addCircles = function () {
  var i;

  for(i = 0; i < this.options.quantity; i += 1) {
    this.element.appendChild(this.getCircle());
  }
};

window.osuny.Lensflare.prototype.getCircle = function () {
  var circleContainer = document.createElement('div'),
      circle = document.createElement('div'),
    scale = Math.random() * 3 - 1,
    axis = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    },
    position = {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    blur = scale * 5 + 10,
    opacity = Math.random() * 0.2;

  circleContainer.style.left = position.x + "%";
  circleContainer.style.top = position.y + "%";
  circleContainer.style.transformOrigin = axis.x * window.innerWidth + "px " + axis.y * window.innerHeight + "px"

  circle.style.transform = "scale(" + scale +")";
  circle.style.filter = "blur(" + blur + "px)";
  circle.style.opacity = opacity;

  circleContainer.appendChild(circle);

  return circleContainer;
};

// FOOTER
if (document.body.classList.contains('page__home')) {
  var home = document.querySelector('.page__home main');
  new window.osuny.Lensflare(home);
} else {
  var footer = document.getElementById('document-footer');
  new window.osuny.Lensflare(footer);
}