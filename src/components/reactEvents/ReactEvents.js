import React, { useState } from 'react';

const ReactEvents = () => {

    // hooks 

	const [companyName, setCompanyName] = useState('Marketing');
    const [companyFlag ,setCompanyFlag] =useState(false);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')


    // function handler 

	const handleClickCompanyName = () => {
		setCompanyName('Group');
	};

    // for input text 

    const handleChangeInput = (event)=> {
        setName(event.target.value)
    }

      const handleBlur = (e) => {
    setEmail(e.target.value);
  };


    // function handler form submit 

    const handleSumbitData =(event)=>{
        event.preventDefault();

    console.log("name is :: ", name );
    console.log("Email is :: ", email );

    // after show the data form value is cleared 

    setEmail(" ");
    setName(" ");
    }


	return (
		<div>
			<h1>Ehsan {companyFlag ? companyName : "Software"} </h1>

			{/* after click  change the company name  */}

			<button onClick={handleClickCompanyName}>Click</button>

			{/* after mouse hover change the company name  */}
			<button onMouseOver={() => setCompanyName('Marketing')}>
				MouseHover
			</button>

             {/* conditional rendering and event handler  */}

            <button onClick={() => setCompanyFlag(!companyFlag)}>
				Toggle 
			</button>

        

        {/* react form handleer  */}

            <form onSubmit={handleSumbitData} style={{marginTop:"15px"}}>

                {/* onchange event  */}

                <label htmlFor="onchangeEvent">Onchange event : </label>
                <input type="text" name="" id="onchangeEvent" value={name} onChange={handleChangeInput}/>
                
                {/* onblur event  */}

              <div>
      <label htmlFor="onblurEvent">OnBlur event:</label>
      <input
        type="email"
        name=""
        id="onblurEvent"
        value={email}
        onChange={handleBlur}
        onBlur={handleBlur}
      />
    </div>

                 {/* submit the button to show data  */}

                 <button type='submit'>Submit</button>
                 
             </form>

		</div>
	);
};

export default ReactEvents;
