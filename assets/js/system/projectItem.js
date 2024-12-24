var projects = document.querySelectorAll('article.project');

projects.forEach(function(project) {
  var link = project.querySelector('.project-title a');
  project.style.cursor = 'pointer';
  project.addEventListener('click', function () {
    link.click();
  });
});