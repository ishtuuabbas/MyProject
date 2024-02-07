const faq = document.querySelectorAll('.faq-div2');
/*FAQ Javascript*/ 
faq.forEach(function(faqItem) {
    const icons = faqItem.querySelector('.icon');
    const answer = faqItem.querySelector('.answer');

    faqItem.addEventListener('click', function() {
        if (icons.classList.contains('active')) {
            icons.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icons.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

/*Text Change javascript */
const btnClick = document.getElementById("hero-btn");
btnClick.addEventListener("click",myfunction);

function myfunction(){
    const headingtext = document.getElementById("heading-clr");
    headingtext.innerText = "Change text";
}
