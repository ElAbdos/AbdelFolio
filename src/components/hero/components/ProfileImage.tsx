import React from 'react';

interface ProfileImageProps {
  imagePath: string;
  name: string;
}

// Photo de profil
export const ProfileImage: React.FC<ProfileImageProps> = ({ imagePath, name }) => {
  return (
    <div className="profile-box">
      <div className="profile-placeholder">
        <img className="profile-image" src={imagePath} alt={name} />
      </div>
    </div>
  );
};
