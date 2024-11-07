// Get the button by its ID
var submitButton = document.getElementById('submit');
// Check if the button exists and add a click event listener
if (submitButton) {
    submitButton.addEventListener('click', function () {
        console.log("Create Resume button clicked!");
        alert("Create Resume button clicked!");
    });
}
else {
    console.error("Button with id 'submit' not found.");
}
