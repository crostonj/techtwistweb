export const loadUserProfile = async (userId, signal) => {
  const response = await fetch(
    `https://userprofile.purplepond-4096c986.westus2.azurecontainerapps.io/userprofiles/users/${userId}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const saveUserProfile = async (profileData) => {
  const response = await fetch(
    "https://userprofile.purplepond-4096c986.westus2.azurecontainerapps.io/userprofiles/updateProfile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
