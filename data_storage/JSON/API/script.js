fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    //.then(data => console.log(data));
    .then(data => {
        const postDiv = document.getElementById('posts');
        data.forEach(post => {

            //if (post.userId === 1) {
                
            const postElement = document.createElement('div');
             postElement.classList.add('post');
             postElement.innerHTML = `
             <h2>${post.title}</h2>
             <p>${post.body}</p>
             `;
             postDiv.appendchild(postElement);
        })
    })
    .catch(error => {
        // console.log(error)
        console.log('Error:', error);
        document.getElementById('posts').innerHTML = '<h3 style="color: red;">Sorry, something went wrong!</h3>';
    });
        