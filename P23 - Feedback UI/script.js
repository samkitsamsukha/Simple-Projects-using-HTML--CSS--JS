const ratingELs = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

//for each loop is used to loop through each element
ratingELs.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event)=> {
        console.log(event.target.innerText || event.target.parentNode.innerText);
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        removeActive(); //first remove all buttons from active and then add active class to the clicked button
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})

btnEl.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong> Thank You!</strong>
        <br>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>We will take your feedback and start working on becoming better.</p>
        `;
    }
})

function removeActive(){
    ratingELs.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    });
}