const input = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('shopping-list');
const itemCount = document.getElementById('item-count');

function updateCount() {
  itemCount.textContent = list.children.length;
}

function addItem() {
  const itemText = input.value.trim();
  if (itemText === "") {
    return;
  }

  const li = document.createElement('li');
  li.textContent = itemText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener('click', () => {
    li.remove();
    updateCount();
  });

  li.addEventListener('click', () => {
    li.classList.toggle('bought');
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
  updateCount();
  input.value = "";
}

addBtn.addEventListener('click', addItem);
