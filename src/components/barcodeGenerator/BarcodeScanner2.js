 import React, { useRef, useState } from "react";
import { BarcodeScanner } from "react-barcode-scanner";
import useScanDetection from "use-scan-detection";


const BarcodeScanner2 = () => {


  const [barcodeData, setBarcodeData] = useState("No Barcode Scanner");

  // const barcodeScannerRef = useRef(null);

  // const onBarcodeScanned = (barcode) => {
  //   setBarcodeData(barcode);
  // };

  useScanDetection({
    onComplete:setBarcodeData ,
});

  return (
    <div>
      {/* <BarcodeScanner
        ref={barcodeScannerRef}
        onBarcodeScanned={onBarcodeScanned}
      /> */}
      <p>Barcode data: {barcodeData}</p>
    </div>
  );
};


export default BarcodeScanner2;