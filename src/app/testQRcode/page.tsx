"use client"
import React from 'react';
import QRCode from 'qrcode.react';
import { jsPDF } from 'jspdf';

const QR: React.FC = () => {
    const generatePDF = () => {
        // Defines the pdf
        let pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [40, 40]
        });
        // Transforms the canvas into a base64 image
        let canvas = document.getElementById('qrcode') as HTMLCanvasElement;
        let base64Image = canvas.toDataURL();
        // Adds the image to the pdf
        pdf.addImage(base64Image, 'PNG', 0, 0, 40, 40);
        // Downloads the pdf
        pdf.save('QR.pdf');
    };

    return (
        <>
            <QRCode value={'https://erikmartinjordan.com/nguyenngochai'} id='qrcode' />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generatePDF}
            >
                Download pdf
            </button>
        </>
    );
};

export default QR;

