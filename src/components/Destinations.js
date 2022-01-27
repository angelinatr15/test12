import { useRef, useState } from "react";
import Destination from "./destinations/Destination";

const Destinations = () => {
  const idRef = useRef();
  const locationRef = useRef();
  const yearRef = useRef();

  const commentRef = useRef();

  function addVacation(event) {
    event.preventDefault();
    let travel = {
      id: idRef.current.value,
      location: locationRef.current.value,
      year: yearRef.current.value,
      comment: commentRef.current.value,
    };
    setDestinationList([...destinationList, travel]);
  }

  const [destinationList, setDestinationList] = useState([
    {
      location: "Mexico",
      year: 2023,
      comment: "Beware",
      id: 1,
    },
    {
      location: "Hawaii",
      year: 2021,
      comment: "Fun",
      id: 2,
    },
    {
      location: "Texas",
      year: 2022,
      comment: "Hot",
      id: 3,
    },
  ]);

  return (
    <div>
      {destinationList.map((travel) => (
        <Destination travel={travel} />
      ))}
      <form onSubmit={addVacation}>
        <input ref={idRef} type="text" placeholder="id" />
        <input ref={locationRef} type="text" placeholder="location" />
        <input ref={yearRef} type="text" placeholder="year" />
        <input ref={commentRef} type="text" placeholder="comment" />
        <button>click</button>
      </form>
    </div>
  );
};

export default Destinations;
