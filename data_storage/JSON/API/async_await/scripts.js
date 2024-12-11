async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await response.json(); 
    console.log(postData); 
    
    const postDiv = document.getElementById('posts');
    postData.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postDiv.appendChild(postElement); 
    });
  } catch (error) {
    console.log('Error:', error);
    document.getElementById('posts').innerHTML = '<h3 style="color: red;">Sorry, something went wrong!</h3>';
  }
}


fetchPosts();
