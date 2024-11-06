const body = document.getElementsByTagName("body")[0];
const btn = document.getElementsByClassName("b")[0];

btn.addEventListener("click", () => {
  let container = document.querySelector(".container");

  if (container) {
    container.remove();
  } else {
    container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);

    const classes = ["quti1", "quti2", "quti3", "quti4"];

    classes.forEach((className) => {
      const quti = document.createElement("div");
      quti.className = `quti ${className}`;
      container.appendChild(quti);
    });
  }
});