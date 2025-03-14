// Dynamically insert student info
document.addEventListener("DOMContentLoaded", function () {
    const studentInfo = document.getElementById("student-info");
    studentInfo.innerHTML = "Student ID: 123456 | Name: John Doe";
});

// Pizza Class
class Pizza {
    constructor(size, crust, toppings, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
    }

    getDescription() {
        return `You ordered ${this.quantity} ${this.size} pizza(s) with a ${this.crust} 
        crust and toppings: ${this.toppings.length > 0 ? this.toppings.join(", ") : "None"}.`;
    }
}

// Order Button Click Event
document.getElementById("order-btn").addEventListener("click", function () {
    // Get form values
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Get selected toppings
    const toppings = [];
    document.querySelectorAll("input[type=checkbox]:checked").forEach((checkbox) => {
        toppings.push(checkbox.value);
    });

    // Validate input
    if (quantity < 1) {
        alert("Please enter a valid pizza quantity.");
        return;
    }

    // Create Pizza object
    const pizzaOrder = new Pizza(size, crust, toppings, quantity);

    // Display order summary
    document.getElementById("order-summary").innerHTML = pizzaOrder.getDescription();
});
