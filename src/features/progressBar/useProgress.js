import { useState, useEffect } from "react";

const useProgress = (isPlaying, duration) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    let startTime = null;
    let id = requestAnimationFrame(req);

    function req() {
      const now = performance.now();
      if (!startTime) startTime = now;
      let lapse = now - startTime;
      setProgress(lapse);
      if (lapse < duration) {
        id = requestAnimationFrame(req);
      }
    }
    return () => cancelAnimationFrame(id);
  }, [isPlaying, duration]);

  return !isPlaying ? 0 : progress / duration;
};

export default useProgress;
