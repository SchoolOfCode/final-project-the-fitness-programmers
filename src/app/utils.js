//Get user data from the database
export default async function getData(id) {
  const response = await fetch(
    `https://final-project-additional-repo-the.onrender.com/api/user/${id}`
  );
  const data = await response.json();
  return data;
}

//Use it on Frontend
// useEffect(() => {
//     async function fetchUserData() {
//       const userData = await getData(1);
//       console.log(userData);
//     }

//     fetchUserData();
//   }, []);

//Update user data in the database
export const updateUser = async (id, updatedData) => {
  const response = await fetch(`/api/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  console.log("Updated User:", data);
};

//Update user example usage
//updateUser(1, { currentweight: decimal, targetweight: decimal });

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

//Update target weight in the user data
export const updateTargetWeight = async (id, updatedData) => {
  const response = await fetch(`/api/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  console.log("Updated User:", data);
};
