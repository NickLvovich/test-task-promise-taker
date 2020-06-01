import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { motion } from "framer-motion";

import json from "./data/data.json";

import "./timer.css";

function App() {
  //obj, array methods
  const jsonArr = _.values(json);
  const base = json.base;
  const timestamp = json.timestamp;
  const valid = json.valid;
  const abjArr = Object.entries(jsonArr[3]);
  //animations
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        className="app"
        style={{ position: "relative", padding: 10 }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <h2>Currency: {base}</h2>
        <h3>Valid: {valid === true ? "yes" : "no"}</h3>
        <h4>timestamp is: {timestamp}</h4>
        {abjArr.map(([key, value]) => (
          <motion.div
            className="currency"
            animate={{ x: 20 }}
            transition={{ duration: 1 }}
          >
            <ul>
              <li>
                {key}: {value}
              </li>
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default App;
