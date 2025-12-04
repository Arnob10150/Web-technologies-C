const styles = `
    body {
        font-family: Calibri, sans-serif;

    }
    .light { 
        background-color: white; 
        color: black; 
    }
    .dark { 
        background-color: #333; 
        color: white; 
    }
    header {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .dark header {
        border-bottom-color: #777;
    }
    nav { 
        margin: 20px 0; 
    }
    nav a {
        margin: 0 15px;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .light nav a { 
        color: black; 
    }
    .dark nav a { 
        color: white; 
        border-color: #777; 
    }
    section {
        padding: 20px;
        display: none;
    }
    #about { 
        display: block; 
    }
    form input, form textarea {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        padding: 8px;
    }
    .dark form input, .dark form textarea {
        background-color: #555;
        color: white;
        border-color: #777;
    }
    .error { 
        color: red; 
        font-size: 12px; 
    }
    button { 
        padding: 10px; 
        cursor: pointer; 
    }
`;


const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

let isDark = false;
const themeToggle = document.getElementById('themeToggle');
const body = document.body;


body.classList.add('light');

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = 'Switch to Dark Mode';
    }
});


function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 17) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    
    document.getElementById('greeting').textContent = greeting;
}

updateGreeting();

const sections = ['about', 'projects', 'contact'];

function showSection(sectionId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
    });
}

document.getElementById('aboutLink').addEventListener('click', () => showSection('about'));
document.getElementById('projectsLink').addEventListener('click', () => showSection('projects'));
document.getElementById('contactLink').addEventListener('click', () => showSection('contact'));


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Valid email required.';
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if (valid) {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});