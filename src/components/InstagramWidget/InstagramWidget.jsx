import React, { useEffect } from "react";

function InstagramWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="col-12">
      <div
        className="embedsocial-hashtag"
        data-ref="76934bb2a6f6dddbad8fd98f3d0811fdeda65b51"
      >
        <a
          className="feed-powered-by-es"
          href="https://embedsocial.com/social-media-aggregator/"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default InstagramWidget;
