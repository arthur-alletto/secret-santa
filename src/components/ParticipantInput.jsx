// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4 pt-85 min-h-screen flex flex-col items-center justify-start bg-ecran2 bg-cover bg-center">
      <div className="space-x-2 flex">
        <input
          type="text"
          className="input flex-grow font-DMsans text-2xl font-regular rounded-full py-2 pl-6 bg-[var(--color-btn)] text-white"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="font-DMsans font-black text-5xl px-4 rounded-full text-center bg-red-600 text-white button" onClick={addParticipant}>
          +
        </button>
      </div>
      <ul className="space-y-2 w-full pt-2 flex flex-col items-center rounded-lg">
        {participants.map((name, index) => (
          <li key={index} className="flex items-center justify-between w-[300px] font-DMsans font-bold text-2xl text-[var(--color-btn)]">
            <span className="truncate">{name}</span>
            <button
              className="font-DMsans font-black text-xl px-3 rounded-full text-center bg-red-600 text-white"
              onClick={() => onRemoveParticipant(index)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}
