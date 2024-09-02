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
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className='ai-text-field'
        />
        <button type="submit" className='ai-form-submit'>Send</button>
      </form>
      {loading ? <p>Loading...</p> : response && <p>Response: {response}</p>}
    </div>
  );
};

export default AI;









// import React, { useState } from 'react';
// import axios from 'axios';

// function ChatGPTIntegration() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSendMessage = async () => {
//     try {
//       // Make a request to your backend server
//       const result = await axios.post('/api/chat', { message: input });
//       setResponse(result.data);
//     } catch (error) {
//       console.error('Error calling backend API', error);
//     }
//   };

//   return (
//     <div>
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask me anything..."
//       />
//       <button onClick={handleSendMessage}>Send</button>
//       {response && <div>{response}</div>}
//     </div>
//   );
// }

// export default ChatGPTIntegration;



// src/AI.js
// src/AI.js
