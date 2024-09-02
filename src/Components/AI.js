import React, { useState } from 'react';
import './AI.css';
import axios from 'axios';

const AI = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLoading(true);
      try {
        const result = await axios.post('http://localhost:5001/api/openai', { prompt: input });
        setResponse(result.data.message);
      } catch (error) {
        console.error('Error fetching response:', error);
        setResponse('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='AI'>
      <form onSubmit={handleSubmit}>
        <div className='ai-text-field'>
          <p
            className='ai-field-input'
            contentEditable
            onInput={(e) => setInput(e.currentTarget.textContent)} 
            role="textbox"
            aria-placeholder="I'm ChatGPT. I can assist you with information about Alex as a software engineer."
            data-placeholder="I'm ChatGPT. I can assist you with information about Alex as a software engineer."
          ></p>
          <button type="submit" className='ai-form-submit'>Send</button>
        </div>
      </form>
      {loading ? <p>Loading...</p> : response && <p>Response: {response}</p>}
    </div>
  );
};

export default AI;