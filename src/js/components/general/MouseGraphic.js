import React, { useState, useEffect } from 'react';

export default function MouseGraphic() {
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top:  0
  });

  const [MouseSize, setMouseSize] = useState({
    width: 0,
    height: 0
  });

  function pointer_coordinate(ev) {
    var x = ev.clientX, // clientX gives horizontal coordinate
        y = ev.clientY; // clientY gives vertical coordinates

    
    if (MousePosition.left !== x && MousePosition.top !== y) {
      setMousePosition({
        left: ev.pageX - MouseSize.width, 
        top:  ev.pageY - MouseSize.height
      }); 
    }
  }

  useEffect(() => {
    const mouse_ele = document.getElementById('mouse_graphic'),
          height    = mouse_ele.offsetHeight / 2,
          width     = mouse_ele.offsetWidth / 2;

    setMouseSize({
      height: height,
      width:  width
    });
    document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  },[]); // pass empty array to make sure it only fires once


  return(
    <div 
      style={{left:MousePosition.left , top: MousePosition.top}}
      id="mouse_graphic"
    ></div>
  );
}