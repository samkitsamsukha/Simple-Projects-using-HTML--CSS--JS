const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
btnEl.addEventListener("click", calculateAge);
const resultEl = document.getElementById("result");

function calculateAge(){
    // console.log("clicked")
    const birthdayValue = birthdayEl.value;
    // console.log(birthdayValue);
    //2023-12-16 or YYYY-MM-DD
    if(birthdayValue === "")
    alert("Please enter your birthday"); //Helps in avoiding mistake
    else{
        const age = getAge(birthdayValue);
        // console.log(age);
        if(age > 1){
            resultEl.innerText = `Your age is ${age} years`;
        }
        else if(age < 0){
            resultEl.innerText = `You have entered a future date as your birthday. INVALID`;
            // resultEl.style.backgroundColor = red;
        }
        else{
            resultEl.innerText = `Your age is ${age} year`;
        }
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    // console.log(birthdayDate.getFullYear());
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();
    if(months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}