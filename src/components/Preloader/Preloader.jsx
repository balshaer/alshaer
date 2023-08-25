import React, { useState, useEffect } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set maximum duration to 1 second

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="Preloader-container">
          <div className="Preloader animate__fadeIn animate__animated">
            <div className="loader"></div>
          </div>
        </div>
      )}
    </div>
  );
}
