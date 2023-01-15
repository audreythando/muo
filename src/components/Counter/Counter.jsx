import React from "react";
import "./Counter.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GrServices } from "react-icons/gr";

const Counter = () => {
  return (
    <div class="counter-up">
      <div class="content">
        <div class="box">
          <div class="icon">
            <i>{BsFillEmojiSmileFill}</i>
          </div>
          <div class="counter">200+</div>
          <div class="text">Running Projects</div>
        </div>
        <div class="box">
          <div class="icon">
            <i>{AiFillStar}</i>
          </div>
          <div class="counter">10+</div>
          <div class="text">Years of Experience</div>
        </div>
        <div class="box">
          <div class="icon">
            <i>{GrServices}</i>
          </div>
          <div class="counter">10+</div>
          <div class="text">Digital Services</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
