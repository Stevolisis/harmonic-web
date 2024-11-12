import React, { useEffect, useState } from 'react'
import {pdfjs, Document, Page} from 'react-pdf'
import * as PDFJS from "pdfjs-dist";

const PdfRender = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    // pdfjs.GlobalWorkerOptions.workerSrc =
    // "https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.js";
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // pdfjs.GlobalWorkerOptions.workerSrc = require('/node_modules/pdfjs-dist/build/pdf.sandbox.min.mjs');

    // useEffect(() => {
    //     // Load the PDF file and set the pages array pdfjs-dist/build/pdf.worker.min.js
    //     const loadPdf = async () => {
    //         const loadingTask = pdfjs.getDocument("/public/cv.pdf");
    //         const pdf = await loadingTask.promise;
    //         const pagesArray = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
    //         setNumPages(pdf.numPages);
    //         setPages(pagesArray);
    //     };

    //     loadPdf();
    // }, []);

  return (
    <div>
      {/* <Document file="/public/cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
    </div>
  )
}

export default PdfRender