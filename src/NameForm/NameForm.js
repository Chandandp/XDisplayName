import React, { useState } from "react";

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setError("");
    } else {
      setError("Please fill in both fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Full Name Display</h1>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default NameForm;
