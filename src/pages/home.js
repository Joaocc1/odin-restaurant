import heroImage from "../images/premium_vector-1711987456419-1ecf7541c034.png";

export default function Home(mainElement) {
  const board = document.createElement("div");
  const paper = document.createElement("div");
  const mainHeading = document.createElement("h1");
  const description = document.createElement("p");
  const openingHours = document.createElement("div");
  const wrapper = document.createElement("div");
  const paragraphOne = document.createElement("p");
  const paragraphTwo = document.createElement("p");
  const paragraphThree = document.createElement("p");
  const img = document.createElement("img");

  // add class & attributes
  board.classList.add("board");
  paper.classList.add("paper");
  mainHeading.classList.add("main-heading");
  openingHours.classList.add("opening-hours");
  img.classList.add("hero-img");
  img.setAttribute("src", heroImage);
  img.setAttribute("alt", "A display of different vegetables");

  // add content
  mainHeading.textContent = "Welcome to Blue Mondays";
  description.textContent =
    "Blue Mondays Bistro is a warm and welcoming neighborhood bistro dedicated to turning ordinary days into memorable ones. Using fresh, seasonal, and locally sourced ingredients, we craft delicious dishes that celebrate simple flavors and quality cooking. Whether you're joining us for coffee, lunch, or dinner, our cozy atmosphere and carefully prepared meals are here to brighten your day.";
  paragraphOne.textContent = "Our opening hours are:";
  paragraphTwo.textContent = "Tuesday to Friday: 12:00 - 23:00";
  paragraphThree.textContent = "Saturday and Sundays: 12:30 - 00:00";

  // append elements
  mainElement.appendChild(board);
  board.appendChild(paper);
  paper.appendChild(mainHeading);
  paper.appendChild(description);
  paper.appendChild(openingHours);
  openingHours.appendChild(wrapper);
  openingHours.appendChild(img);
  wrapper.appendChild(paragraphOne);
  wrapper.appendChild(paragraphTwo);
  wrapper.appendChild(paragraphThree);
}
