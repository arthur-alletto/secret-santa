// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div 
  className="min-h-screen flex items-end justify-center pb-22 bg-ecran1 bg-cover bg-center">
      
      <button onClick={onStart} className="text-xl uppercase px-8 py-3 bg-[var(--color-btn)] text-white border-4 border-[var(--color-btn)] font-DMsans font-extrabold rounded-full  hover:bg-transparent hover:text-[var(--color-btn)]">
        Commencer 
      </button>
    </div>
    
  );
}
