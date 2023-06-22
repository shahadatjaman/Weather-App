import { useEffect, useState } from "react";

interface UseWindowWidthProps {
  width: number;
}

export const useWindowWidth = ({ width }: UseWindowWidthProps): boolean => {
  const [isMatched, setIsMatched] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (width > window.innerWidth || window.innerWidth < 328) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial width on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMatched;
};
