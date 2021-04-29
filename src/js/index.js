let pageArgument;


import '../sass/style.scss';
import { Home } from "./Home.js";
import { routes } from "./routes.js";
import { PageDetail } from "./PageDetail.js";
import { PageList } from "./PageList.js";


const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");

  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());