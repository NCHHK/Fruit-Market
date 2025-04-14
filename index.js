// Fruit data
const fruits = [
    { name: "Apple", price: 2.5 },
    { name: "Banana", price: 1.8 },
    { name: "Orange", price: 2.0 },
    { name: "Mango", price: 3.5 },
    { name: "Pineapple", price: 2.8 },
    { name: "Grapes", price: 4.0 },
    { name: "Strawberry", price: 5.0 },
    { name: "Watermelon", price: 1.5 },
    { name: "Kiwi", price: 3.0 },
    { name: "Peach", price: 2.7 }
];

// Seller data
const sellers = [
    { username: "seller1", password: "pass1" },
    { username: "seller2", password: "pass2" },
    { username: "seller3", password: "pass3" }
];

// Initialize local storage for sellers
if (!localStorage.getItem('sellers')) {
    localStorage.setItem('sellers', JSON.stringify(sellers));
}

// Display fruits
function displayFruits() {
    const fruitTableBody = document.getElementById('fruit-table-body');
    fruitTableBody.innerHTML = '';
    fruits.forEach(fruit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fruit.name}</td>
            <td>${fruit.price.toFixed(2)}</td>
        `;
        fruitTableBody.appendChild(row);
    });
}

// Login handler
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedSellers = JSON.parse(localStorage.getItem('sellers'));
    
    const seller = storedSellers.find(s => s.username === username && s.password === password);
    
    if (seller) {
        localStorage.setItem('loggedInSeller', username);
        window.location.href = 'seller.html';
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password';
    }
});

// Initialize
displayFruits();