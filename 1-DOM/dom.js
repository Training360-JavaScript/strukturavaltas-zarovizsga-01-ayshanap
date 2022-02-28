function manipulateDom() {
    // 
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach( item => item.style.border = 'blue');
    quotes.forEach( item => item.style.background = 'lightblue');
    quotes.forEach( item => item.style.fontStyle = 'italic');
};

export { manipulateDom };