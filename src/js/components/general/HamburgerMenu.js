import '../../../HamburgerMenu.css';
import React, { useState, useEffect } from 'react';

export default function HamburgerMenu() {


  // function pointer_coordinate(ev) {
  //   const mouse_ele = document.getElementById('mouse_graphic'),
  //         height    = mouse_ele.offsetHeight / 2,
  //         width     = mouse_ele.offsetWidth / 2;

  //   setMousePosition({
  //     left: ev.clientX - width, 
  //     top:  ev.clientY - height
  //   }); 
  // }

  // useEffect(() => {
  //   document.addEventListener('mousemove', ev => pointer_coordinate(ev));
  // },[]); // pass empty array to make sure it only fires once


  return(
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}