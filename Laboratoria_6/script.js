document.addEventListener('DOMContentLoaded', function() {
    const kulka = document.getElementById('kulka');
    const dziura = document.getElementById('dziura');
    const gra = document.getElementById('gra');
    let startTime;
    let rekordy = [];

    gra.addEventListener('mousemove', function(e) {
        const rect = gra.getBoundingClientRect();
        let x = e.clientX - rect.left - kulka.offsetWidth / 2;
        let y = e.clientY - rect.top - kulka.offsetHeight / 2;

        kulka.style.left = x + 'px';
        kulka.style.top = y + 'px';

        if (czyDotknietoDziury(kulka, dziura)) {
            const czas = (new Date().getTime() - startTime) / 1000;
            rekordy.push(czas);
            rekordy.sort((a, b) => a - b);
            aktualizujListeRekordow();
            startTime = new Date().getTime();
        }
    });

    function czyDotknietoDziury(kulka, dziura) {
        const kulkaRect = kulka.getBoundingClientRect();
        const dziuraRect = dziura.getBoundingClientRect();

        return !(
            kulkaRect.right < dziuraRect.left ||
            kulkaRect.left > dziuraRect.right ||
            kulkaRect.bottom < dziuraRect.top ||
            kulkaRect.top > dziuraRect.bottom
        );
    }

    function aktualizujListeRekordow() {
        const lista = document.getElementById('listaRekordow');
        lista.innerHTML = '';
        rekordy.forEach((rekord, index) => {
            const element = document.createElement('li');
            element.textContent = `Rekord ${index + 1}: ${rekord.toFixed(2)} sekund`;
            lista.appendChild(element);
        });
    }

    startTime = new Date().getTime();
});
