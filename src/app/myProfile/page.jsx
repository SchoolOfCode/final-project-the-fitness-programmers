"use client";
import { useEffect, useState } from "react";
import { user } from "../data";
import Image from "next/image";
import BottomNav from "../components/BottomNav";
import Nav from "../components/Nav";
import getData, { updateUserData } from "../utils";

export default function MyProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // New state to handle editing mode

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    height: "",
    currentweight: "",
    targetweight: "",
    bio: "",
  });

  //Use it on Frontend
  useEffect(() => {
    async function fetchUserData() {
      const userData = await getData(1);
      setData(userData);
      setLoading(false); // Set loading to false once data is fetched
      setFormData({
        name: userData.user.name,
        email: userData.user.email,
        height: userData.user.height,
        currentweight: userData.user.currentweight,
        targetweight: userData.user.targetweight,
        bio: userData.user.bio,
      });
    }

    fetchUserData();
  }, []);

  console.log(data);
  // Render this while data is loading
  if (loading) {
    return <div className="spin"></div>;
  }

  //Destructure safely
  const { user } = data || {};
  const {
    name,
    email,
    height,
    bio,
    startweight,
    currentweight,
    targetweight,
    targetcalories,
    achievedcalories,
  } = user || {};

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await updateUserData(1, formData);
    // Here you'd typically send formData to the backend to save the changes
    console.log("Saved Data:", formData);
    setIsEditing(false); // Exit editing mode after saving
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-main p-4 space-y-6  mx-auto font-sans w-full pb-14">
        <h1 className="text-3xl font-bold text-primaryColour text-center mb-4">
          My Profile
        </h1>

        {/* Profile Section */}
        <div className="rounded-lg  p-6 space-y-6 ">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              className="w-32 h-32 rounded-full border-2 bg-white"
              src={"/images/avatar.jpg"}
              alt=""
              width={150}
              height={150}
            />
          </div>

          {/* Personal Details */}
          <h2 className="text-2xl font-semibold text-primaryColour text-center">
            Profile
          </h2>

          <button
            onClick={toggleEdit}
            className="bg-primaryColour text-main px-3 py-2 rounded"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>

          <div className="grid grid-cols-2 gap-4">
            <span className="font-medium text-primaryColour">
              Name:
            </span>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-primaryColour">{name}</span>
            )}

            <span className="font-medium text-primaryColour">
              Email:
            </span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-primaryColour">{email}</span>
            )}

            <span className="font-medium text-primaryColour">
              Height:
            </span>
            {isEditing ? (
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-primaryColour">
                {formData.height}m
              </span>
            )}

            <span className="font-medium text-primaryColour">
              Current Weight:
            </span>
            {isEditing ? (
              <input
                type="number"
                name="currentweight"
                value={formData.currentweight}
                onChange={handleInputChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-primaryColour">
                {formData.currentweight}kg
              </span>
            )}

            <span className="font-medium text-primaryColour">
              Goal Weight:
            </span>
            {isEditing ? (
              <input
                type="number"
                name="targetweight"
                value={formData.targetweight}
                onChange={handleInputChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-primaryColour">
                {formData.targetweight}kg
              </span>
            )}

            <span className="font-medium text-primaryColour">
              Joined:
            </span>
            <span className="text-primaryColour">Today</span>
          </div>

          {/* Bio Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primaryColour">
              Bio
            </h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="text-primaryColour">{formData.bio}</p>
            )}
          </div>
          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-primaryColour text-main px-3 py-2 mt-4 rounded"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
