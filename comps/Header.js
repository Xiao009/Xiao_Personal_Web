import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../public/images/avatar.png";

export default function Header() {
  const [typedText, setTypedText] = useState("");
  const [additionalTypedText, setAdditionalTypedText] = useState("");
  const targetText = "Xiao Zhong";
  const additionalText = "Software, Hardware";
  const typeSpeed = 200;
  const backspaceSpeed = 50;
  const loopDelay = 1000;

  useEffect(() => {
    const typeAndBackspace = (text, setText) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            let backspaceIndex = text.length;
            const backspaceInterval = setInterval(() => {
              if (backspaceIndex > 0) {
                setText(text.substring(0, backspaceIndex - 1));
                backspaceIndex--;
              } else {
                clearInterval(backspaceInterval);
                setTimeout(() => {
                  typeAndBackspace(text, setText); // Loop the animation
                }, loopDelay);
              }
            }, backspaceSpeed);
          }, loopDelay);
        }
      }, typeSpeed);
    };

    setTypedText(""); // Clear typedText
    typeAndBackspace(additionalText, setAdditionalTypedText);

    return () => {}; // Clear any remaining intervals
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setTypedText(targetText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typeSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Image src={avatar} alt="Xiao Zhong" width={100} height={100} />
      <Typography variant="h4">{typedText}</Typography>
      <Typography variant="h6">{additionalTypedText}</Typography>
    </Box>
  );
}
