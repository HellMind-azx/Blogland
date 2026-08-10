const container = document.querySelector('.section__post-container');

function renderPosts() {
    const container = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('blogs')) || [];

    // Очищаем контейнер перед рендером

    posts.forEach(post => {
        const cardContainer = document.createElement('a');
        cardContainer.href = `post.html?id=${post.id}`;

        const card = document.createElement('article');
        card.className = 'blog-card';

        const image = document.createElement('img');
        image.src = post.img;

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const contentEl = document.createElement('p');
        contentEl.textContent = post.content;
        contentEl.classList.add('hidden');

        card.appendChild(image);
        card.appendChild(titleEl);
        card.appendChild(contentEl);
        cardContainer.appendChild(card)
        container.appendChild(cardContainer);
    });
}

renderPosts();