document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const resultado = `
        <h2>Resultado:</h2>
        <p>Carne bovina: ${carne / 1000} kg</p>
        <p>Frango: ${frango / 1000} kg</p>
        <p>Linguiça: ${linguica / 1000} kg</p>
        <p>Refrigerante: ${refrigerante / 1000} L</p>
        <p>Cerveja: ${cerveja / 1000} L</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});
