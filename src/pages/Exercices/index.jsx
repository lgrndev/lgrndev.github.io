import { Link } from "react-router-dom"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';


const repoOwner = 'lgrndev'; // Remplacez par le nom du propriétaire du dépôt
const repoName = 'exercices-c-lyon1'; // Remplacez par le nom du dépôt
const fileName = 'main.cpp';

async function fetchBranches() {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/branches`);
    const branches = await response.json();
    return branches;
}

async function fetchFileContent(branch) {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}?ref=${branch}`);
    if (response.status === 200) {
        const fileData = await response.json();
        const content = atob(fileData.content);
        return content;
    } else {
        return null;
    }
}

async function displayFiles() {
    const branches = await fetchBranches();
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    // Ensure branches is an array before attempting to iterate
    if (!Array.isArray(branches)) {
        console.error('Failed to fetch branches or branches is not an array:', branches);
        return; // Exit the function if branches is not an array
    }

    for (const branch of branches) {
        const content = await fetchFileContent(branch.name);
        if (content) {
            const div = document.createElement('div');
            div.className = 'file-content';
            const h3 = document.createElement('h3');
            h3.className = "text-2xl font-bold text-white mt-20 mb-8 poppins-bold"; 
            h3.textContent = branch.name;
            div.appendChild(h3);
            const pre = document.createElement('pre');
            pre.textContent = content;
            div.appendChild(pre);
            contentDiv.appendChild(div);
        }
    }
}

function startAutoRefresh(intervalMinutes) {
    displayFiles(); // Initial call
    setInterval(displayFiles, intervalMinutes * 60 * 1000); // Repeat every intervalMinutes
}

// Start the auto-refresh with a 15-minute interval
startAutoRefresh(15);


function Exercices () {
    
    return (
        <div className="m-8">
            {/* <Link to="../" className="absolute right-8 top-4 bg-blue-600 pt-1 pb-1 pl-4 pr-4 rounded-full transition-all">Retour à l'accueil</Link> */}
            <div className="flex flex-col  items-center">

                <div id="content"></div>

            </div>
        </div>
    )
}

export default Exercices