import React from 'react';
import './User.css';

const User = (props) => {
    // let age = props.age >= 0 ? props.age : "NA";

    return (
        <div>
            {/* <span>name: {props.children} | age: {age}</span> */}
            <div className="text-input">
                <input id="nameInput"
                    type="text" 
                    onChange={props.changeNameEvent} 
                    value={props.children}
                />
                <label for="nameInput">Name</label>
            </div>
            <div className="text-input">
                <input id="ageInput"
                    type="text" 
                    onChange={props.changeAgeEvent} 
                    value={props.age}
                />
                <label for="ageInput">Age</label>
            </div>
            <button className="myButton" onClick={props.delEvent}>Delete</button>
        </div>
    )
}

export default User;
