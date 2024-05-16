import React, { useState } from "react";
import { styled } from "@mui/system";

// Interfejs props dla komponentu CardFlip
interface CardFlipProps {
  frontIcon: React.ReactNode; // Ikona przedniej strony karty
  frontText: React.ReactNode; // Tekst przedniej strony karty
  backText: React.ReactNode; // Tekst tylnej strony karty
  backButtonText: string; // Tekst przycisku na tylnej stronie karty
}

// Styled components dla komponentu CardFlip
const FlipCard = styled("div")({
  perspective: "1000px",
  overflow: "visible",
});

const FlipCardInner = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "1s",
  transformStyle: "preserve-3d",
});

const CardFace = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "15px",
  padding: "20px",
  backgroundColor: "#A758B5",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

// Komponent CardFlip
const CardFlip: React.FC<CardFlipProps> = ({
  frontIcon,
  frontText,
  backText,
  backButtonText,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCard onClick={handleClick}>
      <FlipCardInner
        className="Card"
        style={
          !isFlipped
            ? { transform: "rotateY(0)" }
            : { transform: "rotateY(180deg)" }
        }
      >
        {/* Przednia strona karty */}
        <CardFace sx={{ width: "300px", height: "400px" }}>
          {frontIcon}
          <div>{frontText}</div>
        </CardFace>
        {/* Tylna strona karty */}
        <CardFace
          style={{
            transform: "rotateY(180deg)",
            width: "300px",
            height: "400px",
          }}
        >
          <div>{backText}</div>
          <button>{backButtonText}</button>
        </CardFace>
      </FlipCardInner>
    </FlipCard>
  );
};

export default CardFlip;
