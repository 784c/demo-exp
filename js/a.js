function open_url() {
  var url = prompt("URL :");

  const prefix = "redirect/redirect.html?url=";

  if (url.startsWith(prefix))
    {
    let rawUrl = url.substring(prefix.length);

    const encodedUrl = encodeURIComponent(decodeURIComponent(rawUrl));

    window.location.href = `${prefix}${encodedUrl}`;
  }
  else
  {
    window.open(url, "_self");
  }
}