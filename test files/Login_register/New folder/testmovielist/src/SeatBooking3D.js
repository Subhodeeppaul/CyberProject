import React, { useRef, useEffect, useState } from 'react';
//import { useHistory } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function SeatBooking3D() {
  //const history = useHistory();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const controlsRef = useRef();
  const rendererRef = useRef();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const numRows = 11;
  const numCols = 15;

  const calculateSeatPrice = (row) => {
    const groupIndex = Math.floor(row / 3);

    if (groupIndex === 0) {
      return '$200';
    } else if (groupIndex === 1) {
      return '$150';
    } else {
      return '$100';
    }
  };

  const handleSeatClick = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((seatIndex) => seatIndex !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  const calculateTotalAmount = () => {
    const totalPrice = selectedSeats.reduce((total, seatIndex) => {
      const row = Math.floor(seatIndex / numCols);
      return total + parseFloat(calculateSeatPrice(row).substring(1));
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handlePayment = () => {
    // Handle payment logic here
    // For this example, we'll just show an alert
    alert('Payment successful! Thank you for booking.');
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.z = 10;

    const seatsGroup = new THREE.Group();
    scene.add(seatsGroup);

    const seatGeometry = new THREE.BoxGeometry(1, 1, 1);
    const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const seat = new THREE.Mesh(seatGeometry, seatMaterial);
        seat.position.x = col * 2 - numCols;
        seat.position.y = row * 2 - numRows;
        seatsGroup.add(seat);
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    sceneRef.current = scene;
    cameraRef.current = camera;
    controlsRef.current = controls;
    rendererRef.current = renderer;
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
          <div style={{ backgroundColor: 'white', padding: '5px' }}>
            <h3>Selected Seats:</h3>
            {selectedSeats.map((seatIndex) => (
              <span key={seatIndex}>{seatIndex + 1}, </span>
            ))}
            Total Amount: ${calculateTotalAmount()}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '70px', // Adjust the positioning as needed
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white',
            }}
          >
            
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 50px)`,
            gap: '5px',
            width: '70%',
            margin: 'auto',
          }}
        >
          {Array.from({ length: numRows }).map((_, row) =>
            Array.from({ length: numCols }).map((_, col) => {
              const index = row * numCols + col;
              const isSelected = selectedSeats.includes(index);
              const seatStyle = {
                width: '50px',
                height: '50px',
                backgroundColor: isSelected ? '#FF5733' : '#00ff00',
                border: '1px solid #000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                animation: isSelected ? 'seatSelected 0.3s ease-in-out' : 'none',
              };
              const priceStyle = {
                fontSize: '12px',
                fontWeight: 'bold',
                color: isSelected ? '#FF5733' : 'inherit',
              };
              return (
                <div
                  key={index}
                  style={seatStyle}
                  onClick={() => handleSeatClick(index)}
                >
                  {index + 1}
                  <div style={priceStyle}>{calculateSeatPrice(row)}</div>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={handlePayment}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            position: 'absolute',
            bottom: '20px', // Adjust the positioning as needed
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#00ff00',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            transition: 'background-color 0.3s ease',
          }}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default SeatBooking3D;
