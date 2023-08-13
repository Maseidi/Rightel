var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 16000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const itemsLgEl = document.querySelector(".items-lg")

const prevEl = document.querySelector(".prev")
const nextEl = document.querySelector(".next")

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const changerEl = document.querySelector(".changer");
const firstEl = document.querySelector(".first-slide")
const secondEl = document.querySelector(".second-slide")

function removeActive(input) {
  if ( input === 1 ) {
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
  } else {
    btn5.classList.remove("active");
    btn6.classList.remove("active");
  }
}

let state = 1;

nextEl.addEventListener("click", function() {
  if ( state != 4 ) {
    state++;
  } else {
    state = 1;
  }
})

prevEl.addEventListener("click", function() {
  if ( state != 1 ) {
    state--;
  } else {
    state = 4;
  }
})

btn1.addEventListener("click", function() {
  state = 1;
})

btn2.addEventListener("click", function() {
  state = 2;
})

btn3.addEventListener("click", function() {
  state = 3;
})

btn4.addEventListener("click", function() {
  state = 4;
})

let stateXs = 1;

btn5.addEventListener("click", function() {
  stateXs = 1;
})

btn6.addEventListener("click", function() {
  stateXs = 2;
})

const dlBtnEl = document.querySelector(".app-download-btn");
const firstOptionEl = document.querySelector(".first-option");
const secondOptionEl = document.querySelector(".second-option");
const pic_1 = document.querySelector(".app-picture1");
const pic_2 = document.querySelector(".app-picture2");
const pic_container = document.querySelector(".app-picture-container");
const app_section = document.querySelector(".app");

let optionState = 1;
firstOptionEl.addEventListener('click', ()=>{
  firstOptionEl.classList.add("chosen");
  secondOptionEl.classList.remove("chosen");
  dlBtnEl.textContent = `دانلود نسخه Android`
  pic_1.classList.add("block");
  pic_1.classList.remove("hidden");
  pic_2.classList.remove("block");
  pic_2.classList.add("hidden");
  optionState = 1;
  app_section.classList.add("padding-b-1");
  app_section.classList.remove("padding-b-2");
});

secondOptionEl.addEventListener('click', ()=>{
  firstOptionEl.classList.remove("chosen");
  secondOptionEl.classList.add("chosen");
  dlBtnEl.textContent = `سامانه ی رایتل من`
  pic_1.classList.add("hidden");
  pic_1.classList.remove("block");
  pic_2.classList.remove("hidden");
  pic_2.classList.add("block");
  optionState = 2;
  app_section.classList.remove("padding-b-1");
  app_section.classList.add("padding-b-2");
});

const newsLeftEl = document.querySelector(".news-left");
const newsRightEl = document.querySelector(".news-right");
const newsSliderEl = document.querySelector(".news-content-slider");

let newsState = 1;
let newsTimer = 0;
let clicked = false;

newsLeftEl.addEventListener("click", () => {
  if ( newsState === 3 ) {
    newsState = 1;
  } else {
    newsState += 1;
  }
  clicked = true;
})

newsRightEl.addEventListener("click", () => {
  if ( newsState === 1 ) {
    newsState = 3;
  } else {
    newsState -= 1;
  }
  clicked = true;
})

function removeRights() {
  newsSliderEl.classList.remove("right-0");
  newsSliderEl.classList.remove("right-1");
  newsSliderEl.classList.remove("right-2");
}

const newsPagEl = document.querySelectorAll(".news-pagination")

function defaultButtons() {
  newsPagEl.forEach(elem=>{
    elem.style.backgroundColor = `#dcdcdc`;
    elem.style.outline = `none`;
  })
}
newsPagEl[0].addEventListener("click", () => {
  newsState = 1;
  clicked = true;
});

newsPagEl[1].addEventListener("click", () => {
  newsState = 2;
  clicked = true;
  defaultButtons();
  newsPagEl[1].style.outline = `7px solid #e63c94`;
  newsPagEl[1].style.backgroundColor = `white`; 
});

