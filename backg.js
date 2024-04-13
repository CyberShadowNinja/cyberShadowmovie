// Function to open the feedback modal
function openFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "block";
}

// Function to close the feedback modal
function closeFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("feedbackModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
