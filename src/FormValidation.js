import React, { useState } from "react";
import './App.css'; // Import your CSS for styling the progress bar

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // Add more form fields as needed
  });

  const [completion, setCompletion] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Calculate completion based on the number of fields filled
    const filledFields = Object.values({ ...formData, [name]: value }).filter((val) => val !== "").length;
    const totalFields = Object.keys(formData).length;
    const percentage = (filledFields / totalFields) * 100;
    setCompletion(percentage);
  };

  const isFormValid = () => {
    // Implement your validation logic here
    // For instance, check if all required fields are filled
    return formData.name !== "" && formData.email !== "" && formData.password !== "";
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        {/* Add more input fields as needed */}
      </form>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${completion}%` }}></div>
      </div>

      <p>{isFormValid() ? "Form is complete!" : "Form is incomplete"}</p>
    </div>
  );
};

export default FormValidation;