newsPagEl[2].addEventListener("click", () => {
  newsState = 3;
  clicked = true;
  defaultButtons();
  newsPagEl[2].style.outline = `7px solid #e63c94`;
  newsPagEl[2].style.backgroundColor = `white`;
});

const sub_active_1 = document.querySelector(".submenu-activator-1");
const sub_active_2 = document.querySelector(".submenu-activator-2");
const sub_active_3 = document.querySelector(".submenu-activator-3");
const sub_active_4 = document.querySelector(".submenu-activator-4");
const sub_active_5 = document.querySelector(".submenu-activator-5");
const sub_active_6 = document.querySelector(".submenu-activator-6");
const sub_active_7 = document.querySelector(".submenu-activator-7");

const sub_menu_1 = document.querySelector(".submenu-container-1");
const sub_menu_2 = document.querySelector(".submenu-container-2");
const sub_menu_3 = document.querySelector(".submenu-container-3");
const sub_menu_4 = document.querySelector(".submenu-container-4");
const sub_menu_5 = document.querySelector(".submenu-container-5");
const sub_menu_6 = document.querySelector(".submenu-container-6");
const sub_menu_7 = document.querySelector(".submenu-container-7");

sub_active_1.addEventListener("mouseover", () => {
  sub_menu_1.classList.add("submenu-active");
})

sub_active_1.addEventListener("mouseleave", () => {
  sub_menu_1.classList.remove("submenu-active");
})

sub_active_2.addEventListener("mouseover", () => {
  sub_menu_2.classList.add("submenu-active");
})

sub_active_2.addEventListener("mouseleave", () => {
  sub_menu_2.classList.remove("submenu-active");
})

sub_active_3.addEventListener("mouseover", () => {
  sub_menu_3.classList.add("submenu-active");
})

sub_active_3.addEventListener("mouseleave", () => {
  sub_menu_3.classList.remove("submenu-active");
})

sub_active_4.addEventListener("mouseover", () => {
  sub_menu_4.classList.add("submenu-active");
})

sub_active_4.addEventListener("mouseleave", () => {
  sub_menu_4.classList.remove("submenu-active");
})

sub_active_5.addEventListener("mouseover", () => {
  sub_menu_5.classList.add("submenu-active");
})

sub_active_5.addEventListener("mouseleave", () => {
  sub_menu_5.classList.remove("submenu-active");
})

sub_active_6.addEventListener("mouseover", () => {
  sub_menu_6.classList.add("submenu-active");
})

sub_active_6.addEventListener("mouseleave", () => {
  sub_menu_6.classList.remove("submenu-active");
})

sub_active_7.addEventListener("mouseover", () => {
  sub_menu_7.classList.add("submenu-active");
})

sub_active_7.addEventListener("mouseleave", () => {
  sub_menu_7.classList.remove("submenu-active");
})

sub_menu_1.addEventListener("mouseover", () => {
  sub_menu_1.classList.add("submenu-active")
});

sub_menu_2.addEventListener("mouseover", () => {
  sub_menu_2.classList.add("submenu-active")
});

sub_menu_3.addEventListener("mouseover", () => {
  sub_menu_3.classList.add("submenu-active")
});

sub_menu_4.addEventListener("mouseover", () => {
  sub_menu_4.classList.add("submenu-active")
});

sub_menu_5.addEventListener("mouseover", () => {
  sub_menu_5.classList.add("submenu-active")
});

sub_menu_6.addEventListener("mouseover", () => {
  sub_menu_6.classList.add("submenu-active")
});

sub_menu_7.addEventListener("mouseover", () => {
  sub_menu_7.classList.add("submenu-active")
});

sub_menu_1.addEventListener("mouseleave", () => {
  sub_menu_1.classList.remove("submenu-active")
});

sub_menu_2.addEventListener("mouseleave", () => {
  sub_menu_2.classList.remove("submenu-active")
});

sub_menu_3.addEventListener("mouseleave", () => {
  sub_menu_3.classList.remove("submenu-active")
});

