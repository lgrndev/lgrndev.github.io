import { Link } from "react-router-dom";

function CppCours () {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-white text-4xl poppins-bold">Coming Soon ...</div>
      <div className="text-center text-white text-2xl poppins-bold mt-8">Les corrigés d'exercices sont disponibles</div>
      <Link to="/exercices/cpp" className="text-white text-2xl poppins-bold bg-blue-500 pt-1 p-1 pr-4 pl-4 rounded-full hover:bg-blue-700 transition-all">ici</Link>
    </div>
  );
}

export default CppCours;