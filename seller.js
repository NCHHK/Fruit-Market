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

// Check if seller is logged in
if (!localStorage.getItem('loggedInSeller')) {
    window.location.href = 'index.html';
}

// Populate order form
function populateOrderForm() {
    const orderTableBody = document.getElementById('order-table-body');
    orderTableBody.innerHTML = '';
    fruits.forEach(fruit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fruit.name}</td>
            <td>${fruit.price.toFixed(2)}</td>
            <td><input type="number" min="0" step="0.1" name="${fruit.name}" placeholder="0"></td>
        `;
        orderTableBody.appendChild(row);
    });
}

// Check fruit availability
document.getElementById('check-btn').addEventListener('click', function() {
    const fruitName = document.getElementById('check-fruit').value.trim().toLowerCase();
    const fruit = fruits.find(f => f.name.toLowerCase() === fruitName);
    const result = document.getElementById('check-result');
    
    if (fruit) {
        result.textContent = `${fruit.name} is available for $${fruit.price.toFixed(2)}/kg`;
    } else {
        result.textContent = 'Fruit not found, Please search for another fruit.';
    }
});

// Calculate order total
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let total = 0;
    const inputs = document.querySelectorAll('#order-table-body input[type="number"]');
    
    inputs.forEach(input => {
        const quantity = parseFloat(input.value) || 0;
        const fruitName = input.name;
        const fruit = fruits.find(f => f.name === fruitName);
        if (fruit && quantity > 0) {
            total += quantity * fruit.price;
        }
    });
    
    document.getElementById('order-total').textContent = `Total Price: $${total.toFixed(2)}`;
});

// Logout handler
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('loggedInSeller');
    window.location.href = 'index.html';
});

// Initialize
populateOrderForm();