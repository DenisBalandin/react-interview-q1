import React, { useState } from "react";
import "./index.css"; // Import CSS file for styling

function App() {
  // State variables for name, location, and form data
  const [name, setName] = useState("");
  const [isNameTaken, setIsNameTaken] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [formData, setFormData] = useState([]);

  // Pre-defined location options
  const locations = ["Canada", "USA", "Brazil"];

  // Function to handle name change
  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    // Simulated validation if name is taken
    setIsNameTaken(formData.some((data) => data.name === newName));
  };

  // Function to handle location change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      name: name,
      location: selectedLocation,
    };
    setFormData([...formData, newFormData]);
    // Clear inputs
    setName("");
    setSelectedLocation("");
  };

  // Function to handle clearing all added names
  const handleClearAll = () => {
    setFormData([]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group-error">
          {isNameTaken && (
            <p className="error-message">This name has already been taken</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            required
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleClearAll}>
            Clear
          </button>{" "}
          <button type="submit">Add</button> {/* Button to clear added names */}
        </div>
      </form>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
