import React, { useState, useEffect } from "react";

const MovieSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(220);

  useEffect(() => {
    populateUI();
  }, []);

  const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
  };

  const updateSelectedCount = () => {
    const availableSeats = document.querySelectorAll(".row .seat:not(.sold)");
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map((seat) =>
      Array.from(availableSeats).indexOf(seat)
    );

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    setSelectedSeats(seatsIndex);
  };

  const populateUI = () => {
    const selectedSeatsFromLocalStorage = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeatsFromLocalStorage && selectedSeatsFromLocalStorage.length > 0) {
      setSelectedSeats(selectedSeatsFromLocalStorage);
    }

    const selectedMovieIndexFromLocalStorage = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndexFromLocalStorage !== null) {
      setTicketPrice(Number(localStorage.getItem("selectedMoviePrice")));
    }
  };

  const handleMovieSelectChange = (e) => {
    const moviePrice = Number(e.target.value);
    setTicketPrice(moviePrice);
    setMovieData(e.target.selectedIndex, moviePrice);
    updateSelectedCount();
  };

  return (
    <div>
      <div className="movie-container">
        <label> Select a movie:</label>
        <select id="movie" onChange={handleMovieSelectChange} value={ticketPrice}>
          <option value="220">Godzilla vs Kong (RS.220)</option>
          <option value="320">Radhe (RS.320)</option>
          <option value="250">RRR (RS.250)</option>
          <option value="260">F9 (RS.260)</option>
        </select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat sold"></div>
          <small>Sold</small>
        </li>
      </ul>
      <div className="container">
        <div className="screen"></div>

        <div className="row">
          {/* Add more rows and seats here */}
        </div>
      </div>

      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seat for a price of RS.
        <span id="total">{selectedSeats.length * ticketPrice}</span>
      </p>
    </div>
  );
};

export default MovieSeatBooking;
