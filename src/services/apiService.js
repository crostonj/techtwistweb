const site = "http://10.0.0.201";

export const loadUserProfile = async (userId, signal) => {
  const response = await fetch(
    `${site}/profile/name/${userId}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const saveUserProfile = async (profileData) => {
  const response = await fetch(
    `${site}/profile/updateProfile`,
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

export const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${site}/product/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();

  } catch (error) {

  }
};