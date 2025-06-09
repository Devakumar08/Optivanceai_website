import React, { useEffect } from "react";

// Calendly embed script and styles are loaded once
const useCalendlyScript = () => {
  useEffect(() => {
    // Add CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
};

const CalendlyButton: React.FC = () => {
  useCalendlyScript();

  const handleClick = () => {
    // @ts-ignore
    if (window.Calendly) {
      // Hide GDPR and event details for a cleaner look
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/optivance-devakumar?hide_gdpr_banner=1&hide_event_type_details=1",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 rounded-lg font-bold shadow-lg transition-colors"
      style={{
        background: "#00E0FF",
        color: "#181F2A",
        border: "none",
        fontSize: "1rem",
        borderRadius: "999px",
        fontWeight: 700,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        cursor: "pointer",
        position: "fixed",
        bottom: "32px",
        left: "32px", // Changed from right: "32px" to left: "32px"
        zIndex: 1000,
      }}
    >
      Schedule a Meeting
    </button>
  );
};

export default CalendlyButton;
