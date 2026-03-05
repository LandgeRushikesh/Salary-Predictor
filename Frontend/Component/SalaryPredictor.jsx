import { useState } from "react";
import axios from "axios";

function SalaryPredictor() {
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState(null);

  const predictSalary = async () => {
    const res = await axios.post("http://localhost:3000/predict", {
      experience,
    });

    setSalary(res.data.predicted_salary);
  };

  return (
    <div>
      <h2>Salary Predictor</h2>

      <input
        type="number"
        placeholder="Years of Experience"
        onChange={(e) => setExperience(e.target.value)}
      />

      <button onClick={predictSalary}>Predict</button>

      {salary && <h3>Predicted Salary: ₹{salary}</h3>}
    </div>
  );
}

export default SalaryPredictor;
