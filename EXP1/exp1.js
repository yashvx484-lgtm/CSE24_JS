function calculateResults() {

const n = parseInt(document.getElementById("subjects").value);

let totalMarks = 0;

for(let i=0; i<n; i++) {

let x = parseFloat(prompt("Enter marks for subject " + (i+1)));

totalMarks += x;

}

let avg = totalMarks / n;

let grade;

if(avg > 90){
grade = "A";
}

else if(avg > 80){
grade = "B";
}

else if(avg > 70){
grade = "C";
}

else{
grade = "D";
}

let r;

if(avg > 40){
r = "Pass";
}
else{
r = "Fail";
}

let result = document.getElementById("results");

result.innerHTML =
"Total Marks: " + totalMarks +
"<br>Average Marks: " + avg +
"<br>Grade: " + grade +
"<br>Result: " + r;

}function calculateResult(){
    const n=document.getElementById('subjects').value;

    let total=0;
    let i;

    for (i=0; i<n; i++){

        let x=parseFloat(prompt("Enter the subject number"+(i+1)));
        total+=x;

    }
    let avg=total/n;
        
    let grade;
    if(avg>90){
        grade='A';
    }
    else if (avg>80){
        grade='B';
    }
    else if (avg>60){
        grade='C';
    }
    else if (avg>40){
        grade='D';
    }
    else {
        grade='F';
    }

    let r;
    if (avg>40){
        r='Pass';
    }
    else 
        r='Fail';

    let result=document.getElementById('result').innerHTML="Total Marks:"+total+"<br>Grade:"+grade+"<br>Result:"+r;

}