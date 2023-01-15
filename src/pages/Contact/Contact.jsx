import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import Header from '../../components/Header/Header';
import './Contact.css'

const Contact = () => {
    const [name , setName]=useState('');
    const [email , setEmail]=useState('');
    const [message , setMessage]=useState('');

   
  const changeNameHandler = (e)=> {
    setName(e.target.value);

    e.preventDefault();
  }
  const changeEmailHandler = (e)=> {
    setEmail(e.target.value)
  }
  const changeMessageHandler = (e) => {
    setMessage(e.target.value)

  }

    const {register, formState : {errors}, handleSubmit} =useForm();

    const formSubmit = (data)=> {
        console.log(JSON.stringify(data));
    }

    return (
      <>
      <Header title='CONTACT US'/>
        <div className='contact'>
        
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit(formSubmit)}>
                        {/* <h2><span>Contact</span> Us</h2> */}
                        <h4>For any queries regarding our services kindly fill in your details:
</h4>
                        <div>
                            <label>Name</label>
                            <input type="text" 
                            placeholder='Name'
                            value={name}
                           {...register("name", { required: true })} 
                            onChange={changeNameHandler}
                            />
                              {errors.name && <p> Enter Name</p>}
                            
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" 
                            placeholder='Email'
                            value={email}
                            
                               {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i, })} 
                            onChange={changeEmailHandler}
                            />
                                     {errors.email?.type === "required" &&  <p>Email is required</p>}
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea  rows='10'
                            type='text'
                             placeholder='Message'
                             value={message}
                            
                              {...register("message", { required: true })} 
                              onChange={changeMessageHandler}
                            />
                            {errors.message?.type === 'required' && <p>Write Message</p>}
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
