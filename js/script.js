const ratingCard = document.querySelector(".ratingCard");
const ratingButtons = document.querySelectorAll(".btn-rating");
const cardThankYou = document.querySelector(".cardThankYou");
const submitButton = document.querySelector(".btn-submit");
const rating = document.querySelector(".result .ratingResult");

for(const button of ratingButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault;
        const value = button.value;
        rating.innerText = `${value}`;
        submitButton.disabled = false;
    });
}

submitButton.disabled = true;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    ratingCard.classList.add('hidden');
    cardThankYou.classList.remove('hidden');
})