import React from "react";

const LightMode: React.FC = () => {
  return (
    <style>
      {`
        :root {
          --background: #171923;
          --headline: #F7F9FC;
          --paragraph: #a0aec0;
          --button: #166BFF;
          --button-text: #ffffff;
          --card-background: #171923;
          --link-color: #2997ff;
          --nav-item: #a0aec0;

      


        }
      `}
    </style>
  );
};

export default LightMode;
