import { useEffect } from 'react';

export const useShortcut = ({ eventType, triggerKey, eventHandler }) => {
  useEffect(() => {
    function handleEvent(event) {
      if (event.code === triggerKey) {
        eventHandler();
      }
    }
    document.addEventListener(eventType, handleEvent);
    return function() {
      document.removeEventListener(eventType, handleEvent);
    }
  });
};
