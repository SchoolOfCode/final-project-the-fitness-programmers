//Get user data from the database
export default async function getData(id) {
  const response = await fetch(
    `https://final-project-additional-repo-the.onrender.com/api/user/${id}`
  );
  const data = await response.json();
  return data;
}

//Update user data in the database
export const updateUserData = async (userId, updatedData) => {
  const response = await fetch(`/api/user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const updatedUser = await response.json();
  console.log("Updated user:", updatedUser);
};

//Update user example usage
//updateUserData(1, { currentweight: decimal, targetweight: decimal });

//Add a new workout to the user data
export const addWorkout = async (id, updatedData) => {
  const response = await fetch(`/api/user/workouts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  console.log("Updated User:", data);
};

//Add workout example usage
//addWorkout(1, { type: string, duration: decimal });
