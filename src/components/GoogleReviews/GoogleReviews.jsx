import React, { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.setAttribute("data-use-service-core", "");
      script.defer = true;

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      className="elfsight-app-19ea3b4f-d7c7-492a-9c33-aec617965068"
      data-elfsight-app-lazy
    ></div>
  );
};

export default GoogleReviews;
