document.getElementById('index-title').addEventListener('click', () => {
    window.location.href = 'index.html';
    });

document.getElementById('save-btn').addEventListener('click', () => {
    const seeReview = localStorage.getItem('review');
   document.getElementById('save-review').textContent = seeReview ? seeReview : 'Отзывов нет';
});

document.getElementById('delete-review').addEventListener('click', () => {
    localStorage.removeItem('review');
    document.getElementById('save-review').textContent = 'Отзывы удалены';
});



//Не получилось сделать отображение названия продукта и соответственно не сделала при клике 
// название отображать список всех отзывов по этому продукту.