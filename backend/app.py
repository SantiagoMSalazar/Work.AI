import flask
import json
import joblib
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

# modelos entrenados
modelo = joblib.load('./models/LinealRegresion.pkl')
scaler = joblib.load('./models/Scaler.pkl')

@app.route('/predict', methods=['POST'])
def predecir():
    try:
        datos_entrada = flask.request.json
        if len(datos_entrada) != 5:
            return "Se requieren 5 variables de entrada", 400
        datos_entrada = [datos_entrada['tipo_establecimiento'], datos_entrada['provincia_desc'], datos_entrada['ciiu_desc'], datos_entrada['personal_ocupado'], datos_entrada['ventas']]

        # normalizar los datos con el scaler entrenado
        datos_norm= scaler.transform([datos_entrada])
        # Realiza la predicción utilizando el modelo
        resultado = modelo.predict(datos_norm)[0]
        respuesta = {'resultado': resultado}
        return flask.jsonify(respuesta)

    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=55000)