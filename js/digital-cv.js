let namepage = document.querySelector("h1");

if (document.location.href.includes("project-cv")) {
  namepage.innerHTML = "Project Charter - CV";
  let show = document.querySelectorAll(".cv");
  show.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("project-webpet")) {
  namepage.innerHTML = "Project Charter - Pet";
  let show = document.querySelectorAll(".webpet");
  show.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("project-webnews")) {
  namepage.innerHTML = "Project Charter - News";
  let show = document.querySelectorAll(".webnews");
  show.forEach((item) => {
    item.style.display = "block";
  });
}
