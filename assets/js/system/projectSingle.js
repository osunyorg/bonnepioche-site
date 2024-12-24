var projectContent = document.querySelector('.projects__page main'),
    heroFigure,
    heroImage;

function setProjectSingleMinHeight() {
  if (!projectContent) {
    return;
  }

  heroFigure = projectContent.querySelector('.hero figure');

  if (!heroFigure) {
    return;
  }

  heroImage = heroFigure.querySelector('img');

  if (!heroImage) {
    return;
  }

  function updateProjectSingleMinHeight() {
    var height = heroFigure.offsetHeight;

    if (window.innerWidth >= 992) {
      projectContent.style.minHeight = 'calc(' + height + 'px + 8rem)';
    } else {
      projectContent.style.minHeight = '0';
    }
  }

  heroImage.addEventListener('load', updateProjectSingleMinHeight);
  window.addEventListener('resize', updateProjectSingleMinHeight);

  updateProjectSingleMinHeight();
}


setProjectSingleMinHeight();