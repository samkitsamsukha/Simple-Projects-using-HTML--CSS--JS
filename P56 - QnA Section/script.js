const questions = document.querySelectorAll(".question"); // adding all the questions to one array/variable

//running the for each loop to go through every question in the array of questionS
questions.forEach((question)=>{
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", ()=>{ //add event on button click
        question.classList.toggle("show-text"); //toggle class show text
    })
})