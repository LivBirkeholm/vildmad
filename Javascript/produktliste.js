// https://abovwijkjrqgkjdavvgh.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFib3Z3aWpranJxZ2tqZGF2dmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTM1MTEsImV4cCI6MjAyMzQ4OTUxMX0.qNxLhSIBdXv7iGHP0U8A50On9kcZ8p8elJM0xfKiTeU

fetch("https://abovwijkjrqgkjdavvgh.supabase.co/rest/v1/mushrooms", {
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
  const template = document.querySelector(".seasonoverview").content;

  const clone = template.cloneNode(true);

  clone.querySelector(".mushroomimage").src = items.image_single;
  clone.querySelector(".mushroomname").textContent = items.title;

  const parent = document.querySelector(".forestoverview");
  parent.appendChild(clone);
}
