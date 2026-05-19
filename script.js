import * as React from "react";

export default function Sic_component() {
  const ref = React.useRef(null);
  const [sicText, setSicText] = React.useState("[sic]");

  React.useEffect(() => {
    const updateText = () => {
      if (!ref.current) return;

      const width = ref.current.offsetWidth;
      const characterWidth = 20;
      const fixedChars = 4; // [, s, c, ]

      const numberOfIs = Math.max(
        1,
        Math.floor((width - fixedChars * characterWidth) / characterWidth),
      );

      setSicText(`[s${"i".repeat(numberOfIs)}c]`);
    };

    const observer = new ResizeObserver(updateText);

    if (ref.current) {
      observer.observe(ref.current);
      updateText();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={containerStyle}>
      <h1 style={sicStyle}>{sicText}</h1>
    </div>
  );
}

const containerStyle = {
  width: "100%",
  height: "100%",
  background: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const sicStyle = {
  fontSize: "64px",
  fontStyle: "normal",
  color: "white",
  fontFamily: "'Actor', monospace",
  whiteSpace: "nowrap",
  margin: 0,
};
