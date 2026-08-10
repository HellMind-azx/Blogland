

function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get('id'));
}

function renderPostPage() {
    const postContainer = document.querySelector('.post-container');
    const posts = JSON.parse(localStorage.getItem('blogs') || []);
    const postId = getPostIdFromUrl();

    const post = posts.find(item => item.id === postId);

    if (!post) {
        postContainer.textContent = 'Post topilmadi';
        return;
    }

    const postTitle = document.createElement('h1');
    postTitle.textContent = post.title;

    const postImage = document.createElement('img');
    postImage.src = post.img;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    postContainer.append(postTitle, postImage, postContent);
}

renderPostPage();