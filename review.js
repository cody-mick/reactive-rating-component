let ratingBox = document.querySelector(".rating-box");
let thankYouBox = document.querySelector(".thank-you");
let submitBtn = document.querySelector(".rating-submit");

submitBtn.addEventListener("click", function(event){
    ratingBox.classList.add("hidden");
    thankYouBox.classList.remove("hidden");
});

let ratings = document.querySelectorAll(".number");
ratings.forEach(rating => {
    rating.addEventListener("click", function(event) {
        if (rating.classList.contains("selected")) {
            rating.classList.remove("selected");
        } else {
            rating.classList.add("selected");
        };
    })
});