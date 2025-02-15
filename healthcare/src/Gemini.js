import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateResponse(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error:", error);
        return "Failed to fetch response.";
    }
}

/*
To use Chatbot
import { generateResponse } from "./Gemini";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    const result = await generateResponse(input);
    setResponse(result);
  };

*/


/*
Sample Code

import { useState } from "react";
import { generateResponse } from "./Gemini";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    const result = await generateResponse(input);
    setResponse(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Google Gemini AI Chat</h2>
      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <br />
      <button onClick={handleGenerate}>Generate Response</button>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default App;

*/