sub_menu_4.addEventListener("mouseleave", () => {
  sub_menu_4.classList.remove("submenu-active")
});

sub_menu_5.addEventListener("mouseleave", () => {
  sub_menu_5.classList.remove("submenu-active")
});

sub_menu_6.addEventListener("mouseleave", () => {
  sub_menu_6.classList.remove("submenu-active")
});

sub_menu_7.addEventListener("mouseleave", () => {
  sub_menu_7.classList.remove("submenu-active")
});

function maintain(input) {
  input.style.opacity = `1`;
  input.style.visibility = `visible`;
}

function lose(input) {
  input.style.opacity = `0`;
  input.style.visibility = `hidden`;
}

const menu_burger = document.querySelector(".menuBar");
const small_cover = document.querySelector(".small-menu-cover");
const small_menu = document.querySelector(".small-menu");

let small_menu_state = false;

menu_burger.addEventListener("click", () => {
  if ( small_menu_state === false ) {
    small_menu_state = true;
    menu_burger.classList.add("right-burger");
    small_cover.classList.add("block");
    small_cover.classList.remove("hidden");
    small_menu.classList.remove("right-[-70%]");
    small_menu.classList.add("right-menu");
    document.body.classList.add("stop-scrolling");
  } else {
    small_menu_state = false;
    menu_burger.classList.remove("right-burger");
    small_cover.classList.add("hidden");
    small_cover.classList.remove("block");
    small_menu.classList.remove("right-menu");
    small_menu.classList.add("right-[-70%]");   
    document.body.classList.remove("stop-scrolling"); 
  }
  
})

const small_menu_title = document.querySelectorAll(".small-menu-title");
const small_menu_subtitle = document.querySelectorAll(".small-menu-subtitle");
let subtitles = Array(false, false, false, false, false, false, false);
let chevrons = Array(
  small_menu_title[0].children[1],
  small_menu_title[1].children[1],
  small_menu_title[2].children[1],
  small_menu_title[3].children[1],
  small_menu_title[4].children[1],
  small_menu_title[5].children[1],
  small_menu_title[6].children[1],
)
const subtitle_contents = document.querySelectorAll(".subtitle-content");
const small_menu_options = document.querySelectorAll(".small-menu-options");
let options = Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
let chevrons2 = Array();
for ( let i = 0; i < subtitle_contents.length; i++ ) {
  chevrons2.push(subtitle_contents[i].children[1]);
}

for ( let i = 0; i < small_menu_title.length; i++ ) {
  small_menu_title[i].addEventListener("click", () => {
    for ( let j = 0; j < small_menu_subtitle.length; j++ ) {
      if ( j !== i ) {
        small_menu_subtitle[j].style.display = `none`;
        subtitles[j] = false;
        chevrons[j].classList.remove("fa-chevron-down");
        chevrons[j].classList.add("fa-chevron-left");
      }
    }
    for ( let j = 0; j < options.length; j++ ) {
      options[j] = false;
      small_menu_options[j].style.display = `none`;
    }
    for ( let j = 0; j < chevrons2.length; j++ ) {
      chevrons2[j].classList.remove("fa-chevron-down");
      chevrons2[j].classList.add("fa-chevron-left");
    }
    let newVar = subtitles[i];
    subtitles[i] = !newVar;
    if ( subtitles[i] ) {
      small_menu_subtitle[i].style.display = `block`;
      chevrons[i].classList.remove("fa-chevron-left");
      chevrons[i].classList.add("fa-chevron-down");
    } else {
      small_menu_subtitle[i].style.display = `none`;
      chevrons[i].classList.remove("fa-chevron-down");
      chevrons[i].classList.add("fa-chevron-left");
    }   
  })
}

for ( let i = 0; i < small_menu_subtitle.length; i++ ) {
  small_menu_subtitle[i].addEventListener("mouseover", () => {
    small_menu_title[i].style.color = `#902070`;
  });
  small_menu_subtitle[i].addEventListener("mouseleave", () => {
    small_menu_title[i].style.color = `#505050`;
  });
}

