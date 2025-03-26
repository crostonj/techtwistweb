import React, { useState, useEffect } from "react";
import "./ProfilePage.css";

const usStates = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" },
];

function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [saveStatus, setSaveStatus] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state
  const [loadError, setLoadError] = useState(null); // To track loading errors

  useEffect(() => {
    console.log("ProfilePage useEffect is running"); // Added console log
    const loadProfile = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        const response = await fetch(
          "http://127.0.0.1:8088/api/userprofiles/users/user-123"
        ); // Replace with your actual load profile endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setEmail(data.email || "");
        setAddressLine1(data.addressLine1 || "");
        setAddressLine2(data.addressLine2 || "");
        setCity(data.city || "");
        setState(data.state || ""); // Assuming the API returns the state abbreviation
        setZipCode(data.zipCode || "");
        setCountry(data.country || "");
        setLoading(false);
      } catch (error) {
        console.error("Error loading profile:", error);
        setLoadError(error);
        setLoading(false);
      }
    };

    loadProfile();
  }, []); // Empty dependency array means this runs once after the initial render

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaveStatus("loading");

    const profileData = {
      firstName,
      lastName,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
    };

    try {
      const response = await fetch(
        "http://localhost:8081/profile-service/save-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Profile saved successfully:", responseData);
        setSaveStatus("success");
        alert("Profile saved successfully!");
      } else {
        console.error("Error saving profile:", response.status);
        setSaveStatus("error");
        alert("Error saving profile.");
      }
    } catch (error) {
      console.error("There was an error saving the profile:", error);
      setSaveStatus("error");
      alert("There was an error saving the profile.");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", color: "white", textAlign: "center" }}>
        Loading profile data...
      </div>
    );
  }

  if (loadError) {
    return (
      <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
        Error loading profile: {loadError.message}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Profile Information</h1>
      {saveStatus === "loading" && <p>Saving profile...</p>}
      {saveStatus === "success" && (
        <p style={{ color: "green" }}>Profile saved successfully!</p>
      )}
      {saveStatus === "error" && (
        <p style={{ color: "red" }}>Error saving profile.</p>
      )}
      <form className="profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="full-width">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="full-width">
          <label htmlFor="addressLine1" className="form-label">
            Mailing Address Line 1:
          </label>
          <input
            type="text"
            id="addressLine1"
            className="form-input"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="addressLine2" className="form-label">
            Mailing Address Line 2 (Optional):
          </label>
          <input
            type="text"
            id="addressLine2"
            className="form-input"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            className="form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="state" className="form-label">
            State:
          </label>
          <select
            id="state"
            className="form-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select a State</option>
            {usStates.map((usState) => (
              <option key={usState.abbreviation} value={usState.abbreviation}>
                {usState.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zipCode" className="form-label">
            Zip/Postal Code:
          </label>
          <input
            type="text"
            id="zipCode"
            className="form-input"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className="full-width">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            id="country"
            className="form-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
