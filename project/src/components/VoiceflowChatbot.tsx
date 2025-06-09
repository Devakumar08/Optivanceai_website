import React, { useEffect } from "react";

const VoiceflowChatbot: React.FC = () => {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (document.getElementById("voiceflow-chatbot-script")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-chatbot-script";
    script.type = "text/javascript";
    script.innerHTML = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '6846a356947eed9a2b1671d8' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);

    // Optional: Cleanup if component unmounts
    return () => {
      script.remove();
    };
  }, []);

  return null; // This component does not render anything visible
};

export default VoiceflowChatbot;
