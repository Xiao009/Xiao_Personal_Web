import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../public/images/avatar.png";
// import Particles from "react-tsparticles";     //missing the particle

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
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      {/* <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }} 
      />*/}
      <Image src={avatar} alt="Xiao Zhong" width={100} height={100} />
      <Typography variant="h4" sx={{ color: "tomato" }}>
        {typedText}
      </Typography>
      <Typography variant="h6" sx={{ color: "tan" }}>
        {additionalTypedText}
      </Typography>
    </Box>
  );
}
