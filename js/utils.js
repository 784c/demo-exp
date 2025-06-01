function open_url() {
  var url = prompt("URL :");
  const prefix = "redirect/redirect.html?url=";

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