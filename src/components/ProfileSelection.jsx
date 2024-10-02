import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSelection.css";

const profiles = [
  { id: 1, name: "Profile 1" },
  { id: 2, name: "Profile 2" },
  { id: 3, name: "Profile 3" },
  { id: 4, name: "Profile 4" },
  { id: 5, name: "Profile 5" },
  { id: 6, name: "Profile 6" },
  { id: 7, name: "Profile 7" },
  { id: 8, name: "Profile 8" },
  { id: 9, name: "Profile 9" },
  { id: 10, name: "Profile 10" },
  { id: 11, name: "Profile 11" },
  { id: 12, name: "Profile 12" },
  { id: 13, name: "Profile 13" },
  { id: 14, name: "Profile 14" },
  { id: 15, name: "Profile 15" },
  { id: 16, name: "Profile 16" },
  { id: 17, name: "Profile 17" },
  { id: 18, name: "Profile 18" },
  { id: 19, name: "Profile 19" },
  // Add more profiles as needed
];

const ProfileSelection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProfileSelect = (profile) => {
    // Navigate to GenerateUpload when a profile is selected
    navigate("/GenerateUpload", { state: { selectedProfile: profile } });
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-container">
      <header className="header">
        <h1>QGEN</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </header>
      <div className="profile-grid">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-item"
            onClick={() => handleProfileSelect(profile)}
          >
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
