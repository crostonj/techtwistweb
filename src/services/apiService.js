export const loadUserProfile = async (userId, signal) => {
  const response = await fetch(`http://localhost:8088/api/userprofiles/users/${userId}`, { signal });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const saveUserProfile = async (profileData) => {
  const response = await fetch("http://localhost:8081/profile-service/save-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
