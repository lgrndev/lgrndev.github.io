import { Link } from "react-router-dom"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Exercices () {
    const codeString1 = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, world!" << endl;\n    return 0;\n}`;
    
    return (
        <div className="w-screen relative">
            {/* <Link to="../" className="absolute right-8 top-4 bg-blue-600 pt-1 pb-1 pl-4 pr-4 rounded-full transition-all">Retour à l'accueil</Link> */}
            <div className="flex flex-col  items-center">

                <div className="m-8 flex flex-col gap-8 bg-zinc-800 p-4 rounded-3xl w-5/6 items-center">
                    <div className="titre text-4xl text-center">TD 1</div>
                    <div className=" border border-zinc-600 p-8 rounded-xl w-2/3">
                    <div className="titre text-3xl">Exercice 1</div>
                    <div className="pt-8">
                        <SyntaxHighlighter language="cpp" style={a11yDark}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>
                    </div>

                </div>

                
            </div>
        </div>
    )
}

export default Exercices