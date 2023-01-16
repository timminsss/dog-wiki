import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dogs = () => {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const url = "/api/v1/dogs/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDogs(res));
      // .catch(() => navigate("/"));
  }, []);

  const allDogs = dogs.map((dog, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={dog.url}
            className="card-img-top"
            />
            <h4 className="border-none">{dog.breeds[0].name}</h4>
            <Link to= {`/dog/${dog.id}`} className="btn">
              See this dog
            </Link>
        </div>
      </div>
  ));

  return (
    <div>
      <div>
        <h1>10 dogs</h1>
        {allDogs}
      </div>
    </div>

  )
};

export default Dogs;
