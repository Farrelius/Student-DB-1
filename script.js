const contentElement = document.getElementById('content');
const nameStudent = document.getElementById('name');

if (contentElement && contentElement.textContent.trim() === "") {
  contentElement.innerHTML = "Database is empty";
  console.log("Content updated: Database is empty");
} else if (contentElement) {
  console.log("Content already exists or is not empty.");
} else {
  console.log("Element with id 'content' not found.");
}