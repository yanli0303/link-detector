const textToLinks = (text, appendTo) => {
  const regex = /(http|https|ftp|sftp):\/\/[^\s]+/g;
  const links = text.match(regex);
  if (links) {
    const list = document.createElement("ul");
    list.style.fontSize = "1.5rem";
    list.style.lineHeight = "2rem";

    links.forEach((link) => {
      const item = document.createElement("li");
      const a = document.createElement("a");
      a.href = link;
      a.textContent = link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      item.appendChild(a);
      list.appendChild(item);
    });
    appendTo.insertBefore(list, appendTo.firstChild);
  }
};

textToLinks(document.body.innerText, document.body);
