import { useState } from "react";

const GenderSelection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
        Are you Male or Female?
      </h2>
      <div className="flex gap-4 max-w-md mx-auto px-4">
        <button
          onClick={() => setSelected("male")}
          className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            selected === "male"
              ? "bg-primary text-primary-foreground shadow-button scale-105"
              : "bg-gender-button text-foreground hover:scale-105 hover:shadow-soft"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => setSelected("female")}
          className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            selected === "female"
              ? "bg-primary text-primary-foreground shadow-button scale-105"
              : "bg-gender-button text-foreground hover:scale-105 hover:shadow-soft"
          }`}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;
