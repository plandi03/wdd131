document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactUsForm");
    const thankYouDialog = document.getElementById("thankYouDialog");
    const closeDialogButton = document.getElementById("closeDialog");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        thankYouDialog.showModal(); // Show the dialog
        form.reset(); // Reset the form fields
    });

    closeDialogButton.addEventListener("click", () => {
        thankYouDialog.close(); // Close the dialog
    });
});