import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal';
import React from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: "Item 1", details: "This is item 1 details" },
    { id: 2, name: "Item 2", details: "This is item 2 details" },
    { id: 3, name: "Item 3", details: "This is item 3 details" },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => openModal(item)}>
            {item.name}
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{selectedItem?.name}</h2>
        <p>{selectedItem?.details}</p>
      </Modal>
    </div>
  );
};

export default App;
