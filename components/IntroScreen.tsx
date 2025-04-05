type Props = {
  onStart: () => void;
};

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-[url('/bg-paper.jpg')] bg-cover bg-center flex items-center justify-center text-yellow-900 px-4">
      <div className="bg-white/90 p-4 sm:p-8 rounded-xl shadow-xl w-full max-w-xl text-center border border-yellow-900">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Dynastie Khmer</h1>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Incarnez un dirigeant khmer et faites face aux dilemmes du pouvoir. Chaque décision aura un impact sur votre peuple... et votre destin.
        </p>

        <button
          onClick={onStart}
          className="w-full sm:w-auto bg-yellow-800 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-200 text-lg font-semibold"
        >
          Commencer votre règne
        </button>
      </div>
    </div>
  );
}
