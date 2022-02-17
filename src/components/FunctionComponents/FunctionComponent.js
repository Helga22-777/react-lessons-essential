import React from "react";

const user = {
    name: 'Андрей',
    age: 26,
  };

const FunctionComponent = () => {
    return (
        <div className="trueLogin">
          <h1>Привет, {user.name}! Тебе {user.age} лет?</h1>
        </div>
    )
}

export default FunctionComponent;