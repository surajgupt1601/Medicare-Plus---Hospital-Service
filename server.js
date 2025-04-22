const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/symptom-check', async (req, res) => {
  const { symptoms } = req.body;

  const prompt = `User symptoms: "${symptoms}". Provide a possible diagnosis and treatment advice in simple terms.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    // console.log("Gemini response:", JSON.stringify(data, null, 2)); // DEBUG

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received. Try again.";
    res.json({ diagnosis: reply });
  } catch (error) {
    console.error("Error from Gemini:", error);
    res.status(500).json({ error: "Gemini API failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
