const text = [
    "Aspiring Software Engineer",
    "Learning C# & JavaScript",
    "Exploring Artificial Intelligence"
];

let index = 0;
let char = 0;

function typing(){

    if(char < text[index].length){

        document.getElementById("typing").innerHTML += text[index].charAt(char);
        char++;
        setTimeout(typing,80);

    }

    else{

        setTimeout(()=>{
            document.getElementById("typing").innerHTML="";
            char=0;
            index++;

            if(index >= text.length){
                index=0;
            }

            typing();

        },1000);

    }

}


typing();