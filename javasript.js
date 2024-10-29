// Function to show the popup
function showPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
}

// Function to hide the popup
function hidePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

// Automatically show the popup when the page loads
window.onload = function() {
  showPopup();
};