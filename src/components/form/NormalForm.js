import React, { useState } from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
};

const labelStyle = {
  marginBottom: '8px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const selectStyle = {
  padding: '8px',
  marginBottom: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const checkboxGroupStyle = {
  display: 'flex',
  marginBottom: '16px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '16px',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function NormalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
   const [hobby, setHobby] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values through state variables (name, email, etc.)

    console.log("name",name);
    console.log("email",email);
    console.log("password",password);
    console.log("message",message);
    console.log("gender",gender);
    console.log("age",age);
    console.log("avatar",avatar);
    console.log("dob",dob);
    console.log("country",country);
    console.log("hobby",hobby);
  };



  return (
<div>
    <h3>React Normal Form :: </h3>
    <form style={formStyle} onSubmit={handleFormSubmit}>
      <label style={labelStyle} htmlFor="name">
        Name:
      </label>
      <input
        style={inputStyle}
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label style={labelStyle} htmlFor="email">
        Email:
      </label>
      <input
        style={inputStyle}
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label style={labelStyle} htmlFor="password">
        Password:
      </label>
      <input
        style={inputStyle}
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label style={labelStyle} htmlFor="message">
        Message:
      </label>
      <textarea
        style={inputStyle}
        id="message"
        name="message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <label style={labelStyle}>Gender:</label>
      <div style={checkboxGroupStyle}>
        <label style={checkboxLabelStyle} htmlFor="male">
          <input
            type="checkbox"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.checked ? 'male' : '')}
          />
          Male
        </label>
        <label style={checkboxLabelStyle} htmlFor="female">
          <input
            type="checkbox"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.checked ? 'female' : '')}
          />
          Female
        </label>
      </div>

      <label style={labelStyle} htmlFor="age">
        Age:
      </label>
      <input
        style={inputStyle}
        type="number"
        id="age"
        name="age"
        min="18"
        max="99"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label style={labelStyle} htmlFor="avatar">
        Avatar:
      </label>
      <input
        style={inputStyle}
        type="file"
        id="avatar"
        name="avatar"
        onChange={(e) => setAvatar(e.target.files[0])}
      />

      <label style={labelStyle} htmlFor="dob">
        Date of Birth:
      </label>
      <input
        style={inputStyle}
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <label style={labelStyle} htmlFor="country">
        Country:
      </label>
      <select
        style={selectStyle}
        id="country"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="au">Australia</option>
        <option value="jp">Japan</option>
        <option value="bn">Bangladesh</option>
      </select>

      <label style={labelStyle}>Hobbies:</label>
      <div style={checkboxGroupStyle}>
        <label style={checkboxLabelStyle} htmlFor="hobby1">
          <input
            type="radio"
            id="hobby1"
            name="hobbies"
            value="reading"
            checked={hobby === 'reading'}
            onChange={(e) => setHobby(e.target.checked ? 'reading' : '')}
          />
          Reading
        </label>
        <label style={checkboxLabelStyle} htmlFor="hobby2">
          <input
            type="radio"
            id="hobby2"
            name="hobbies"
            value="gaming"
            checked={hobby === 'gaming'}
            onChange={(e) => setHobby(e.target.checked ? 'gaming' : '')}
          />
          Gaming
        </label>
      </div>

      <input type="submit" value="Submit" style={submitButtonStyle} />
    </form>

    <div>

        formData : 
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Age : {age}</p>
        <p>Gender : {gender}</p>
        <p>Country : {country}</p>
        <p>Hobby : {hobby}</p>
        {/* <p>{avatar[0]}</p> */}
        <p>DateOfBirth : {dob}</p>
       
    </div>
</div>
  );
}

export default NormalForm;
