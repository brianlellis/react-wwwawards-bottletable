import React, { useState, useEffect } from 'react';

export default function MouseGraphic() {
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top:  0
  });

  function pointer_coordinate(ev) {
    const mouse_ele = document.getElementById('mouse_graphic'),
          height    = mouse_ele.offsetHeight / 2,
          width     = mouse_ele.offsetWidth / 2;

    setMousePosition({
      left: ev.clientX - width, 
      top:  ev.clientY - height
    }); 
  }

  useEffect(() => {
    document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  },[]); // pass empty array to make sure it only fires once


  return(
    <div 
      style={{left:MousePosition.left , top: MousePosition.top}}
      id="mouse_graphic"
    ></div>
  );
}