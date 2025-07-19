import { useState, useEffect } from "react";

export function useTypingAnimation(
  text: string,
  speed: number,
  start: boolean = true
) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayText;
}
