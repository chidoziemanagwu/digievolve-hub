'use client'

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const CountUp = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString('en-US'));
      },
    });

    return controls.stop;
  }, [value, count]);

  return <span>{displayValue}{suffix}</span>;
};

export default CountUp;