function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function open_url(url)
{
	const prefix = "html/redirect/redirect.html?url=";

	if (!url)
	{
		url = prompt("URL :");
	}

	if (!url) return;

	if (url.startsWith(prefix))
	{
		let raw_url = url.substring(prefix.length);
		const encoded_url = encodeURIComponent(decodeURIComponent(raw_url));

		window.location.href = `${prefix}${encoded_url}`;
	}
	else
	{
		window.open(url, "_self");
	}
}

function download_file(url)
{
	if (!url)
	{
		url = prompt("URL :");
	}

	if (!url) return;

	const link = document.createElement('a');
	link.style.display = "none";
    link.href = url;
    link.download = "";

    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
}

function open_file()
{
	var url = prompt("URL : ");
	if (!url) return;

	window.open(url, "_self");
}

function fill_exp()
{
	document.write("fill_the_text");
}

function spam_open_url()
{
	var url = prompt("URL :");
	if (!url) return;

	var delay = prompt("Delay (ms) :");
	if (!delay) return;

	var stop = false;
	while (stop != true)
	{
		open_url(url);

		if (delay != 0)
		{
			sleep(delay);
		}
	}
}

function spam_download_file()
{
	var url = prompt("URL :");
	if (!url) return;

	var delay = prompt("Delay (ms) :");
	if (!delay) return;

	var stop = false;
	while (stop != true)
	{
		download_file(url);

		if (delay != 0)
		{
			sleep(delay);
		}
	}
}

const open_url_button = document.querySelector("#open_url");
const fill_exp_button = document.querySelector("#fill_exp");
const spam_open_url_button = document.querySelector("#spam_open_url");
const spam_download_file_button = document.querySelector("#spam_download_file");
const download_file_button = document.querySelector("#download_file");
const open_file_button = document.querySelector("#open_file");
const app_store_button = document.querySelector("#app_store");

open_url_button.addEventListener("click", (event) =>
{
	open_url();
});

fill_exp_button.addEventListener("click", (event) =>
{
	fill_exp();
});

spam_open_url_button.addEventListener("click", (event) =>
{
	spam_open_url();
});

spam_download_file_button.addEventListener("click", (event) =>
{
	spam_download_file();
});

download_file_button.addEventListener("click", (event) =>
{
	download_file();
});

open_file_button.addEventListener("click", (event) =>
{
	open_file();
});

app_store_button.addEventListener("click", (event) =>
{
	open_url("html/app_store/app_store.html");
});