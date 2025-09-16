let form=document.querySelector("#ageCalc");

form.addEventListener("submit" , function (err){
    err.preventDefault();
    let dobInput =document.querySelector("#dob").value;
    if(!dobInput) return;

    const dob=new Date(dobInput);
    const today=new Date();

    let years=today.getFullYear() - dob.getFullYear();

    let months=today.getMonth() - dob.getMonth();

    let days=today.getDate() - dob.getDate();

    if(days <0 ){
        months --;
        const prevMonth=new Date( today.getFullYear(), today.getMonth(), 0);

        days +=prevMonth.getDate();
    }

    if(months < 0){
        years --;
        months +=12;
    }

    const result=document.querySelector("#result");

    if(years < 0){
        result.textContent="Invalid Date of Birth!";

    }
    else{
        result.textContent=`You are ${years} years, ${months} months, and ${days} days old.`;
    }


    
})

