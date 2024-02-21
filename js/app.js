let pathName = window.location.pathname;
pathName = pathName.replace("/", "");

const activeLink =
  document.querySelector(`a[href="${pathName}"]`) ??
  document.querySelector(`a[href="index.html"]`);


activeLink.classList.add('active')