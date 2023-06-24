
import React, { useState } from "react";
import Barcode from "react-barcode";


const BarcodeScanner = () => {



  const [barcodeData, setBarcodeData] = useState("");

  const generateBarcode = () => {
    const barcode = Barcode.create({
      value: barcodeData,
      type: "ean13",
      size: 200,
      margin: 10,
    });

    setBarcodeData(barcode.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter barcode data"
        onChange={(e) => setBarcodeData(e.target.value)}
      />
      <button onClick={generateBarcode}>Generate Barcode</button>
      <Barcode value={barcodeData} />
    </div>
  );
};

export default BarcodeScanner;