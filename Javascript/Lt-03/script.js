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
    header, main, footer {
        padding: 20px;
        margin: 10px;
        border: 1px solid #ccc;

    }
    .light header, .light main, .light footer {
        background-color: #f9f9f9;
        border-color: #ccc;
    }
    .dark header, .dark main, .dark footer {
        background-color: #555;
        border-color: #777;
    }
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

let isDark = false;
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

body.classList.add('light');

toggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
});