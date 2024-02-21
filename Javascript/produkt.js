// https://abovwijkjrqgkjdavvgh.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFib3Z3aWpranJxZ2tqZGF2dmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTM1MTEsImV4cCI6MjAyMzQ4OTUxMX0.qNxLhSIBdXv7iGHP0U8A50On9kcZ8p8elJM0xfKiTeU

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const season = urlParams.get("season");

// document.querySelector(".pil").textContent = season;
document.querySelector(".pil").href = "produktliste.html?season=" + season;

fetch(`https://abovwijkjrqgkjdavvgh.supabase.co/rest/v1/mushrooms?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFib3Z3aWpranJxZ2tqZGF2dmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTM1MTEsImV4cCI6MjAyMzQ4OTUxMX0.qNxLhSIBdXv7iGHP0U8A50On9kcZ8p8elJM0xfKiTeU",
  },
})
  .then((res) => res.json())
  .then(dataReceived);

function dataReceived(data) {
  console.log(data);
  data.forEach(showData);
}

function showData(items) {
  const template = document.querySelector(".singlemushroom").content;

  const clone = template.cloneNode(true);

  clone.querySelector(".mushroomimage").src = items.image_single;
  clone.querySelector(".mushroomname").textContent = items.title;
  clone.querySelector(".wheretofindcontent").textContent = items.wheretofind;
  clone.querySelector(".whentofindcontent").textContent = items.whentofind;
  clone.querySelector(".howtospotcontent").textContent = items.howtospot;
  clone.querySelector(".locationimage").src = items.nature_img;
  clone.querySelector(".howtopickcontent").textContent = items.howtopick;
  clone.querySelector(".misidentifyingcontent").textContent = items.misidentifying;
  clone.querySelector(".sensorycontent").textContent = items.sensory;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
