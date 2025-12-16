const contentElement = document.getElementById('content');

const addButton = document.getElementById('addButton');
const data = [];

if (contentElement && contentElement.textContent.trim() === "") {
  contentElement.innerHTML = "Database is empty";
  console.log("Content updated: Database is empty");
} else if (contentElement) {
  console.log("Content already exists or is not empty.");
} else {
  console.log("Element with id 'content' not found.");
}

addButton.addEventListener('click', () => {
  alert('Student added successfully!');

  const nameStudent = (document.getElementById('name')).value;
  data.push(nameStudent);

  const ageStudent = (document.getElementById('age')).value;
  data.push(ageStudent);

  const addressStudent = (document.getElementById('address')).value;
  data.push(addressStudent);

  const genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "N/A";
  data.push(gender);

  const meritInput = document.querySelector('input[name="merit_score"]:checked');
  const meritValue = meritInput ? meritInput.value : "N/A";
  data.push(meritValue);

  const academicInput = document.querySelector('input[name="academic_score"]:checked');
  const academicValue = academicInput ? academicInput.value : "N/A";
  data.push(acadmicValue);

  
});