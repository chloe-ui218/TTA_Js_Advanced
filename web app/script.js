let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const form = document.getElementById("contact-form");
    const contactList = document.getElementById("contacts-list");

    function renderContacts() {
      contactList.innerHTML = "";
      contacts.forEach((contact, index) => {
        const div = document.createElement("div");
        div.className = "contact";
        div.innerHTML = `
          <strong>${contact.name}</strong><br>
           ${contact.email}<br>
           ${contact.phone}<br>
          <button onclick="editContact(${index})">Edit</button>
          <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(div);
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (name && email && phone) {
        contacts.push({ name, email, phone });
        localStorage.setItem("contacts", JSON.stringify(contacts));
        form.reset();
        renderContacts();
      }
    });

    function deleteContact(index) {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    }

    function editContact(index) {
      const contact = contacts[index];
      document.getElementById("name").value = contact.name;
      document.getElementById("email").value = contact.email;
      document.getElementById("phone").value = contact.phone;
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    }

    rendercontacts();
  