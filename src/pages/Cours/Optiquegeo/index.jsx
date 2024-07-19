import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Optiquegeo() {
    return (
        <div className="text-white flex flex-col justify-center items-center">
          <div className='w-1/3 flex flex-col'>
            <div className='text-4xl text-center poppins-bold'>Optique Géometrique</div>
            <div className='text-center text-zinc-400'>Merci à Anthony V. (@Astriyan) pour les cours !</div>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 1</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC1.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 2</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC2.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 3</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC3.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 4</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC4.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 5</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC5.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 6</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC6.pdf" />
                </div>
            </Worker>
            <div className='text-xl text-center poppins-bold mb-8 mt-10'>Chapitre 7</div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '750px'}}>
                    <Viewer fileUrl="/cours/optiquegeo/OptiqueC7.pdf" />
                </div>
            </Worker>
            </div>
        </div>
    );
}

export default Optiquegeo;
