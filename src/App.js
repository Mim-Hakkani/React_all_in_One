
import './App.css';
import ParentComponent from './components/LiftingState/ParentComponent';
import ListAndKeys from './components/ListAndKeys/ListAndKeys';
import PropsInReact from './components/Props/PropsInReact';
import BarcodeScanner from './components/barcodeGenerator/BarcodeScanner';
import BarcodeScanner2 from './components/barcodeGenerator/BarcodeScanner2';
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering';
import NormalForm from './components/form/NormalForm';
import ReactHookForm from './components/form/ReactHookForm';
import ReactEvents from './components/reactEvents/ReactEvents';

function App() {
  return (
    <div>

      {/* react events  */}

         {/* <ReactEvents /> */}


      {/* for lifting State in react  */}

         {/* <ParentComponent /> */}




      {/* props details  */}

        {/* <PropsInReact /> */}



      {/* barcode scanner  */}
        
        {/* this is the barcode generator code  */}

            {/* <BarcodeScanner /> */}
        {/* barcode Reader  */}
    
            {/* <BarcodeScanner2 /> */}

      {/* Conditional Rendering  */}

         {/* <ConditionalRendering /> */}


      {/* List and keys example  */}

      {/* <ListAndKeys /> */}


      {/* react form examle  */}

         {/* <NormalForm /> */}

         <ReactHookForm />
 
    </div>
  );
}

export default App;
