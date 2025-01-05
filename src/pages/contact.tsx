"use client"
import React, { useState } from "react";

// Define the function component
const Contact = () => {
    const [name, setName] = useState<string>('');  // Explicitly typing state variables
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    
    // Handle form submission with proper typing for event
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prepare data for submission
        const data = { name, phone, email, desc };
        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
            console.log('success', data);
            alert('Information has been Submitted..Thanks For Contacting Us');
            setName('');
            setPhone('');
            setEmail('');
            setDesc('');
        })
        .catch((error) => {
            console.error('Error', error);
        });
    };

    // Handle input changes with proper typing for event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'desc') {
            setDesc(value);
        }
    };

    return (
        <div className="max-w-xl relative left-96 mt-6 rounded-lg">
            <h1 className="text-center text-3xl mb-4 underline-offset-2 font-bold">Contact Us</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 rounded" 
                        id="name" 
                        placeholder="Your Name" 
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block font-medium">Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={phone} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 rounded" 
                        id="phone" 
                        placeholder="Your Contact Number" 
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 rounded" 
                        id="email" 
                        placeholder="Enter Valid Email" 
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block font-medium">Description</label>
                    <textarea 
                        id="description" 
                        name="desc" 
                        value={desc} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 rounded" 
                        placeholder="Your message here..."
                    />
                </div>

                <button 
                    type="submit" 
                    className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
