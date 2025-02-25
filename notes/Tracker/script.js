document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function saveExpenses() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function displayExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach((expense, index) => {
            const li = document.createElement("li");
            li.className = "p-2 border rounded flex justify-between items-center";
            li.innerHTML = `
                <div>
                    <p class="font-bold">${expense.title} - $${expense.amount}</p>
                    <p class="text-sm">${expense.category} | ${expense.date}</p>
                </div>
                <div>
                    <button onclick="editExpense(${index})" class="bg-yellow-400 p-1 rounded">Edit</button>
                    <button onclick="deleteExpense(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
                </div>
            `;
            expenseList.appendChild(li);
        });
    }

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const amount = document.getElementById("amount").value;
        const date = document.getElementById("date").value;
        const category = document.getElementById("category").value;

        if (title && amount && date) {
            expenses.push({ title, amount, date, category });
            saveExpenses();
            displayExpenses();
            expenseForm.reset();
        }
    });

    displayExpenses();
});
