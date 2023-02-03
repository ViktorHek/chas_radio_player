const url = "http://api.sr.se/api/v2/channels?format=json&size=100";
const displayChannelList = document.getElementById("channels");

function populate() {
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      data.channels.forEach((element) => {
        addElement(element);
      });
    });
}

function addElement(element) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "container";
  containerDiv.style.backgroundColor = `#${element.color}`;

  const logo = document.createElement("img");
  logo.src = element.image;
  logo.alt = "logo";
  containerDiv.appendChild(logo);

  const title = document.createElement("p");
  title.innerText = element.name;
  containerDiv.appendChild(title);

  const audio = document.createElement("audio");
  audio.controls = "controls";
  audio.src = element.liveaudio.url;
  audio.type = "audio/mpeg";
  containerDiv.appendChild(audio);

  displayChannelList.appendChild(containerDiv);
}

populate();
