const expenseTitle = document.getElementById('expense-title');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const expenseDate = document.getElementById('expense-date');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseList = document.getElementById('expense-list');
const filterCategory = document.getElementById('filter-category');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

addExpenseBtn.addEventListener('click', function() {
    const title = expenseTitle.value;
    const amount = expenseAmount.value;
    const category = expenseCategory.value;
    const date = expenseDate.value;

    if (title && amount && category && date) {
        const expense = { title, amount, category, date };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        loadExpenses();
        clearForm();
    }
});

function loadExpenses() {
    const filter = filterCategory.value;
    const filteredExpenses = filter === 'All' ? expenses : expenses.filter(exp => exp.category === filter);

    expenseList.innerHTML = '';
    filteredExpenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.title} - $${expense.amount} (${expense.category}) - ${expense.date}
        <button onclick="deleteExpense(${index})">Delete</button>
        <button onclick="editExpense(${index})">Edit</button>`;
        expenseList.appendChild(li);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    loadExpenses();
}

function editExpense(index) {
    const expense = expenses[index];
    expenseTitle.value = expense.title;
    expenseAmount.value = expense.amount;
    expenseCategory.value = expense.category;
    expenseDate.value = expense.date;

    addExpenseBtn.textContent = 'Update Expense';
    addExpenseBtn.onclick = function() {
        expense.title = expenseTitle.value;
        expense.amount = expenseAmount.value;
        expense.category = expenseCategory.value;
        expense.date = expenseDate.value;

        expenses[index] = expense;
        localStorage.setItem('expenses', JSON.stringify(expenses));
        loadExpenses();
        clearForm();
        addExpenseBtn.textContent = 'Add Expense';
        addExpenseBtn.onclick = function() {
            const title = expenseTitle.value;
            const amount = expenseAmount.value;
            const category = expenseCategory.value;
            const date = expenseDate.value;
            if (title && amount && category && date) {
                const expense = { title, amount, category, date };
                expenses.push(expense);
                localStorage.setItem('expenses', JSON.stringify(expenses));
                loadExpenses();
                clearForm();
            }
        };
    };
}

filterCategory.addEventListener('change', loadExpenses);

function clearForm() {
    expenseTitle.value = '';
    expenseAmount.value = '';
    expenseCategory.value = 'Food';
    expenseDate.value = '';
}

document.addEventListener('DOMContentLoaded', loadExpenses);
