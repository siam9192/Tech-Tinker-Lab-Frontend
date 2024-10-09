'use client';
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

function PDFGenerateButton() {
  const handleDownloadPdf = async () => {
    const element = document.getElementById('post-content');

    if (!element) {
      return;
    }

    const printWindow = window.open('', '', 'height=600,width=800'); // Create a new window
    if (!printWindow) {
      return;
    }
    // Open a new document and write the content of the element
    printWindow.document.write('<html><head><title>Print Element</title>');
    printWindow.document.write(
      '<style>body { font-family: Arial, sans-serif; }</style>',
    ); // Optional styling
    printWindow.document.write('</head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // Close the document to finish loading
    printWindow.focus(); // Focus on the new window

    // Trigger the print dialog
    printWindow.print();

    // Close the window after printing
    printWindow.onafterprint = function () {
      printWindow.close();
    };
  };

  return (
    <button
      onClick={handleDownloadPdf}
      className="px-4 py-2 bg-primary-color text-white rounded-md"
    >
      Generate PDF
    </button>
  );
}

export default PDFGenerateButton;
