const addBtn = document.getElementById('addBtn');
const tableBody = document.querySelector('#studentTable tbody');

addBtn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    const roll = document.getElementById('rollInput').value.trim();
    const dept = document.getElementById('deptInput').value.trim();

    if (name === '' || roll === '' || dept === '') {
        alert('All fields must be filled!');
        return;
    }

    // Create row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${dept}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;
    tableBody.appendChild(row);

    // Clear inputs
    document.getElementById('nameInput').value = '';
    document.getElementById('rollInput').value = '';
    document.getElementById('deptInput').value = '';

    // Add delete event
    row.querySelector('.deleteBtn').addEventListener('click', () => {
        tableBody.removeChild(row);
    });
});