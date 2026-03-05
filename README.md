```mermaid
flowchart LR

A[React Frontend UI] -->|POST /predict| B[Express Backend API]
B -->|POST http://localhost:5000/predict| C[Flask ML API]
C --> D[ML Model - Linear Regression]
D --> E[Prediction Result]
E --> B
B --> F[React UI Displays Salary]
```
