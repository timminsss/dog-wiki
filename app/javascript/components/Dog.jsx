import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Dog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState({ url: "", breeds: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => setDog(response))
    // .catch(() => navigate("/dogs"));
  }, [params.id]);

  // const breedInfo = dog.breeds.map((breed, index) => (
  //   <div key={index} className="col-md-6 col-lg-4">
  //     <div className="card mb-4">
  //       <p>{breed.name} are Bred for {breed.bred_for}</p>
  //     </div>
  //   </div>
  // ));
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={dog.url}
          className="card-img-top"
          alt={`${dog.id} image`}
        />
        <p>{dog[1]}</p>
      </div>
    </div>
  );
};
export default Dog;
