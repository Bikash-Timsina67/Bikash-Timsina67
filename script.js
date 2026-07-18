// Typing Animation

const words = [
    "Aspiring Software Engineer",
    "C# Developer",
    "JavaScript Learner",
    "AI Explorer",
    "Future Software Engineer 🚀"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");


function typeEffect(){

    const currentWord = words[wordIndex];


    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }


    else{

        typing.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex === 0){

            deleting=false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex=0;

            }

        }

    }


    setTimeout(typeEffect, deleting ? 50 : 100);

}


typeEffect();





// Scroll Reveal Animation


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.15

}

);




sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="1s ease";


observer.observe(section);


});







// Dynamic Footer Year


const footer=document.querySelector("footer");


if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Bikash Timsina | Built with ❤️ and Code`;

}






// Mouse Glow Effect


document.addEventListener(
"mousemove",
(e)=>{


document.body.style.setProperty(
"--x",
e.clientX+"px"
);


document.body.style.setProperty(
"--y",
e.clientY+"px"
);


});