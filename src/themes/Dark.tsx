import React from 'react';

const DarkMode: React.FC = () => {
  return (
    <style>
      {`
        :root {
          --background: #edf0f1;            
          --headline: #000000;              
          --paragraph: #717171;             
          --button: #4fc4cf;                
          --button-text: #181818;           
          --illustration-stroke: #181818;   
          --main: #000000;                 
          --highlight: #4fc4cf;           
          --secondary: #994ff3;            
          --tertiary: #fbdd74; 
          --highlight-blue: #4691ea;
          --card-background: #f2f4f6;
    --link-color: #717171;
     
        }
      `}
    </style>
  );
};

export default DarkMode;
