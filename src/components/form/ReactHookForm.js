import React, { useState,} from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm  = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>

        {/* Text  */}

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        //   onChange={(e) => setName(e.target.value)}
          {...register('name', { required: {
            value:true,
            message:"mim vai"
          } })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* Email  */}


      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        //   onChange={(e) => setEmail(e.target.value)}
          {...register('email', { required: true, email: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>

        {/* Password  */}


        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        //   onChange={(e) => setPassword(e.target.value)}
          {...register('password', { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>


        {/* Textarea   */} 


      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
        //   onChange={(e) => setMessage(e.target.value)}
          {...register('messages', {})}
        />
      </div>

      {/* Select  */}
      <>  <label>Hobby</label>
       <select {...register("hobby")}>
        <option value="fish">fish</option>
        <option value="meat">meat</option>
        <option value="other">other</option>
      </select>
       </>
     

      
      {/* Radio  */}

       <div>
        <label>Gender</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
        //   checked={gender === 'male'}
        //   onChange={(e) => setGender(e.target.value)}
          {...register('gender', {required: true})}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
        //   checked={gender === 'female'}
        //   onChange={(e) => setGender(e.target.value)}
          {...register('gender', {required: true})}
        />
        <label htmlFor="female">Female</label>
      </div>
      {errors.gender && <p>{errors.gender.message}</p>}


      {/* hook form advanced label  */}
      <button type="submit">Submit</button>

    </form>
  );
};

export default ReactHookForm ;
