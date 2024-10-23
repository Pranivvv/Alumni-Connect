document.addEventListener('DOMContentLoaded', function () {
    const studentLogo = document.querySelector('.student_Logo');
    const nav = document.querySelector('.nav');
    const mainBody = document.querySelector('.main_body');
    let isNavVisible = false;

    // Add click event listener to student logo
    studentLogo.addEventListener('click', function () {
        if (window.innerWidth < 1075) {
            if (!isNavVisible) {
                // Show the nav above the main_body
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.left = '0';
                nav.style.zIndex = '1'; // Ensure it is above the main body
                nav.style.height= '-webkit-fill-available';
                mainBody.classList.add('blur');
                isNavVisible = true;
            } else {
                // Hide the nav if it's already visible
                nav.style.display = 'none';
                mainBody.classList.remove('blur');
                isNavVisible = false;
            }
        }
    });

    // Ensure the nav is hidden initially on smaller screens
    function updateNavVisibility() {
        if (window.innerWidth < 1075) {
            nav.style.display = 'none';
            isNavVisible = false;
            mainBody.classList.remove('blur');
        } else {
            nav.style.display = 'flex'; // Default state for larger screens
            nav.style.position = 'relative'; // Restore original position
        }
    }

    // Run on resize and initial page load
    window.addEventListener('resize', updateNavVisibility);
    updateNavVisibility();
});

        