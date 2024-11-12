function loadXML() {
    console.log("Loading XML...");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            const xmlDoc = this.responseXML;
            const books = xmlDoc.getElementsByTagName("book");
            let output = "<h2>Books in Catalog</h2>";
            const bookArray = [];

            for (let i = 0; i < books.length; i++) {
                const title = books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                output += `<p><strong>Title:</strong> ${title}</p>`;
                bookArray.push({ title: title });
            }

    
            document.getElementById("output").innerHTML = output;

            localStorage.setItem("books", JSON.stringify(bookArray));
            console.log("Books saved to localStorage.");
        } else {
            console.error("Failed to load XML.");
        }
    };

    xhttp.open("GET", "books.xml", true);
    xhttp.send();
}

function showStoredBooks() {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        const bookArray = JSON.parse(storedBooks);
        let output = "<h2>Stored Books</h2>";
        bookArray.forEach((book) => {
            output += `<p><strong>Title:</strong> ${book.title}</p>`;
        });

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("output").innerHTML = "<p>No books found in localStorage.</p>";
    }
}
