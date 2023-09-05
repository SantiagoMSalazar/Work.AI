import flask
import json
import joblib
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

# Carga el modelo .pkl
modelo = joblib.load('./trained model/linealM.pkl')

@app.route('/predict', methods=['POST'])
def predecir():
    try:
        # Recibe los datos del JSON de entrada
        datos_entrada = flask.request.json

        # Asegúrate de que se proporcionen las 5 variables
        if len(datos_entrada) != 5:
            return "Se requieren 5 variables de entrada", 400

        # Convierte los datos en un formato adecuado para el modelo
        datos_entrada = [datos_entrada['tipo_establecimiento'], datos_entrada['provincia_desc'], datos_entrada['ciiu_desc'], datos_entrada['personal_ocupado'], datos_entrada['ventas']]

        # Realiza la predicción utilizando el modelo
        resultado = modelo.predict([datos_entrada])[0]

        # Crea una respuesta JSON con el resultado
        respuesta = {'resultado': resultado}

        # Devuelve la respuesta en formato JSON
        return flask.jsonify(respuesta)

    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=55000)