import { useState } from "react";
import { useSession } from "next-auth/react";
import Select from "react-select";
import Image from "next/image";
import Header from "../../components/Header";

const Profile = () => {
  const { data: session } = useSession();

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "eu", label: "Germany" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    // Add more countries as needed
  ];
  const [profileImage, setProfileImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: session.user.name,
      email: session.user.email,
      country: selectedCountry?.value, // Use optional chaining to avoid errors if no country is selected
      street,
      city,
      postcode,
    };
    try {
      const formData = new FormData();
      if (profileImage) {
        formData.append("profileImage", profileImage); // Add the profile image to the FormData if it's selected
      }
      formData.append("userData", JSON.stringify(data)); // Add the rest of the data as JSON string

      const res = await fetch("/api/updateUser", {
        method: "POST",
        body: formData, // Send the FormData instead of JSON data
      });
      const response = await res.json();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        {session ? (
          <>
            <div className="w-24 h-24 rounded-full mx-auto mb-4">
              {profileImage ? (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Image"
                  className="object-cover w-full h-full rounded-full"
                  height={300}
                  width={300}
                />
              ) : (
                <Image
                  src={session.user.image}
                  alt="Profile Image"
                  className="object-cover w-full h-full rounded-full"
                  height={300}
                  width={300}
                />
              )}
            </div>
            <div className="flex justify-center mb-4">
              <label className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {session.user.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {session.user.email}
            </p>
            <form onSubmit={handleFormSubmit} className="mt-6"></form>
          </>
        ) : (
          <p className="text-center">Please sign in to view your profile.</p>
        )}
      </div>
    </>
  );
};

export default Profile;
