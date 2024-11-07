// Get the button by its ID
const submitButton = document.getElementById('submit') as HTMLButtonElement;

// Check if the button exists and add a click event listener
if (submitButton) {
    submitButton.addEventListener('click', () => {
        console.log("Create Resume button clicked!");
        alert("Create Resume button clicked!");
    });
} else {
    console.error("Button with id 'submit' not found.");
}

