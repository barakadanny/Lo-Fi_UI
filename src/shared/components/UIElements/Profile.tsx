import React from "react";

interface ProfileProps {
  imageUrl: string;
  alt: string;
  size: string;
  borderRadius?: string;
  borderColor?: string;
}

const Profile: React.FC<ProfileProps> = ({
  imageUrl,
  alt,
  size,
  borderRadius = "50%",
  borderColor = "transparent",
}) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="object-cover"
      style={{
        width: size,
        height: size,
        borderRadius: borderRadius,
        border: `2px solid ${borderColor}`,
      }}
    />
  );
};

export default Profile;
