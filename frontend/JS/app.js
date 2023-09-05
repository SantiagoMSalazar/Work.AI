document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('api-form');
    const resultadoValor = document.getElementById('resultado-valor');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores de las variables del formulario
        const var1 = parseFloat(document.getElementById('var1').value);
        const var2 = parseFloat(document.getElementById('var2').value);
        const var3 = parseFloat(document.getElementById('var3').value);
        const var4 = parseFloat(document.getElementById('var4').value);
        const var5 = parseFloat(document.getElementById('var5').value);

        // Crear un objeto JSON con los datos
        const data = {
            tipo_establecimiento: var1,
            provincia_desc: var2,
            ciiu_desc: var3,
            personal_ocupado: var4,
            ventas: var5
        };

        // Realizar la solicitud POST a la API
        fetch('http://localhost:55000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar el resultado en la página
            resultadoValor.textContent = `$ ${data.resultado.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