for ( let i = 0; i < subtitle_contents.length; i++ ) {
  subtitle_contents[i].addEventListener("click", () => {
    for ( let j = 0; j < small_menu_options.length; j++ ) {
      if ( j !== i ) {
        small_menu_options[j].style.display = `none`;
        options[j] = false;
        chevrons2[j].classList.remove("fa-chevron-down");
        chevrons2[j].classList.add("fa-chevron-left");
      }
    }
    let newVar = options[i];
    options[i] = !newVar;
    if ( options[i] ) {
      small_menu_options[i].style.display = `block`;
      chevrons2[i].classList.remove("fa-chevron-left");
      chevrons2[i].classList.add("fa-chevron-down");
      
    } else {
      small_menu_options[i].style.display = `none`;
      chevrons2[i].classList.remove("fa-chevron-down");
      chevrons2[i].classList.add("fa-chevron-left");
    } 
  });
}

for ( let i = 0; i < small_menu_options.length; i++ ) {
  small_menu_options[i].addEventListener("mouseover", () => {
    subtitle_contents[i].style.color = `#ea7f2a`;
  });
  small_menu_options[i].addEventListener("mouseleave", () => {
    subtitle_contents[i].style.color = `#505050`;
  });
}

let windowWidth;

window.setInterval(function() {
  windowWidth = window.innerWidth;
  itemsLgEl.style.width = `calc(78% + ${1200-windowWidth}px)`;
  if ( state === 1 ) {
    changerEl.style.right = "0";
    removeActive(1)
    btn1.classList.add("active");
  } else if ( state === 2 ) {
    changerEl.style.right = "-283.7px";
    removeActive(1);
    btn2.classList.add("active");
  } else if ( state === 3 ) {
    changerEl.style.right = "-567.4px";
    removeActive(1);
    btn3.classList.add("active");    
  } else if ( state === 4 ) {
    changerEl.style.right = "-851.1px";
    removeActive(1);
    btn4.classList.add("active");    
  }

  if ( stateXs === 1 ) {
    secondEl.style.right = "100%";
    firstEl.style.right = "0px";
    removeActive(2);
    btn5.classList.add("active");
  } else if ( stateXs === 2 ) {
    secondEl.style.right = "0px";
    firstEl.style.right = "-100%";
    removeActive(2);
    btn6.classList.add("active");
  }
  
  if ( optionState === 1 ) {
    if ( !pic_container.classList.contains("sm:hidden") ) {
      pic_container.classList.add("sm:hidden");
    }
    if ( !pic_container.classList.contains("xs:hidden") ) {
      pic_container.classList.add("xs:hidden");
    }
  } else {
    if ( pic_container.classList.contains("sm:hidden") ) {
      pic_container.classList.remove("sm:hidden");
    }
    if ( pic_container.classList.contains("xs:hidden") ) {
      pic_container.classList.remove("xs:hidden");
    }
  }

  if ( newsState === 1 ) {
    removeRights();
    newsSliderEl.classList.add("right-0");
    defaultButtons();
    newsPagEl[0].style.outline = `7px solid #e63c94`;
    newsPagEl[0].style.backgroundColor = `white`;
  } else if ( newsState === 2 ) {
    removeRights();
    newsSliderEl.classList.add("right-1");
    defaultButtons();
    newsPagEl[1].style.outline = `7px solid #e63c94`;
    newsPagEl[1].style.backgroundColor = `white`;
  } else {
    removeRights();
    newsSliderEl.classList.add("right-2");
    defaultButtons();
    newsPagEl[2].style.outline = `7px solid #e63c94`;
    newsPagEl[2].style.backgroundColor = `white`;
  }

  if ( !clicked ) {
    newsTimer++;
  }

  if ( newsTimer >= 235 ) {
    if ( newsState === 3 ) {
      newsState = 1;
    } else {
      newsState++;
    }
    newsTimer = 0;
  }

}, 17);