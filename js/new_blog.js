//LOGIC FOR CREATING AND SAVING A POST

function savePost(post) {
    const existingPosts = JSON.parse(localStorage.getItem('blogs')) || [];

    existingPosts.push(post);

    localStorage.setItem('blogs', JSON.stringify(existingPosts));
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const imageUrl = document.querySelector('.image-url').value;
    const title = document.querySelector('.blog-title').value;
    const content = document.querySelector('.content').value;

    if (!title || !content) return;

    const post = {
        id: Date.now(),
        img: imageUrl,
        title: title,
        content: content,
        createdAt: new Date().toLocaleDateString()
    };

    savePost(post);

    alert('Post muvaffaqiyatli yakunlandi!')

    window.location.href = 'index.html'
})


