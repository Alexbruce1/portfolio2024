const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    console.log(`Received message: ${message}`); // Log incoming message for debugging

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // 'gpt-3.5-turbo' or 'gpt-4'
        messages: [{ role: 'user', content: message }],
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
