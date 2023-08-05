import React from "react";

// when jsx works as variable
const name = "Golam Hakkani mim ";

// when jsx works as function

const myDetailsInfo = (info) => {
  // conditional rendering too
  return info ? info.roll : "There is no roll input";
};

// when jsx works as object

const myDetailsObj = {
  dept: "Computer Science and Engineering ",
  roll: 150132,
  designation: "React Developer",
  imgUrl:
    "https://hips.hearstapps.com/hmg-prod/images/sigourney-weaver-avatar-ii-the-way-of-water-1670323174.jpg?crop=0.500xw:0.949xh;0.299xw,0.0514xh&resize=1200:*",
};

// jsx is working as class name 

const jsxColor = {
 color :"red",
 border:'0.5px solid gray'
}

const Jsx = () => {
  return (
    <div>
      {/* works as variale  */}
      <h2>My Name is :  {name}</h2>

      {/* works as object  */}
      <h3>Designation : {myDetailsObj.designation}</h3>

      {/* works as function  */}
      <h3>Roll is :: {myDetailsInfo(myDetailsObj)}</h3>

      {/* jsx works in Attributes changes  */}

      <img src={myDetailsObj.imgUrl} alt={myDetailsObj.dept} height={150} />

      {/* when jsx works as className  */}

      <h2>My Name is : <span style={jsxColor}> {name}</span></h2>
    </div>
  );
};

export default Jsx;
