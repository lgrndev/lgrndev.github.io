import { Link } from "react-router-dom";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { exercices } from "../../data/exercices";

const groupExercicesByTd = (exercices) => {
    return exercices.reduce((acc, exercice) => {
        if (!acc[exercice.td]) {
            acc[exercice.td] = [];
        }
        acc[exercice.td].push(exercice);
        return acc;
    }, {});
};

function Exercices() {
    const exercicesGroupedByTd = groupExercicesByTd(exercices);

    const getTdColorClass = (tdNumber) => {
        switch(tdNumber) {
            case 1: return "text-green-500";
            case 2: return "text-blue-500";
            case 3: return "text-red-500";
            default: return "text-zinc-500";
        }
    };

    const getTdColorBG = (tdNumber) => {
        switch(tdNumber) {
            case 1: return "bg-gradient-to-r to-zinc-600 from-green-500";
            case 2: return "bg-gradient-to-r to-zinc-600 from-blue-500";
            case 3: return "bg-gradient-to-r to-zinc-600 from-red-500";
            default: return "bg-gradient-to-r to-zinc-600 from-zinc-500";
        }
    };

    return (
        <div>
            <Link to="../" className="absolute right-8 bg-zinc-700 border border-zinc-400 pt-2 pb-2 pl-6 pr-6 rounded-full transition-all hover:bg-zinc-400 hidden lg:block">Retour à l'accueil</Link>
            <div className="table-of-contents mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center titre mr-4 ml-4">⬇️Cliquez pour accéder directement⬇️</h2>
                <ul>
                    {Object.keys(exercicesGroupedByTd).map((tdNumber) => (
                        <li key={tdNumber} className="text-center">
                            <a href={`#td-${tdNumber}`} className="text-white hover:underline text-xl titre">{`TD ${tdNumber}`}</a>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="flex flex-col items-center">
                {Object.entries(exercicesGroupedByTd).map(([tdNumber, exercices]) => (
                    <div id={`td-${tdNumber}`} key={tdNumber} className="w-3/4 md:w-1/2 bg-zinc-800 p-4 m-4 rounded-lg">
                        {exercices.map((exercice, index) => (
                            <div key={index}>
                                <h1 className={`text-3xl mt-4 font-bold ${getTdColorClass(exercice.td)} titre`}>{exercice.titre}</h1>
                                <p className="mt-2 mb-4">💡{exercice.description}</p>
                                <SyntaxHighlighter language="javascript" style={a11yDark} className="mb-8 text-sm sm:text-base">
                                    {exercice.code}
                                </SyntaxHighlighter>
                                <div className={`w-auto h-0.5 ${getTdColorBG(exercice.td)} mt-10`}></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exercices;