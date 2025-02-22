// src/components/CountUp.tsx
import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
}

const CountUp = ({ value, suffix = "" }: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const count = useMotionValue(0);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toString());
      },
    });

    return animation.stop;
  }, [count, value]);

  return <span>{displayValue}{suffix}</span>;
};

export default CountUp;