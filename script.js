document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const cardContainer = document.getElementById('cardsContainer');

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Lastname:</strong> ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

    cardContainer.appendChild(card);
    document.getElementById('userForm').reset();
});
