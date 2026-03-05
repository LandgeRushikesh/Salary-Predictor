from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)

# Dummy dataset
X = np.array([[1],[2],[3],[4],[5]])
y = np.array([20000,30000,40000,50000,60000])

# Train model
model = LinearRegression()
model.fit(X, y)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    experience = float(data["experience"])

    prediction = model.predict([[experience]])

    return jsonify({
        "predicted_salary": int(prediction[0])
    })

if __name__ == "__main__":
    app.run(port=5000)