// ---------------------------
// TRANSLATIONS
// ---------------------------

const translations = {

en:{
hero_title:"Empowering Communities. Protecting Futures.",
hero_text:"LIKOLEH CI works across Côte d’Ivoire to empower women, protect children and strengthen rural communities through education and sustainable development.",

about_title:"About LIKOLEH",
about_text:"Founded in 2014 in Man, Tonkpi Region, LIKOLEH CI is a registered Ivorian NGO promoting economic empowerment, child protection, education and peacebuilding.",

work_title:"Our Work",

work_edu_title:"Education",
work_edu_short:"Promoting children's access to education by strengthening school infrastructure.",
work_edu_more:"LIK OLEH supports schools through infrastructure projects, learning materials and education programs.",

work_women_title:"Women Empowerment",
work_women_short:"LIK OLEH supports women through education and local initiatives.",
work_women_more:"Women are supported through cooperatives, training and income programs.",

work_child_title:"Child Protection",
work_child_short:"Programs supporting children without birth certificates.",
work_child_more:"LIK OLEH works with local authorities to improve birth registration.",

impact_title:"Our Impact",

impact_years:"Years of community work",
impact_children:"Children supported through education",
impact_women:"Women empowered through local initiatives",
impact_communities:"Communities reached in Côte d’Ivoire",

support_title:"Support Our Work",
support_text:"Your support helps LIKOLEH CI empower women, protect children and strengthen rural communities across Côte d’Ivoire.",
support_button:"Donate Now"
},

fr:{
hero_title:"Autonomiser les communautés. Protéger l'avenir.",
hero_text:"LIKOLEH CI œuvre en Côte d’Ivoire pour autonomiser les femmes, protéger les enfants et renforcer les communautés rurales.",

about_title:"À propos de LIKOLEH",
about_text:"Fondée en 2014 à Man dans la région du Tonkpi, LIKOLEH CI est une ONG ivoirienne enregistrée.",

work_title:"Notre Travail",

work_edu_title:"Éducation",
work_edu_short:"Promotion de l'accès des enfants à l'éducation.",
work_edu_more:"LIK OLEH soutient les écoles et les programmes éducatifs.",

work_women_title:"Autonomisation des femmes",
work_women_short:"LIK OLEH soutient les femmes par l'éducation.",
work_women_more:"Les femmes sont soutenues dans leurs initiatives économiques.",

work_child_title:"Protection de l'enfant",
work_child_short:"Programmes soutenant les enfants sans certificat de naissance.",
work_child_more:"LIK OLEH améliore l'accès à l'enregistrement des naissances.",

impact_title:"Notre Impact",

impact_years:"Années de travail communautaire",
impact_children:"Enfants soutenus par l'éducation",
impact_women:"Femmes autonomisées",
impact_communities:"Communautés atteintes en Côte d’Ivoire",

support_title:"Soutenez notre action",
support_text:"Votre soutien aide LIKOLEH CI à autonomiser les femmes, protéger les enfants et renforcer les communautés rurales à travers la Côte d’Ivoire.",
support_button:"Faire un don"
},

de:{
hero_title:"Gemeinschaften stärken. Zukunft schützen.",
hero_text:"LIKOLEH CI arbeitet in Côte d’Ivoire, um Frauen zu stärken, Kinder zu schützen und ländliche Gemeinschaften zu fördern.",

about_title:"Über LIKOLEH",
about_text:"Gegründet 2014 in Man, Region Tonkpi, ist LIKOLEH CI eine registrierte ivorische NGO.",

work_title:"Unsere Arbeit",

work_edu_title:"Bildung",
work_edu_short:"Förderung der Einschulung von Kindern.",
work_edu_more:"LIK OLEH unterstützt Schulen durch Infrastrukturprojekte.",

work_women_title:"Stärkung der Rolle der Frau",
work_women_short:"LIK OLEH fördert Frauen durch Bildung.",
work_women_more:"Frauen werden durch Kooperativen und Programme unterstützt.",

work_child_title:"Kinderschutz",
work_child_short:"Programme für Kinder ohne Geburtsurkunden.",
work_child_more:"LIK OLEH arbeitet mit lokalen Behörden zusammen.",

impact_title:"Unsere Wirkung",

impact_years:"Jahre gemeinschaftlicher Arbeit",
impact_children:"Kinder durch Bildung unterstützt",
impact_women:"Frauen durch Initiativen gestärkt",
impact_communities:"Erreichte Gemeinden in Côte d’Ivoire",

support_title:"Unterstützen Sie unsere Arbeit",
support_text:"Ihre Unterstützung hilft LIKOLEH CI, Frauen zu stärken, Kinder zu schützen und ländliche Gemeinschaften in ganz Côte d’Ivoire zu stärken.",
support_button:"Jetzt spenden"
}

};


