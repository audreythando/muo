import React from 'react';
import './Counter.css'

const CounterData=[
    {
      number: '10+' ,
      text:'Years of Experience',
    },
    {
      number: '200+'  ,
      text:'Running Projects',
    },
    {
      number: '10+'  ,
      text:'Digital Services'
    }
]

const Counter = () => {
  return (
    <section className='counter'>
<div className="container">
<div className="container-wrapper">
    {
        CounterData.map((item, index)=>(
            <div className="counter-item" key={index}>
            <h3 className="counter-number">{item.number}</h3> 
            <h4 className="counter-title">{item.text}</h4>
         </div>
        ))
    }
  
</div>
</div>
    </section>
  );
}

export default Counter;
