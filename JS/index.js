const jokers = document.querySelectorAll(".joker");
const completeBox = document.getElementById("jokers-complete");
const leftBox = document.getElementById("jokers-left");



jokers.forEach(joker => {

  let whichbox = localStorage.getItem(joker.id);

  if (whichbox === "complete") {
    const target = completeBox;
    target.appendChild(joker); //moves joker to the right box
  }
  else if (whichbox === "left") {
    const target = leftBox;
    target.appendChild(joker); //moves joker to the right box

  }

});



//What happens when a joker is clicked
jokers.forEach(joker => {
  joker.addEventListener("click", () => {
    if (joker.parentElement === leftBox) {
      joker.classList.remove("left");
      joker.classList.add("complete");
      localStorage.setItem(joker.id, "complete");
    }
    else if (joker.parentElement === completeBox) {
      joker.classList.remove("complete");
      joker.classList.add("left");
      localStorage.setItem(joker.id, "left");
    }

    if (joker.classList.contains("complete")) {
      const target = completeBox;
      target.appendChild(joker); //moves joker to the right box
    }
    else if (joker.classList.contains("left")) {
      const target = leftBox;
      target.appendChild(joker); //moves joker to the right box

    }


  });


  const textInput = document.getElementById('search');
  textInput.addEventListener('input', search);

  //search bar
  function search() {
    jokers.forEach(joker => {
      const name = joker.id.toLowerCase();

      if (!name.includes(textInput.value.toLowerCase())) {
          document.getElementById(joker.id).style.display = "none";
         // console.log(joker.id);
        }

      if (name.includes(textInput.value.toLowerCase())) {
          document.getElementById(joker.id).style.display = "";
         // console.log(joker.id);
        }


    });
  }


  joker.addEventListener("mouseenter", () => {
    console.log(joker.id);
  });
});
