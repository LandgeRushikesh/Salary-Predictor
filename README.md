```
salary-predictor
│
├── Backend
│   ├── server.js
│   ├── package.json
│   └── node_modules
│
├── Frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── assets
│   │
│   ├── Component
│   │   └── SalaryPredictor.jsx
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── ML
│   ├── ml_api.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```


```mermaid
flowchart LR

A[React Frontend UI] -->|POST /predict| B[Express Backend API]
B -->|POST http://localhost:5000/predict| C[Flask ML API]
C --> D[ML Model - Linear Regression]
D --> E[Prediction Result]
E --> B
B --> F[React UI Displays Salary]
```