// ---------------------------
// SAFE TEXT UPDATE
// ---------------------------

function updateText(selector,text){

const element=document.querySelector(selector)

if(element){
element.textContent=text
}

}


// ---------------------------
// LANGUAGE SWITCH
// ---------------------------

function setLanguage(lang){

updateText("[data-hero-title]",translations[lang].hero_title)
updateText("[data-hero-text]",translations[lang].hero_text)

updateText("[data-about-title]",translations[lang].about_title)
updateText("[data-about-text]",translations[lang].about_text)

updateText("[data-work-title]",translations[lang].work_title)

updateText("[data-work-edu-title]",translations[lang].work_edu_title)
updateText("[data-work-edu-short]",translations[lang].work_edu_short)
updateText("[data-work-edu-more]",translations[lang].work_edu_more)

updateText("[data-work-women-title]",translations[lang].work_women_title)
updateText("[data-work-women-short]",translations[lang].work_women_short)
updateText("[data-work-women-more]",translations[lang].work_women_more)

updateText("[data-work-child-title]",translations[lang].work_child_title)
updateText("[data-work-child-short]",translations[lang].work_child_short)
updateText("[data-work-child-more]",translations[lang].work_child_more)

updateText("[data-impact-title]",translations[lang].impact_title)

updateText("[data-impact-years]",translations[lang].impact_years)
updateText("[data-impact-children]",translations[lang].impact_children)
updateText("[data-impact-women]",translations[lang].impact_women)
updateText("[data-impact-communities]",translations[lang].impact_communities)

updateText("[data-support-title]",translations[lang].support_title)
updateText("[data-support-text]",translations[lang].support_text)
updateText("[data-support-button]",translations[lang].support_button)

}


// ---------------------------
// FLAG EVENTS
// ---------------------------

document.getElementById("lang-en").onclick=()=>setLanguage("en")
document.getElementById("lang-fr").onclick=()=>setLanguage("fr")
document.getElementById("lang-de").onclick=()=>setLanguage("de")


// ---------------------------
// READ MORE
// ---------------------------

document.querySelectorAll(".read-more-btn").forEach(button=>{

button.addEventListener("click",()=>{

const moreText=button.parentElement.querySelector(".more-text")

if(moreText.style.display==="inline"){

moreText.style.display="none"
button.textContent="Read more"

}else{

moreText.style.display="inline"
button.textContent="Show less"

}

})

})


// ---------------------------
// VIDEO MODAL
// ---------------------------

const videoCard=document.querySelector(".video-card")
const modal=document.getElementById("videoModal")
const modalVideo=document.getElementById("modalVideo")
const closeModal=document.querySelector(".close-modal")

if(videoCard){

videoCard.addEventListener("click",()=>{

modal.style.display="flex"
modalVideo.currentTime=0
modalVideo.muted=false
modalVideo.play()

})

}

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.style.display="none"
modalVideo.pause()

})

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none"
modalVideo.pause()

}

})
