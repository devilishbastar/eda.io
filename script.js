document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('menu');
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    const returnBtn1 = document.getElementById("returnBtn_dinner");
    const returnBtn2 = document.getElementById("returnBtn_evenning");
    const returnBtn3 = document.getElementById("returnBtn_salad");

    const dinner = document.getElementById("dinner_casino");
    const evenning = document.getElementById("evenning_casino");
    const salad = document.getElementById("salad_casino");

    document.querySelectorAll('.spinBtn').forEach(button => {
        button.addEventListener('click', () => {
            const roulette = button.closest('div').parentElement.querySelector('.roulette');
    
            const items = roulette.querySelectorAll('.item');
            const itemWidth = items[0].offsetWidth;
            const totalWidth = itemWidth * items.length;
    
            const randomIndex = Math.floor(Math.random() * items.length);
            const offset = -randomIndex * itemWidth;
    
            roulette.style.transition = 'transform 2s ease-out';
            roulette.style.transform = `translateX(${offset}px)`;
        });
    });

    
    button1.addEventListener('click', () => {
        menu.classList.add('invis');
        menu.style.position = 'absolute';
        menu.style.right = '1000px';
        dinner.classList.add('show');
    });

    button2.addEventListener('click', () => {
        menu.classList.add('invis');
        menu.style.position = 'absolute';
        menu.style.right = '1000px';

        dinner.classList.add('invis');
        dinner.style.position = 'absolute';
        dinner.style.right = '1000px';

        evenning.classList.add('show');
    });

    button3.addEventListener('click', () => {
        menu.classList.add('invis');
        menu.style.position = 'absolute';
        menu.style.right = '1000px';

        dinner.classList.add('invis');
        dinner.style.position = 'absolute';
        dinner.style.right = '1000px';

        evenning.classList.add('invis');
        evenning.style.position = 'absolute';
        evenning.style.right = '1000px';

        salad.classList.add('show');
    });

    returnBtn1.addEventListener('click', () => {
        dinner.classList.remove('show');
        dinner.style.position = '';
        dinner.style.right = '';
        dinner.style.left = '';
        menu.classList.remove('invis');
        menu.style.position = '';
        menu.style.right = '';
        menu.style.left = '';       
    });

    returnBtn2.addEventListener('click', () => {
        evenning.classList.remove('show');
        evenning.style.position = '';
        evenning.style.right = '';
        evenning.style.left = '';
        menu.classList.remove('invis');
        menu.style.position = '';
        menu.style.right = '';
        menu.style.left = '';       
    });

    returnBtn3.addEventListener('click', () => {
        salad.classList.remove('show');
        salad.style.position = '';
        salad.style.right = '';
        salad.style.left = '';
        menu.classList.remove('invis');
        menu.style.position = '';
        menu.style.right = '';
        menu.style.left = '';       
    });
});
