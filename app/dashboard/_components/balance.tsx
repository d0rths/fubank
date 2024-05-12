import React, { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Balance = () => {
  const initialNumbers = [10000, 15000, 5000]; // Початкові значення для номерів
  const [numbers, setNumbers] = useState(initialNumbers);
  const [hiddenNumbers, setHiddenNumbers] = useState(
    Array(initialNumbers.length).fill(false)
  );

  const toggleNumberVisibility = (index) => {
    const newHiddenNumbers = [...hiddenNumbers];
    newHiddenNumbers[index] = !newHiddenNumbers[index];
    setHiddenNumbers(newHiddenNumbers);
  };
  return (
    <div className="flex flex-row w-[38rem] pl-10">
      {numbers.map((number, index) => (
        <div key={index} className="w-1/3">
          <p className="text-link text-base font-medium">
            {index === 0 && "Поточний баланс"}
            {index === 1 && "Прибуток"}
            {index === 2 && "Витрати"}
          </p>
          <div className={bebasNeue.className}>
            <h2 className="text-[2rem]" id="balance">
              {hiddenNumbers[index] ? "XXXXX" : `${number} UAH`}
            </h2>
            <button onClick={() => toggleNumberVisibility(index)}>
              Toggle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balance;
