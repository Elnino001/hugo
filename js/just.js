let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("fa-search", "fa-times");
  }
  else{
    searchBox.classList.replace("fa-times", "fa-search");
  }
})

// sidebar open close js code
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let closeOpenBtn = document.querySelector(".nav-links .fa-times");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
  navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", ()=>{
  navLinks.style.left = "-100%";
});

let htmlcss_arrow = document.querySelector(".htmlcss-arrow");
htmlcss_arrow.addEventListener("click", ()=>{
  navLinks.classList.toggle("show1")
});

let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=>{
  navLinks.classList.toggle("show2")
});



const myslide = document.querySelectorAll(".myslider"),
dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 8000);

function autoslide(){
  counter +=1;
  slidefun(counter);
};

function plusSlides(n){
  counter += n;
  slidefun(counter);
  resetTime();
};

function currentSlide(n){
  counter = n;
  slidefun(counter);
  resetTime();
};

function resetTime(){
  clearInterval(timer)
  timer = setInterval(autoslide,8000);
};

function slidefun(n){
  let i;
  for (i = 0; i<myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i=0; i<dot.length; i++){
    dot[i].classList.remove('active');
  }
  if (n>myslide.length){
    counter = 1;
  }
  if (n<1){
    counter = myslide.length;
  }
  myslide[counter-1].style.display = "block";
  dot[counter-1].classList.add("active");
};



