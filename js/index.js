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



// Navigation Links.
let navigationLinks = document.querySelectorAll('nav a');

// Navigation.
let navigation = document.querySelector('nav');

// Perpend child.
let home = document.createElement('a');
home.setAttribute('href', '#');
home.textContent = 'Home';
home.style.color = "green";
navigation.prepend(home);

for(let i = 0; i < navigationLinks.length; i++)
{
  navigationLinks[i].textContent = siteContent['nav']['nav-item-'+(i+1)];
  navigationLinks[i].style.color = "green";
}

// Append child.
let Blog = document.createElement('a');
Blog.setAttribute('href', '#');
Blog.textContent = 'Blog';
Blog.style.color = "green";
navigation.appendChild(Blog);

// Header image.
let headerImage = document.querySelector("#cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Cta heading.
let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerHTML = siteContent['cta']['h1'].replace(/ /g,'<br>');

// Cta button.
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// Main content.
let mainContent = document.querySelectorAll(".main-content .text-content");

// Feature Content.
let featureHeading = mainContent[0].querySelector('h4');
featureHeading.textContent = siteContent['main-content']['features-h4'];

let featureContent = mainContent[0].querySelector('p');
featureContent.textContent = siteContent['main-content']['features-content'];

// About Content.
let aboutHeading = mainContent[1].querySelector('h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];

let aboutContent = mainContent[1].querySelector('p');
aboutContent.textContent = siteContent['main-content']['about-content'];

// Middle image.
let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Service content.
let serviceHeading = mainContent[2].querySelector('h4');
serviceHeading.textContent = siteContent['main-content']['services-h4'];

let serviceContent = mainContent[2].querySelector('p');
serviceContent.textContent = siteContent['main-content']['services-content'];

// Product content.
let productHeading = mainContent[3].querySelector('h4');
productHeading.textContent = siteContent['main-content']['product-h4'];

let productContent = mainContent[3].querySelector('p');
productContent.textContent = siteContent['main-content']['product-content'];

// Vision content.
let visionHeading = mainContent[4].querySelector('h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];

let visionContent = mainContent[4].querySelector('p');
visionContent.textContent = siteContent['main-content']['vision-content'];

// Contact Section
let contact = document.querySelector('.contact');
let contactHeading = contact.querySelector('h4');
let contactP = contact.querySelectorAll('p');

contactHeading.textContent = siteContent['contact']['contact-h4'];
contactP[0].innerHTML = siteContent['contact']['address'].replace('Street','Street <br>');
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];


// Footer
let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];


// Stretch
 //document.querySelector('body').style.backgroundColor = 'lightgray';


