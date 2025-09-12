"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkepzpb");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form 
		onSubmit={handleSubmit}
		className='flex flex-col mx-4 mt-2'
		>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
				className='text-xl txt5 border-2 border-black mb-2'
				placeholder='Your email adress...'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
				className='text-xl txt5 border-2 border-black h-30'
				placeholder='Write your message here...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
				type="submit"
				disabled={state.submitting}
				className='col3 txt2 w-30 m-auto mt-2 rounded-2xl border-3 border-[#56d722] active:border-5]'
				>
        Submit
      </button>
    </form>
  );
}

