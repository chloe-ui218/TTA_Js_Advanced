async function fetchPsts() {
  try {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    postData = await response.json();
    console.log(data);
   const postDiv = document.getElementById('posts');
   data.forEach(post => {
       const postElement = document.createElement('div');
       postElement.classList.add('post');
       postElement.innerHTML = `
       <h2>${post.title}</h2>
       <p>${post.body}</p>
       `;
       postDiv.appendchild(postElement);
   });
  } catch (error) {
    console.log('Error:', error);
    document.getElementById('posts').innerHTML = '<h3 style="color: red;">Sorry, something went wrong!</h3>';
  }

}
fetchPsts;