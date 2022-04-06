let ratingBox = document.querySelector(".rating-box");
let thankYouBox = document.querySelector(".thank-you");
let submitBtn = document.querySelector(".rating-submit");

submitBtn.addEventListener("click", function (event) {
	ratingBox.classList.add("hidden");
	thankYouBox.classList.remove("hidden");
});

let ratings = [...document.querySelectorAll(".number")];
let selectedItem;

for (const rating of ratings) {
	rating.addEventListener("click", (e) => {
		selectedItem && selectedItem.classList.remove("selected");
		selectedItem = e.target;
		e.target.classList.add("selected");
	});
}

// Get rating number and pass into the DOM for display on the thank you page
function getRating() {
	let rating = document.querySelector(".selected").textContent;
	let ratingDisplay = document.querySelector(".rating");
	ratingDisplay.textContent = " " + rating + " ";
}
