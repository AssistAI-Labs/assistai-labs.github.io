import React, { useEffect } from 'react';
import './style.css'

const Chatbot = () => {
  useEffect(() => {
    const loadScript = () => {
      const { document } = window;
      if (document) {
        const div = document.createElement('div');
        div.id = 'aichatbot';
        document.body.appendChild(div);
        window.chatbotConfig = [
          'E4ACC61E-BACE-415C-8BFB-708DC7449A42', // Your bot ID
          'onboarding_bot', // Bot name or configuration
          {
            apiHost: 'https://api-cf-ap-8.sendbird.com',
          },
        ];
        const script = document.createElement('script');
        script.defer = true;
        script.type = 'module';
        script.src = 'https://aichatbot.sendbird.com/index.js';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    loadScript();
  }, []);

  return null; // Or you can return a placeholder if needed
};

export default Chatbot;
