const list = document.querySelectorAll("ul li");

list.forEach((node) => {
  node.addEventListener("mousedown", function (event) {
    event.preventDefault();
    const value = node.innerText.trim();
    console.log(value);
  });
});
