import { exercices } from "../../../data/exercices_cpp";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import styled from "styled-components";



const groupExercicesByTd = (exercices) => {
    return exercices.reduce((acc, exercice) => {
        if (!acc[exercice.td]) {
            acc[exercice.td] = [];
        }
        acc[exercice.td].push(exercice);
        return acc;
    }, {});
};

function Cpp() {






    
    const exercicesGroupedByTd = groupExercicesByTd(exercices);

    const getTdColorClass = (tdNumber) => {
        switch (tdNumber) {
            case 1: return "text-green-500";
            case 2: return "text-blue-500";
            case 3: return "text-red-500";
            default: return "text-zinc-500";
        }
    };

    const getTdColorBG = (tdNumber) => {
        switch (tdNumber) {
            case 1: return "bg-gradient-to-r to-zinc-600 from-green-500";
            case 2: return "bg-gradient-to-r to-zinc-600 from-blue-500";
            case 3: return "bg-gradient-to-r to-zinc-600 from-red-500";
            default: return "bg-gradient-to-r to-zinc-600 from-zinc-500";
        }
    };

    const [copiedExercices, setCopiedExercices] = useState({});


    const handleCopyCode = (code, exerciceId) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedExercices(prevState => ({ ...prevState, [exerciceId]: true }));
        });
    };




    const StyledDiv = styled.div`
        position: relative;
        display: inline-block;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(145deg, #3B82F6, #90b3ee);
    z-index: -1;
    border-radius: inherit;
    filter: blur(10px);
    opacity: 1; // Toujours visible
    opacity: 30%;
  }
    `




    return (
        <div>
            <div className="text-center text-white text-4xl poppins-bold mb-16 mt-8">Exercices C++</div>
            
            <div className="table-of-contents mb-8">
                <h2 className="text-2xl md:text-2xl font-bold text-center titre mr-4 ml-4 text-white">⬇️Cliquez pour accéder directement⬇️</h2>
                <ul>
                    {Object.keys(exercicesGroupedByTd).map((tdNumber) => (
                        <li key={tdNumber} className="text-center">
                            <a href={`#td-${tdNumber}`} className="text-white hover:underline text-xl titre">{`TD ${tdNumber}`}</a>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="flex flex-col items-center ">
                {Object.entries(exercicesGroupedByTd).map(([tdNumber, exercices]) => (
                    <StyledDiv id={`td-${tdNumber}`} key={tdNumber} className="w-3/4 md:w-1/2 bg-zinc-800 p-4 mb-16 m-4 rounded-lg">
                        {exercices.map((exercice, index) => (
                            <div key={index} className="relative">

                                <h1 className={`text-3xl mt-4 font-bold ${getTdColorClass(exercice.td)} titre`}>{exercice.titre}</h1>
                                <p className="mt-2 mb-4 text-white">💡{exercice.description}</p>
                                <div className=" flex flex-col rounded-lg">
                                    <div className="flex flex-row justify-between h-8 bg-zinc-700 items-center pl-2 pr-2 text-sm rounded-t-lg">
                                        <div className="text-white">main.cpp</div>
                                        <button onClick={() => handleCopyCode(exercice.code, `${tdNumber}-${index}`)} className="w-fit copy-button text-zinc-400 titre hover:text-zinc-200 transition-all">
                                            {copiedExercices[`${tdNumber}-${index}`] ? '✅ Copié' : '📋 Copier le code'}
                                        </button>
                                    </div>
                                    <SyntaxHighlighter language="c++" style={atomOneDark} customStyle={{ padding: '25px', borderRadius: '0px 0px 10px 10px' }} className="text-xs md:text-base">
                                        {exercice.code}
                                    </SyntaxHighlighter>
                                </div>
                                <div className={`w-auto h-0.5 ${getTdColorBG(exercice.td)} mt-10`}></div>
                            </div>
                        ))}
                    </StyledDiv>
                ))}
            </div>
        </div>
    );
}

export default Cpp;