// campos

var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var elTbody = document.querySelector('table tbody');

document
    .querySelector('.form')
    .addEventListener('submit', function(event) {

        event.preventDefault();

        var elTr = document.createElement('tr');

        campos
            .forEach(function(campo) {
                var elTd = document.createElement('td');
                elTd.textContent = campo.value;
                elTr.appendChild(elTd);
            });

        var elTdVolume = document.createElement('td');
        elTdVolume.textContent = campos[1].value * campos[2].value;

        elTr.appendChild(elTdVolume);

        elTbody.appendChild(elTr);

        campos[0].value = '';
        campos[1].value = 1;
        campos[2].value = 0;

        campos[0].focus();
    })