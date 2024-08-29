import React from "react";
import PdfViewer from "./pdfloader";

export default function Pdfviewer() {
  const fileUrl =
    "https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf";
  return (
    <div className="h-[500px] pt-5 ">
      {/* <iframe src='https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf' className='w-full h-full'>P</iframe> */}
      <PdfViewer fileUrl={fileUrl} />
    </div>
  );
}
