// NOME: MICHEL TORRES SOARES
// RA:   26110233

const form = document.getElementById('pForm');
const resultsDiv = document.getElementById('results');

const formatNumber = (val) => {
    return val.toLocaleString('pt-BR');
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());

    const n1 = parseFloat(dataObj["n1-val"]);
    const n2 = parseFloat(dataObj["n2-val"]);

    const sum = n1 + n2;

    resultsDiv.innerHTML = `
        <div class="result"><span class="rtxt">Resultado:</span> <span class="rint">${formatNumber(sum)}</span></div>
    `;
});
