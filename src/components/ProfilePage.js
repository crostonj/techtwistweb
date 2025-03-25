import React from "react";

function ProfilePage() {
  // Replace this with actual user data fetching or props
  const user = {
    name: "John Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    bio: "A passionate developer.",
    // You can add more profile information here
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Profile</h1>
      <div style={{ marginBottom: "20px" }}>
        <strong>Name:</strong> {user.name}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <strong>Username:</strong> {user.username}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Bio:</strong> {user.bio}
      </div>
      {/* You can add more profile details or actions here */}
    </div>
  );
}

export default ProfilePage;
