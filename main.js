const mode = document.querySelector(".switch-button__checkbox");
const bodyDarkTheme = document.querySelector("#body-dark-theme");
const h1DarkTheme = document.querySelector("#h1-dark-theme");
const pDarkTheme = document.querySelector("#p-dark-theme");
const sectionDarkTheme = document.querySelector("#section-dark-theme");
const youtubeIcon = document.querySelector("#youtube-icon");
const instagramIcon = document.querySelector("#instagram-icon");
const twitterIcon = document.querySelector("#twitter-icon");
const linkdinIcon = document.querySelector("#linkdin-icon");
const lastIcon = document.querySelector("#last-icon");


mode.addEventListener('change', () => {
    bodyDarkTheme.classList.toggle("dark-theme")
    h1DarkTheme.classList.toggle("dark-theme")
    pDarkTheme.classList.toggle("dark-theme")
    sectionDarkTheme.classList.toggle("dark-theme")
    if (mode.checked) {
        darkMode()
    } else {      
        lightMode()       
    }
});

function darkMode() {        
    youtubeIcon.setAttribute("src", './img/youtube-icon-gold.svg')
    instagramIcon.setAttribute("src", './img/instagram-icon-gold.svg')
    twitterIcon.setAttribute("src", './img/twitter-icon-gold.svg')
    linkdinIcon.setAttribute("src", './img/linkdin-icon-gold.svg')
    lastIcon.setAttribute("src", './img/last-icon-gold.svg')    
}

function lightMode() {
    youtubeIcon.setAttribute("src", './img/youtube-icon.svg')
    instagramIcon.setAttribute("src", './img/instagram-icon.svg')
    twitterIcon.setAttribute("src", './img/twitter-icon.svg')
    linkdinIcon.setAttribute("src", './img/linkdin-icon.svg')
    lastIcon.setAttribute("src", './img/last-icon.svg')    

}