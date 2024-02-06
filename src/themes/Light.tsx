import React from "react";

const DarkMode: React.FC = () => {
  return (
    <style>
      {`
        :root {
          --background: #ffffff;
          --headline: #2D3748;
          --paragraph: #5F718C;
          --button: #166BFF;
          --button-text: #ffffff;
          --card-background: #ffffff;
          --link-color: 166BFF;
          --nav-item: #47546b
     
        }
      `}
    </style>
  );
};

export default DarkMode;
