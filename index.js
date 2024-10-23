document.getElementById('btn').addEventListener('click', () => {
    const reviewProduct = document.getElementById('review-product').value;
    localStorage.setItem('review', reviewProduct);
});

document.getElementById('review-title').addEventListener('click', () => {
    window.location.href = 'review.html';
    });



