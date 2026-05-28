document.querySelectorAll('.ingredient-title').forEach(title => {
    title.addEventListener('click', () => {
        const item = title.closest('.ingredient-item');
        item.classList.toggle('active');
    });
});
