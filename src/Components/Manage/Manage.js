import React from "react";
import useFruits from "../hooks/useFruits";

const Manage = () => {
  const [fruits, setFruits] = useFruits([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this fruit");
    if (proceed) {
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = fruits.filter((fruit) => fruit._id !== id);
          setFruits(remaining);
        });
    } else {
    }
  };
  return (
    <div>
      <h1>This is your Fruits</h1>
      <div className="m-5 services-container row row-cols-1 row-cols-md-3 g-4">
        {fruits.map((fruit) => (
          <div className="service">
            <img className="w-100" src={fruit?.img} alt="" />
            <h2>{fruit?.name}</h2>
            <p>Price: {fruit?.price}</p>
            <p>
              <small>{fruit?.description}</small>
            </p>
            <button
              onClick={() => handleDelete(fruit?._id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
