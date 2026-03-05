```
salary-predictor
│
├── Backend              # Express API server
│   └── server.js
│
├── Frontend             # React UI
│   └── SalaryPredictor.jsx
│
├── ML                   # Machine Learning service
│   └── ml_api.py
│
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
