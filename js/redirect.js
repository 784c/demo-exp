function redirect()
{
    const params = new URLSearchParams(window.location.search);
    const url = params.get('url');
    window.location.href = url;
}

function back()
{
    history.back();
}

const back_button = document.querySelector("#back");

back_button.addEventListener("click", (event) =>
{
	back();
});