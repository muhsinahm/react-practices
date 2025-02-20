import { useState } from "react";
import hobbies from "../../Data/hobbies";

const Checklist = () => {
  const [arrCopy, setArrCopy] = useState(hobbies);
  const [check, setCheck] = useState(false);
  const [currIndex, setCurrIndex] = useState();
  const handelDelete = (index) => {
    let newArr = arrCopy;
    let filteredArray = newArr.filter((hobbies, i) => {
      return i !== index;
    });
    setArrCopy(filteredArray);
  };
  const handleCheckBox = (value, i) => {
    console.log("Here is value and index", value, i);
    setCheck(!check);
    setCurrIndex(i);
  };
  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {arrCopy?.map((hobby, index) => {
          return (
            <li key={index}>
              <input
                type="checkBox"
                onChange={(e) => handleCheckBox(e.target.value)}
              ></input>
              {hobby}
              {check && currIndex == index && (
                <button onClick={() => handelDelete(index)}>Delete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checklist;
