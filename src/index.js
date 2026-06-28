import "./styles.css";
import Home from "./pages/home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
  content.replaceChildren();
  homeBtn.classList.add("btn-selected");
  menuBtn.classList.remove("btn-selected");
  contactBtn.classList.remove("btn-selected");
  Home(content);
});

menuBtn.addEventListener("click", () => {
  content.replaceChildren();
  menuBtn.classList.add("btn-selected");
  homeBtn.classList.remove("btn-selected");
  contactBtn.classList.remove("btn-selected");
  Menu(content);
});

contactBtn.addEventListener("click", () => {
  content.replaceChildren();
  contactBtn.classList.add("btn-selected");
  menuBtn.classList.remove("btn-selected");
  homeBtn.classList.remove("btn-selected");
  Contact(content);
});

Home(content);
// Menu(content);
// Contact(content);
