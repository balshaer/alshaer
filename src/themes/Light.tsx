import React from 'react';

const LightMode: React.FC = () => {
  return (
    <style>
      {`
        :root {
          --background: #16161a;
          --headline: #fffffe;
          --paragraph: #94a1b2;
          --button: #7f5af0;
          --button-text: #fffffe;
          --illustration-stroke: #010101;
          --main: #fffffe;
          --highlight: #7f5af0;
          --secondary: #72757e;
          --tertiary: #2cb67d;
          --highlight-blue: #4691ea;
          --card-background: #242629;
          --link-color: #edf0f1;


        }
      `}
    </style>
  );
};

export default LightMode;
