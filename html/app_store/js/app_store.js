function back()
{
    history.back();
}

const back_button = document.querySelector("#back");

back_button.addEventListener("click", (event) =>
{
	back();
});