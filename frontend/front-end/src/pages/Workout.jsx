import { useState } from "react";
import "../styles/workout.css"; // Import CSS file

const Workout = () => {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [hypertension, setHypertension] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [bmi, setBmi] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [equipment, setEquipment] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sex,
        age,
        height,
        weight,
        hypertension,
        diabetes,
        bmi,
        fitnessLevel,
        goal,
        equipment,
      }),
    });

    const data = await response.json();
    setRecommendation(data.recommendation);
  };

  return (
    <>
      <div className="bg-wrapper">
        <div className="bg-image"></div>
      </div>
      <div className="workout-container">
        <h2>Get Your Workout Plan</h2>
        <form onSubmit={handleSubmit} className="workout-form">
          <label>Sex</label>
          <select onChange={(e) => setSex(e.target.value)}>
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>

          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            onChange={(e) => setHeight(e.target.value)}
          />

          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Hypertension</label>
          <select onChange={(e) => setHypertension(e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Diabetes</label>
          <select onChange={(e) => setDiabetes(e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>BMI</label>
          <input
            type="number"
            step="0.1"
            placeholder="Enter your BMI"
            onChange={(e) => setBmi(e.target.value)}
          />

          <label>Fitness Level</label>
          <select onChange={(e) => setFitnessLevel(e.target.value)}>
            <option value="">Select</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <label>Goal</label>
          <select onChange={(e) => setGoal(e.target.value)}>
            <option value="">Select</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="endurance">Endurance</option>
          </select>

          <label>Equipment Available</label>
          <select onChange={(e) => setEquipment(e.target.value)}>
            <option value="">Select</option>
            <option value="bodyweight">Bodyweight</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="gym_machines">Gym Machines</option>
          </select>

          <button type="submit">Get Recommendation</button>
        </form>

        {recommendation && <h3>Recommended Workout: {recommendation}</h3>}
      </div>
    </>
  );
};

export default Workout;
