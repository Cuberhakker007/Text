let form = document.getElementById('form');
let getForm = document.getElementById('getForm');

// form.addEventListener('submit',(event)=>{

//     event.preventDefault();

//     let values = {

//         id:event.target[0].value,
//         name:event.target[1].value,
//         lastname:event.target[2].value,
//         email:event.target[3].value,
//         password:event.target[4].value,
//         phone:event.target[5].value,

//     }

// });

// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(name, age, roll) {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
}

const createStudentElement = ({ name, age, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  // Fill the content
  studentName.innerText = name;
  studentAge.innerText =  age;
  studentRoll.innerText = roll;
  studentDiv.classList = 'card';

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};

let deleta = document.getElementById('secrite');
let count = 0;

deleta.addEventListener('click',()=>{

  if(count > 5){

    localStorage.removeItem('students');

  }else{

  count++

  }

});