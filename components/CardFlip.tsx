import React, { useState } from "react";
import { styled } from "@mui/system";

interface CardFlipProps {
  front: React.ReactNode; // Przekazuje zawartość przedniej strony karty jako ReactNode
  back: React.ReactNode; // Przekazuje zawartość tylnej strony karty jako ReactNode
  width?: string; // Opcjonalna szerokość kontenera karty
  height?: string; // Opcjonalna wysokość kontenera karty
}

const FlipCard = styled("div")({
  perspective: "1000px", // Ustawia perspektywę dla efektu 3D
  overflow: "visible", // Ustawia overflow na visible, aby uniknąć problemów z renderowaniem zawartości 3D
});

const FlipCardInner = styled("div")({
  position: "relative", // Ustawia pozycję na relative dla wewnętrznego kontenera karty
  width: "100%", // Ustawia szerokość na 100%
  height: "100%", // Ustawia wysokość na 100%
  transition: "1s", // Dodaje efekt przejścia dla animacji obracania karty
  transformStyle: "preserve-3d", // Ustawia styl transformacji na 3D
});

const CardFace = styled("div")({
  position: "absolute", // Ustawia pozycję na absolutną dla przedniej i tylnej strony karty
  width: "100%", // Ustawia szerokość na 100%
  height: "100%", // Ustawia wysokość na 100%
  backfaceVisibility: "hidden", // Ukrywa tylne strony karty podczas obracania
  borderRadius: "15px", // Dodaje zaokrąglenie rogów dla efektu estetycznego
  padding: "10px", // Dodaje wewnętrzny padding dla zawartości karty
  overflowY: "auto", // Ustawia overflow na auto, aby dodać pasek przewijania wewnątrz karty
});

const CardFlip: React.FC<CardFlipProps> = ({ front, back, width, height }) => {
  const [isFlipped, setIsFlipped] = useState(false); // Stan określający czy karta jest odwrócona

  const handleClick = () => {
    // Funkcja obsługująca kliknięcie, zmienia stan isFlipped
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCard
      sx={{
        width: width, // Ustawia szerokość kontenera karty zgodnie z przekazanym props'em
        height: height, // Ustawia wysokość kontenera karty zgodnie z przekazanym props'em
      }}
      onClick={handleClick} // Obsługa kliknięcia, zmienia stan isFlipped
    >
      <FlipCardInner
        className="Card"
        sx={
          !isFlipped
            ? { transform: "rotateY(0)" }
            : { transform: "rotateY(180deg)" }
        } // Obraca kartę w zależności od stanu isFlipped
      >
        <CardFace>{front}</CardFace> // Wyświetla przednią stronę karty
        <CardFace sx={{ transform: "rotateY(180deg)" }}>{back}</CardFace> //
        Wyświetla tylną stronę karty
      </FlipCardInner>
    </FlipCard>
  );
};

export default CardFlip;
