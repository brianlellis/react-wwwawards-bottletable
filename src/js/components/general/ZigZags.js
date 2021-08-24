import React, { useState, useEffect } from 'react';

export function OrangeZigZag() {
  const [OrangeZigZagPosition, setOrangeZigZagPosition] = useState({
    x: 0,
    y: 0
  });

  function pointer_coordinate(ev) {
    const ele       = document.getElementById('zig_zag_orange'),
          rect_box  = ele.getBoundingClientRect(),
          bottom    = rect_box.bottom,
          left      = rect_box.left;

    setOrangeZigZagPosition({
      x: ev.clientX / left,
      y: ev.clientY / bottom
    }); 
  }

  useEffect(() => {
    document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  },[]); // pass empty array to make sure it only fires once

  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 963.3 1139.4" 
      className="zig_zag orange"
      id="zig_zag_orange"
      style={{
        transform: `translate(${OrangeZigZagPosition.x * -60}px, ${OrangeZigZagPosition.y * -100}px)`
      }}
    >
      <path d="M48,265.1c0,0,305.9-241.6,423.2-176.4s156.1,127.8-48.7,360.5S264,744.5,559.9,735.5c295.9-8.9,385.8-19.2,299.6,75.4s-417,287.6-417,287.6"></path>
    </svg>
  );
}

export function PinkZigZag() {
  const [PinkZigZagPosition, setPinkZigZagPosition] = useState({
    x: 0,
    y: 0
  });

  function pointer_coordinate(ev) {
    const ele       = document.getElementById('zig_zag_pink'),
          rect_box  = ele.getBoundingClientRect(),
          bottom    = rect_box.bottom,
          left      = rect_box.left;

    setPinkZigZagPosition({
      x: ev.clientX / left,
      y: ev.clientY / bottom
    }); 
  }

  useEffect(() => {
    document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  },[]); // pass empty array to make sure it only fires once

  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1710.8 520" 
      className="zig_zag pink"
      id="zig_zag_pink"
      style={{
        transform: `translate(${PinkZigZagPosition.x * -30}px, ${PinkZigZagPosition.y * 10}px)`
      }}
    >
      <path d="M45.6,387.4l247-289.4l201.5,289.4c0,0,246.7-222.2,300.9-257.1c26.4,45,103,170.2,158.5,225.7L1241,159.9L1391.5,399L1679,218.7"></path>
    </svg>
  );
}

export function BlueZigZag() {
  const [BlueZigZagPosition, setBlueZigZagPosition] = useState({
    x: 0,
    y: 0
  });

  function pointer_coordinate(ev) {
    const ele       = document.getElementById('zig_zag_blue'),
          rect_box  = ele.getBoundingClientRect(),
          bottom    = rect_box.bottom,
          left      = rect_box.left;

    setBlueZigZagPosition({
      x: ev.clientX / left,
      y: ev.clientY / bottom
    }); 
  }

  useEffect(() => {
    document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  },[]); // pass empty array to make sure it only fires once

  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 943.4 497.1" 
      className="zig_zag blue" 
      id="zig_zag_blue"
      style={{
        transform: `translate(${BlueZigZagPosition.x * 20}px, ${BlueZigZagPosition.y * 100}px)`
      }}
    >
      <path d="M54.5,421c88-111,198-364.1,403.7-351c245.1,15.5,350.5,279.1,429.4,385.8"></path>
    </svg>
  );
}