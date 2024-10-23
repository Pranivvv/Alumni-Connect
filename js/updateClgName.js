function updateClgName() {
    const clgNameElement = document.querySelector('.clg_name');
    if (window.innerWidth < 750) {
        clgNameElement.textContent = "APSIT";
    } else {
        clgNameElement.textContent = "A.P. Shah Institute of Technology";
    }
}

// Run the function when the window is resized
window.addEventListener('resize', updateClgName);

// Run the function on initial page load
document.addEventListener('DOMContentLoaded', updateClgName);