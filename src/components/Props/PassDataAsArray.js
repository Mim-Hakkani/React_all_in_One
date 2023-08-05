import React from 'react';

const PassDataAsArray = ({users}) => {


    return (
        <div style={{border:'1px solid gray',display:'flex',justifyContent:'space-between'}}>
            {users.map((user,index)=><div key={index}>
              <p>userId : {user.id}</p>
              <p>Name : {user.name}</p>
              <p>Email : {user.email}</p>
            </div>)}
        </div>
    );
};

export default PassDataAsArray;