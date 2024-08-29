"use client";
import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
// import "pdfjs-dist/build/pdf.worker.entry";

const PdfViewer = ({ fileUrl }) => {
  const canvasRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(fileUrl);
      const loadedPdf = await loadingTask.promise;
      setPdf(loadedPdf);
    };

    loadPdf();
  }, [fileUrl]);

  useEffect(() => {
    const renderPage = async () => {
      if (pdf) {
        const page = await pdf.getPage(pageNumber);

        const scale = 0.6;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      }
    };

    renderPage();
  }, [pdf, pageNumber]);

  return (
    <div className="relative">
      <canvas ref={canvasRef} />
      <div className="absolute bottom-2 w-full">
        {pdf && (
          <div className="flex flex-row justify-between px-2">
            <button
              className="bg-black p-1"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
            <button
              className="bg-black p-1"
              disabled={pageNumber >= pdf.numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
