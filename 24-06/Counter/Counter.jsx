import { useState } from "react";

function Counter() {
  // Definieren des Zählerwertes und einer Funktion zum Aktualisieren des Zählers
  const [count, setCount] = useState(0);

  // Funktion zum Inkrementieren des Zählers
  let incrementCount = () => {
    console.log("Inkrementiere Zähler");
    setCount(count + 1);
    console.warn(`Neuer Zählerwert: ${count + 1}`);
  };

  // Funktion zum Dekrementieren des Zählers
  let decrementCount = () => {
    console.log("Versuche, Zähler zu dekrementieren");
    console.log(`Aktueller Zählerwert: ${count}`);
    // Überprüfen, ob der Zählerwert 0 ist, um negatives Zählen zu verhindern
    if (count === 0) {
      console.error("Zählerwert ist bereits 0. Decrementieren ist nicht möglich.");
      return;
    }
    setCount(count - 1);
    console.log(`Neuer Zählerwert: ${count - 1}`);
  };

  // Rendern der Komponente
  return (
    <div className="app">
      <div>
        {/* Anzeige des Zählerwerts */}
        <div className="count">
          <h1 data-testid="counter-text">Count: {count}</h1>
        </div>
        {/* Buttons zum Inkrementieren und Dekrementieren des Zählers */}
        <div className="buttons">
          <button data-testid="decrease" title={"-"} onClick={decrementCount}>-</button>
          <button data-testid="increase" title={"+"} onClick={incrementCount}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
