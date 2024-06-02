import React from "react";

interface ProfileProps {
  imageUrl: string;
  alt: string;
  size: string;
  borderRadius?: string;
  borderColor?: string;
  className?: string; // Add className prop to the interface
}

const Profile: React.FC<ProfileProps> = ({
  imageUrl,
  alt,
  size,
  borderRadius = "50%",
  borderColor = "transparent",
  className, // Destructure className prop
}) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`object-cover ${className}`} // Concatenate default and additional class names
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
