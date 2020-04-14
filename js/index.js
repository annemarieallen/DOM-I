const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images
let circleImg = document.querySelector("#cta-img");
circleImg.setAttribute('src',siteContent['cta']['img-src'
]);

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src']);



// NAV 
let menuItems = document.querySelectorAll("a");

menuItems.forEach((nav)=>{
  menuItems[0].textContent="Services";
  menuItems[1].textContent="Product";
  menuItems[2].textContent="Vision";
  menuItems[3].textContent="Features";
  menuItems[4].textContent="About";
  menuItems[5].textContent="Contact";
})

const nav = Array.from(document.querySelectorAll("nav a"));

for (i=0;i<nav.length;i++){
  const navItem=`nav-item-${i+1}`
  nav[i].style.color="green";
}

const cta = document.querySelector('.cta-text h1');
// cta.textContent=siteContent['cta']['h1'];
cta.innerHTML = "DOM <br> IS <br> AWESOME";

const button = document.querySelector("button");
console.log(button);
button.textContent=siteContent["cta"]['button'];

// Text Content 

const topContentTitles = document.querySelectorAll('.top-content .text-content h4');
topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];

const topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];


const bottomContentTitles=document.querySelectorAll('.bottom-content .text-content h4');
bottomContentTitles[0].textContent=siteContent['main-content']['services-h4'];
bottomContentTitles[1].textContent=siteContent['main-content']['product-h4'];
bottomContentTitles[2].textContent=siteContent['main-content']['vision-h4'];

const bottomContentText=document.querySelectorAll(".bottom-content .text-content p");
bottomContentText[0].textContent=siteContent['main-content']['services-content'];
bottomContentText[1].textContent=siteContent['main-content']['product-content'];
bottomContentText[2].textContent=siteContent['main-content']['vision-content'];

// Footer 

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent=siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll(".contact p");
console.log(contactInfo);
contactInfo[0].textContent=siteContent['contact']['address'];
contactInfo[1].textContent=siteContent['contact']['phone'];
contactInfo[2].textContent=siteContent['contact']['email'];

const footer = document.querySelector("footer p");
footer.textContent=siteContent['footer']['copyright'];