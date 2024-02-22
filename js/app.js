let fullPath = window.location.pathname;
let pathName = fullPath.split("/");
let currentPage = pathName[pathName.length - 1];

const activeLink =
  document.querySelector(`a[href="${currentPage}"]`) ??
  document.querySelector(`a[href="index.html"]`);

activeLink.classList.add("active");
