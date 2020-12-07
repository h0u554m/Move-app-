import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

import Modal from "./Modal"


const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [runTime, setRunTime] = useState("");
  const [genre, setGenre] = useState("");

  const handleRating = (rate) => setRating(rate);

  const toggleModal = () => setShow(!show);
  const resetModal = () => {
    setName("");
    setImage("");
    setDate("");
    setRating(0);
    setRunTime("");
  };

  useEffect(() => {
    resetModal();
  }, [show]);

  return (
    <div>
      
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newMovie = {
              name,
              image,
              date,
              rating,
              id: Math.random(),
            };
            addMovie(newMovie);
            toggleModal();
          }}
        >
          <h1>Add Movie </h1>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Date of Release</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Run Time</label>
          <input
            required
            type="text"
            value={runTime}
            onChange={(e) => setRunTime(e.target.value)}
          />
          <label>Genre</label>
          <input
            required
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <label>Image URL</label>
          <input
            required
            value={image}
            type="url"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Rate</label>

<StarRating handleRating={handleRating} movieRating={rating} />
          <Modal isOpen={show} closeModal={toggleModal}></Modal>
          <div>
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-danger" onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </form>
  
    </div>
  );
};

export default AddMovie;