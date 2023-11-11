const ratingsContainer = document.getElementById("ratings-container");
const submitBtn = document.getElementById("submitBtn");
const cardBody = document.getElementsByClassName("card-body")[0]; // Use [0] to select the first element

let selected = "";

ratingsContainer.addEventListener("click", handleRatingClick);

function handleRatingClick(event) {
  const clickedRating = event.target.closest(".rating");

  if (clickedRating) {
    removeAllActiveClasses();
    clickedRating.classList.add("active");
    selected = clickedRating.id;
  }
}

function removeAllActiveClasses() {
  Array.from(ratingsContainer.getElementsByClassName("rating")).forEach(
    (el) => {
      el.classList.remove("active");
    }
  );
}

const feedbackOutput = {
  unhappy: {
    heading: "We're sorry to hear that!",
    para: "We appreciate your feedback and will do our best to improve your experience. Thank you for letting us know.",
  },
  neutral: {
    heading: "Thank you for your feedback!",
    para: "We appreciate your feedback. If you have any suggestions on how we can improve, feel free to let us know.",
  },
  satisfied: {
    heading: "Great to hear you're satisfied!",
    para: "We're delighted that you had a positive experience with us. Your feedback encourages us to continue delivering excellent service.",
  },
};

submitBtn.addEventListener("click", () => {
  if (selected === "") {
    alert("Please select any feedback first.");
  } else {
    const feedback = feedbackOutput[selected];
    cardBody.innerHTML = `
      <h2 class="text-2xl font-semibold text-white">${feedback.heading}</h2>
      <p class="text-sm text-slate-100">${feedback.para}</p>`;
  }
});
