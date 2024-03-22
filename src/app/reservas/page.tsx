'use client'

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function ReservasPage() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  )
} 
  const spring = {
    type: "spring",
    stiffness: 700, /*velocidad*/
    damping: 40 /* rebote */
  };