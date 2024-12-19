// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments

// -----------------A OUVRIR EN FORMAT IPHONE 14--------------------//

export function AssignmentDisplay({ assignments }) {
  return (
    <div className="min-h-screen bg-ecran3 bg-cover bg-center flex justify-center items-center pt-20">
      <ul className="space-y-4 w-90 bg-[var(--color-btn)]/90 rounded-lg py-6 items-center font-DMsans text-center font-regular text-lg text-white">
        {assignments.map((assignment, index) => (
          <li key={index}>
            <span className="text-yellow-300">{assignment.giver}</span> offre un beau cadeau à{" "}
            <span className="text-green-300">{assignment.receiver}</span>
          </li>
        ))}
      </ul>
    </div>
  );  
}

