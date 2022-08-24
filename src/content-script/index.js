const container = () => {
  const id = "link-detector-container";
  const container = document.getElementById(id);
  if (container) {
    return container;
  }

  const fieldset = document.createElement("fieldset");
  fieldset.id = id;
  fieldset.style.border = "1px solid black";
  fieldset.style.fontSize = "1.25rem";
  fieldset.style.lineHeight = "2rem";
  fieldset.style.textAlign = "left";
  fieldset.style.margin = "1rem";

  const legend = document.createElement("legend");
  legend.textContent = "Links Found by Link Detector";
  fieldset.appendChild(legend);

  const list = document.createElement("ul");

  fieldset.appendChild(list);

  const div = document.createElement("div");
  div.id = id;
  const shadow = div.attachShadow({ mode: "open" });
  shadow.appendChild(fieldset);
  document.body.insertBefore(div, document.body.firstChild);
  return div;
};

const clean = () => {
  const div = container();
  const ul = div.shadowRoot.querySelector("ul");
  ul.childNodes.forEach((child) => ul.removeChild(child));
  return ul;
};

const textToLinks = () => {
  const regex = /(http|https|ftp|sftp):\/\/[^\s]+/g;
  const urls = document.body.innerText.match(regex);
  if (urls) {
    const list = clean();
    urls.forEach((url) => {
      const item = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      item.appendChild(a);
      list.appendChild(item);
    });
  }
};

textToLinks();
