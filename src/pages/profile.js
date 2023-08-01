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

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

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
      const res = await fetch("/api/updateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      // Handle success or error response
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
              <Image
                src={session.user.image}
                alt="Profile Image"
                className="object-cover w-full h-full rounded-full"
                height={300}
                width={300}
              />
            </div>
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {session.user.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {session.user.email}
            </p>
            <form onSubmit={handleFormSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block mb-1 font-semibold">
                  Select Country:
                </label>
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(selectedOption) =>
                    setSelectedCountry(selectedOption)
                  }
                  isSearchable={true}
                  placeholder="Select a country..."
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Street:</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">City:</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Postcode:</label>
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </form>
          </>
        ) : (
          <p className="text-center">Please sign in to view your profile.</p>
        )}
      </div>
    </>
  );
};

export default Profile;
