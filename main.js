const text = document.getElementById("text");
const names = ["Sarina Emadi",
 "Junior Front-end Developer"];
let wordIndex = 0;
let index = 0;

function textload(){
    text.textContent = names[wordIndex].substring(0, index);
    if (index > names[wordIndex].length){
      wordIndex+= 1;
      if(wordIndex === names.length){
        wordIndex = 0;
      }
      index = 0;
      text.textContent = "";
    }


        // setTimeout(() => {
        //     text.textContent = name2;
        //   }, 2000);
        // }
      index++;
  }
      textload();
      const timer = setInterval(textload, 1000);

//     // setTimeout(() => {
//     //     text.textContent = "Sarina Emadi";
//     // }, 0);
//     // setTimeout(() => {
//     //     text.textContent = "";
//     // }, 2000);
//     // setTimeout(()=> {
//     //     text.textContent = "Junior Front-end Developer";
//     // }, 4000);

  // const button = document.getElementById ("myButton");

  function sendMessage() {
    const name = document.getElementById ("name").value;
    const email = document.getElementById ("email").value;
    console.log (name, email);


  }


//   function sendMessage(){
//     const name = document.getElementById ("name").value;
//     const email = document.getElementById ("email").value;
//     console.log("name, email", name, email);
// }
