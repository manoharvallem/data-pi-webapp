const API_URL = '/api/posts';

document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message })
    });

    if (response.ok) {
        loadPosts();
        document.getElementById('postForm').reset();
    } else {
        alert('Error submitting post');
    }
});

async function loadPosts() {
    const response = await fetch(API_URL);
    const posts = await response.json();
    const postList = document.getElementById('postList');
    postList.innerHTML = posts.map(post => `<p><strong>${post.name}:</strong> ${post.message}</p>`).join('');
}

loadPosts();