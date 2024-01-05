import React from 'react';

const DarkMode: React.FC = () => {
  return (
    <style>
      {`
        :root {
          --background: #fffffe;            
          --headline: #09090b;              
          --paragraph: #71717a;             
          --button: #4fc4cf;                
          --button-text: #181818;           
          --illustration-stroke: #181818;   
          --main: #f2eef5;                 
          --highlight: #4fc4cf;           
          --secondary: #994ff3;            
          --tertiary: #fbdd74; 
          --highlight-blue: #4691ea;
          --card-background: #f2f4f6;
    --link-color: #000;
     
        }
      `}
    </style>
  );
};

export default DarkMode;
