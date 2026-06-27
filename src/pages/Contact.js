export default function Contact(mainElement) {
  const board = document.createElement("div");
  const paper = document.createElement("div");
  const mainHeading = document.createElement("h1");
  const form = document.createElement("form");
  const contactInfo = document.createElement("div");
  const message = document.createElement("div");
  const submitBtn = document.createElement("button");

  board.classList.add("board");
  paper.classList.add("paper");
  mainHeading.classList.add("main-heading");
  form.classList.add("form");
  contactInfo.classList.add("contact-information");
  message.classList.add("message");
  submitBtn.classList.add("submit-form-btn");
  submitBtn.setAttribute("type", "submit");

  mainHeading.textContent = "Contact Us";
  submitBtn.textContent = "Send message";

  mainElement.appendChild(board);
  board.appendChild(paper);
  paper.appendChild(mainHeading);
  paper.appendChild(form);
  form.appendChild(message);
  form.appendChild(contactInfo);
  form.appendChild(submitBtn);

  message.appendChild(
    createFormItem(
      "message",
      "textarea",
      "Write us your message",
      "text",
      "id",
    ),
  );
  message.appendChild(createFormItem("name", "input", "Name", "text"));
  message.appendChild(createFormItem("email", "input", "Email", "email"));
  message.appendChild(createFormItem("phone", "input", "Phone", "Text"));

  function createFormItem(item, element, text, type, selector) {
    const div = document.createElement("div");
    div.classList.add("form-item");

    const label = document.createElement("label");
    label.setAttribute("for", item);
    label.textContent = text;
    const input = document.createElement(element);
    input.setAttribute("name", item);
    input.setAttribute("type", type);

    if (selector) {
      input.setAttribute(selector, item);
    }

    div.appendChild(label);
    div.appendChild(input);

    return div;
  }
}
