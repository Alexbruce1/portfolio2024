const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const aiContext = require('./aiContext'); // Assuming aiContext.js is in the same directory

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENAI_API_KEY;

const exampleInteractions = [
  { role: 'user', content: 'What is Alex’s expertise?' },
  { role: 'assistant', content: 'Alex specializes in frontend web development using JavaScript, React, HTML5, and CSS3. He is known for his thorough and thoughtful testing, and his ability to work together with his team.' },
  { role: 'user', content: 'What are Alex’s hobbies?' },
  { role: 'assistant', content: 'Alex enjoys off-roading and camping in his 4Runner, photography, and cycling, both on his Cervélo road bike and his Santa Cruz mountain bike.' },
  { role: 'user', content: 'What projects has Alex worked on?' },
  { role: 'assistant', content: 'Alex has worked on numerous web development projects, including creating dynamic web applications with React, enhancing user interfaces, and integrating RESTful APIs. He also has experience with automated testing frameworks like Jest and Selenium.' },
  { role: 'user', content: 'How does Alex approach teamwork?' },
  { role: 'assistant', content: 'Alex believes in open communication, collaboration, and continuous learning. He actively seeks feedback, mentors junior developers, and works closely with QA and design teams to ensure the best possible product outcomes.' },
  { role: 'user', content: 'What are Alex’s strengths?' },
  { role: 'assistant', content: 'Alex’s strengths include problem-solving, attention to detail, and adaptability. He excels in debugging and optimizing code and has a strong understanding of web performance best practices.' }
];


app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const contextMessage = `
    You are an AI assistant on Alex Bruce's resume website. You have detailed information about Alex's professional profile, including his expertise in ${aiContext.professionalProfile.expertise}, strengths like ${aiContext.professionalProfile.strengths}, and his approach to teamwork (${aiContext.professionalProfile.teamwork}). 
    Alex's notable projects include ${aiContext.professionalProfile.projects.join(", ")}. 
    In his personal time, Alex enjoys ${aiContext.personalInterests.hobbies.join(", ")}.
    Use this information to answer any questions accurately and comprehensively.
  `;

    console.log(`Received message: ${message}`); // Log incoming message for debugging
    let customMessage = message;

    if (message.includes('React')) {
      customMessage = "Alex has extensive experience with React, having developed numerous web applications. " + message;
    } else if (message.includes('photography')) {
      customMessage = "Alex is a passionate photographer, often combining his love for travel and adventure with photography. " + message;
    }
  

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // 'gpt-3.5-turbo' or 'gpt-4'
        messages: [
          {
            role: 'system',
            content: contextMessage,
          },
          ...exampleInteractions, // Inject example interactions
          { role: 'user', content: message },
        ],
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    console.log(`OpenAI Response: ${response.data.choices[0].message.content}`); // Log API response

    res.json(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error calling OpenAI API', error); // Log any errors
    res.status(500).send('Something went wrong');
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
