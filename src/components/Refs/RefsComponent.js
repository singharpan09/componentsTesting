import React, { useRef } from "react";

const RefsComponent = () => {
  const textRef = useRef("2434");
  const handleClick = () => {
    textRef.current.value = "123456";

  };
  return (
    <>
      <input ref={textRef} name='user' id='name' />
      <button onClick={handleClick}>CLick here</button>
    </>
  );
};

export default RefsComponent;
