let megaManu = document.querySelector(".mega-mnue");
let otherLinks = document.querySelector("#other-links");
otherLinks.addEventListener("mouseover", function () {
  megaManu.style.cssText = "display: flex";
});
otherLinks.addEventListener("mouseout", hide);
otherLinks.addEventListener("click", function () {
  console.log("xxx");
  megaManu.style.cssText = "display: flex";
});
otherLinks.addEventListener("click", function (e) {
  otherLinks.removeEventListener("mouseout", hide);
});
function hide() {
  megaManu.style.cssText = "display: none";
}

megaManu.addEventListener("mouseleave", function () {
  megaManu.style.cssText = "display: none";
});

let articalClose = document.querySelector(".close");
let show = document.querySelector(".modal");
let caption = document.querySelector("#caption");
let artChange = document.querySelector(".modal-content");
articalClose.addEventListener("click", function () {
  show.style.cssText = "display:none";
});
let articals = document.querySelector(".contant");
console.log(artChange.textContent);
articals.addEventListener("click", function (e) {
  if (e.target.hasAttribute("src")) {
    src = e.target.getAttribute("src");
    artChange.setAttribute("src", src);
    text = e.target.nextElementSibling.textContent;
    caption.textContent = text;
    show.style.cssText = "display:flex";
  }
});

let closeDeteils = document.querySelector(".close-det");
let showMusuemDet = document.querySelector("#show");
let text = document.querySelector("#text");
let museumDet = document.querySelectorAll(".museum-det");
let newDet = document.querySelector(".new-det");

closeDeteils.addEventListener("click", function () {
  showMusuemDet.style.cssText = "display:none";
});

for (const item of museumDet) {
  item.addEventListener("click", function () {
    if (item.childNodes[3].textContent === "price") {
      newDet.innerHTML = `<h2>price</h2>
      <h3>FOREIGNER:</h3> 
      <h4>Adult: EGP 200 </h4>\  <h4>Student: EGP 100</h4>
      <h3>Photography:</h3>
      <h4>(Personal Use –without Flash): EGP 50</h4> 
      <h4> Video:(Personal Use –without Flash): EGP 300</h4>
      </p>
      <h3>EGYPTIANS\ ARABS:</h3> 
      <h4>Adult: EGP 30 </h4>\  <h4>Student: EGP 10</h4>
      <h3>Photography:</h3>
      <h4>(Personal Use –without Flash): EGP 20</h4> 
      <h4> Video:(Personal Use –without Flash): EGP 500</h4>
      </p>
      `;
      text.appendChild(newDet);
      showMusuemDet.style.cssText = "display:flex ;     ";
    } else if (item.childNodes[3].textContent === "Location") {
      newDet.innerHTML = `<h2>Avalbality</h2>
      <h3>locatin</h3> 
      <h4>The pyramid after Kafr Nassar, the desert back of Giza Governorate, Giza</h4>
     <h3>time</h3> 
      <h4>  09:00 AM To 05:00 PM  </h4>
      </p>
      </p>
      `;
      text.appendChild(newDet);
      showMusuemDet.style.cssText = "display:flex";
    } else if (item.childNodes[3].textContent === "roles") {
      newDet.innerHTML = `<h2>genral roles</h2>
      <h4>1/NO FOOD </h4>
      <h4>2/NO SMOKING</h4>
      <h4>3/NO PHOTOS WITHOUT PERMISSION</h4>
      <h4>4/NO THROWING GARBAGE </h4>
      `;
      text.appendChild(newDet);
      showMusuemDet.style.cssText = "display:flex";
    } else if (item.childNodes[3].textContent === "category") {
      newDet.innerHTML = `<h2>Category</h2>
      <h4>1.Art of Pre-Dynastic Egypt (6000–3000 BC)</h4>
      <h4>3.Middle Kingdom (c. 2055–1650 BC)</h4>
      <h4>4.Second Intermediate  (c.1650–1550 BC)</h4>
      <h4>5.New Kingdom (c. 1550–1069 BC)</h4>
      <h4>6.Third Intermediate Period (c.1069–664 BC)</h4>
      <h4>7.Late Period (c. 664–332 BC)</h4>
      <h4>8.Ptolemaic Period (305–30 BC)</h4>
      <h4>9.Roman Period (30 BC–619 AD)</h4>        `;
      text.appendChild(newDet);
      showMusuemDet.style.cssText = "display:flex";
    }
  });
}
showMusuemDet.addEventListener("mouseleave", function () {
  showMusuemDet.style.cssText = "display:none ;   transition: 5s ease;  ";
});

let sliders = document.querySelectorAll(".range-move");
for (const slider of sliders) {
  slider.addEventListener("input", function (e) {
    slider.childNodes[3].textContent = `${e.target.value} %`;
    slider.childNodes[5].style.cssText = `position: absolute; top: 0; left: 1px; width:${e.target.value}%;  height: 73%;    background-color: var(--main-color); border-radius: 10px;   z-index: -2;
    `;
  });
}

let allImage = Array.from(document.querySelectorAll(".slider .image img"));
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prevauis");
let slidNum = document.querySelector(".slid-num");
currImg = 1;
imgNum = allImage.length;

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", pervBtn);
cheak();
function nextImg() {
  if (currImg === imgNum) {
    nextBtn.classList.add("disply");
  } else {
    prevBtn.classList.remove("disply");
    currImg++;
    cheak();
  }
}
function pervBtn() {
  if (currImg === 1) {
    prevBtn.classList.add("disply");
  } else {
    nextBtn.classList.remove("disply");
    currImg--;
    cheak();
  }
}

function cheak() {
  for (const image of allImage) {
    image.classList.remove("active");
  }
  slidNum.textContent = `#slide${currImg} of ${imgNum} `;
  allImage[currImg - 1].classList.add("active");
}

