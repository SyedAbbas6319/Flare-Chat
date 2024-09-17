import { useState } from "react";
import OpenAI from "openai";

const HaikuGenerator = () => {
  const [haiku, setHaiku] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHaiku = async () => {
    setLoading(true);
    try {
      const openai = new OpenAI();

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: "Write a haiku about recursion in programming.",
          },
        ],
      });

      setHaiku(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching haiku:", error);
      setHaiku("Error fetching haiku.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Recursion Haiku Generator</h1>
      <button onClick={generateHaiku} disabled={loading}>
        {loading ? "Generating..." : "Generate Haiku"}
      </button>
      {haiku && <p>{haiku}</p>}
    </div>
  );
};

export default HaikuGenerator;
