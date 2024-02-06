function handleLike(blogNumber) {
    let currentLikes = localStorage.getItem(`likeCounter${blogNumber}`) || 0;
    currentLikes++;
    document.getElementById(`likeCounter${blogNumber}`).innerText = currentLikes;
    localStorage.setItem(`likeCounter${blogNumber}`, currentLikes.toString());
}

function handleComment(blogNumber) {
    let currentComments = localStorage.getItem(`commentCounter${blogNumber}`) || 0;
    currentComments++;
    document.getElementById(`commentCounter${blogNumber}`).innerText = currentComments;
    localStorage.setItem(`commentCounter${blogNumber}`, currentComments.toString());
}

function showContent(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleCommentForm(blogNumber) {
    const commentForm = document.getElementById(`commentForm${blogNumber}`);
    commentForm.classList.toggle('hidden');
}

function addComment(blogNumber, event) {
    event.preventDefault();
    const commentInput = document.getElementById(`commentForm${blogNumber}`).querySelector('input');
    const commentList = document.getElementById(`commentList${blogNumber}`);
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = '';
    const comments = JSON.parse(localStorage.getItem(`comments${blogNumber}`)) || [];
    comments.push(newComment.textContent);
    localStorage.setItem(`comments${blogNumber}`, JSON.stringify(comments));
    let currentComments = localStorage.getItem(`commentCounter${blogNumber}`) || 0;
    currentComments++;
    document.getElementById(`commentCounter${blogNumber}`).innerText = currentComments;
    localStorage.setItem(`commentCounter${blogNumber}`, currentComments.toString());
}

function retrieveLikes() {
    for (let i = 1; i <= 2; i++) {
        let currentLikes = localStorage.getItem(`likeCounter${i}`) || 0;
        document.getElementById(`likeCounter${i}`).innerText = currentLikes;
    }
}

function retrieveComments() {
    for (let i = 1; i <= 2; i++) {
        const comments = JSON.parse(localStorage.getItem(`comments${i}`)) || [];
        const commentList = document.getElementById(`commentList${i}`);
        comments.forEach(comment => {
            const newComment = document.createElement('li');
            newComment.textContent = comment;
            commentList.appendChild(newComment);
        });
        let currentComments = comments.length;
        document.getElementById(`commentCounter${i}`).innerText = currentComments;
        localStorage.setItem(`commentCounter${i}`, currentComments.toString());
    }
}

window.onload = function () {
    retrieveLikes();
    retrieveComments();
};