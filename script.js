// 1. Dynamic Greeting (Changes based on time of day)
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('.highlight');
    const hour = new Date().getHours();
    
    if (greetingElement) {
        if (hour < 12) {
            console.log("Good morning!");
        } else if (hour < 18) {
            console.log("Good afternoon!");
        } else {
            console.log("Good evening!");
        }
    }
});

// 2. Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
}

// 3. Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
