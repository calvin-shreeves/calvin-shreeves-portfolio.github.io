let experience = document.getElementById('experience')

let about = document.getElementById('about')

let contact= document.getElementById('contact')

let experienceNav = document.getElementsByTagName('h4')

let header = document.getElementById('page-header')

let activeAbout=false;
let activeExperience=true;
let activeContact=false;

function toggleAboutPage(){
    activeAbout=true;
    activeExperience=false;
    activeContact=false;
    if(activeAbout)
    header.innerHTML='About'
    experience.style.display='none';
    contact.style.display='none';
    about.style.display='flex';
    experienceNav[1].style.cssText=`background-color: black;
    color: white;
   
    border-radius: 10px;
    padding: 9px;
    transition: .1s;`;
    experienceNav[0].style.cssText=`
   
    transition:1s;
    `
    experienceNav[2].style.cssText=`
   
    transition:1s;
    `
}
function toggleExperiencePage(){
    activeAbout=false;
    activeExperience=true
    activeContact=false;
    if(activeExperience)
    header.innerHTML='Experience'
    experience.style.display='flex';
    about.style.display='none';
    contact.style.display='none';
    experienceNav[0].style.cssText=`background-color: black;
    color: white;
    border-radius: 10px;
    padding: 9px;
    transition: .1s;`;
    experienceNav[1].style.cssText=`
    transition:1s;
    `
    experienceNav[2].style.cssText=`
    transition:1s;
    `
}


function toggleContactPage(){
    activeContact=true;
    activeAbout=false;
    activeExperience=false;
    if(activeContact)
    header.innerHTML='Contact'
    contact.style.display='flex';
    about.style.display='none';
    experience.style.display='none';
    experienceNav[2].style.cssText=`background-color: black;
    color: white;
    border-radius: 10px;
    padding: 9px;
    transition: .1s;`;
    experienceNav[1].style.cssText=`
    transition:1s;
    `
    experienceNav[0].style.cssText=`
    transition:1s;
    `
}