import { useEffect } from 'react';

export const useShortcut = ({ eventType, eventHandler, triggerKey }) => {
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
