import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { loadUserProfile, saveUserProfile } from "../../services/apiService"; // Import utility functions

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
  const userId = "user-123"; // Define the user ID as a variable
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
  const [alertMessage, setAlertMessage] = useState(null); // To store alert messages
  const [alertSeverity, setAlertSeverity] = useState(null); // To store alert severity

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController
    const signal = controller.signal;

    const loadProfile = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        const data = await loadUserProfile(userId, signal); // Pass signal to API call
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
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error loading profile:", error);
          setLoadError(error);
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      controller.abort(); // Abort fetch on unmount
    };
  }, [userId]); // Dependency array includes userId

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
      await saveUserProfile(profileData); // Use utility function
      setSaveStatus("success");
      setAlertMessage("Profile saved successfully!");
      setAlertSeverity("success");
    } catch (error) {
      console.error("There was an error saving the profile:", error);
      setSaveStatus("error");
      setAlertMessage("There was an error saving the profile.");
      setAlertSeverity("error");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <CircularProgress />
        <p>Loading profile data...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Alert severity="error">Error loading profile: {loadError.message}</Alert>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", position: "relative", zIndex: 1 }}>
      <h1>Profile Information</h1>
      {saveStatus === "loading" && <Alert severity="info">Saving profile...</Alert>}
      {alertMessage && <Alert severity={alertSeverity}>{alertMessage}</Alert>}
      <form className="profile-form" onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mailing Address Line 1"
          variant="outlined"
          fullWidth
          margin="normal"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
        />
        <TextField
          label="Mailing Address Line 2 (Optional)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          margin="normal"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            value={state || ""} // Ensure value is never undefined
            onChange={(e) => setState(e.target.value)}
          >
            <MenuItem value="">
              <em>Select a State</em>
            </MenuItem>
            {usStates.map((usState) => (
              <MenuItem key={usState.abbreviation} value={usState.abbreviation}>
                {usState.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Zip/Postal Code"
          variant="outlined"
          fullWidth
          margin="normal"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <TextField
          label="Country"
          variant="outlined"
          fullWidth
          margin="normal"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default ProfilePage;
