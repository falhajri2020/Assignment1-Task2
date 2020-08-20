let songs = null;
console.log('hello')
const getSongs = async () => {
  const res = await fetch("/songs");
  const data = await res.json();
  console.log('data',data);
  if (data.data.length > 0) {
    let temp = data.data;
    songs = temp;
    document.getElementById("song-name").innerHTML = temp[0].name;
    document.getElementById("song-description").innerHTML = temp[0].description;
  }
};
getSongs();
let NEXT = document.getElementById("next-song");
NEXT.addEventListener("click", (e) => {
  let songName = document.getElementById("song-name");
  let songDescp = document.getElementById("song-description");
  let CurrentElement = document.getElementById("current");
  let current = parseInt(CurrentElement.value);
  document
    .getElementById("my-audio")
    .setAttribute("src", `assets/${songs[current].name}.mp3`);
  if (current >= songs.length - 1) {
    current = 0;
    CurrentElement.value = current;
    songName.innerHTML = songs[current].name;
    songDescp.innerHTML = songs[current].description;
  } else {
    current = current + 1;
    CurrentElement.value = current;
    songName.innerHTML = songs[current].name;
    songDescp.innerHTML = songs[current].description;
  }
});
