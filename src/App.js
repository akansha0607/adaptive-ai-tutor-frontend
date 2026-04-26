import { useState } from "react";
import axios from "axios";

export default function App() {
  const [topic, setTopic] = useState("Java Multithreading");
  const [level, setLevel] = useState("normal");
  const [explanation, setExplanation] = useState("");
  const [answer, setAnswer] = useState("");
  const [evalData, setEvalData] = useState(null);
  const [steps, setSteps] = useState([]);

  const explain = async () => {
    const res = await axios.post("https://adaptive-ai-tutor-backend-46786342728.asia-south1.run.app/ai/explain", {
      topic,
      level
    });
    setExplanation(res.data);
  };

  const evaluate = async () => {
    const res = await axios.post("https://adaptive-ai-tutor-backend-46786342728.asia-south1.run.app/ai/evaluate", {
      topic,
      answer
    });
    setEvalData(res.data);
  };

  const formatExplanation = (text) => {
    const parts = text.split("###");
    return parts.map((p, i) => (
      <div key={i} style={{
        marginBottom: 15,
        padding: 12,
        borderRadius: 10,
        background: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}>
        <strong>{p.split("\n")[0]}</strong>
        <p>{p.substring(p.indexOf("\n"))}</p>
      </div>
    ));
  };

  const simulate = async () => {
    const res = await axios.post("https://adaptive-ai-tutor-backend-46786342728.asia-south1.run.app/ai/simulate", { topic });

    const timeline = (res.data.steps || []).map((item) => {
      const values = Object.values(item);
      return {
        t1: values[0] || "",
        t2: values[1] || ""
      };
    });

    setSteps(timeline);
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: 30,
      fontFamily: "Arial",
      background: "linear-gradient(135deg, #e0f2fe, #f8fafc)"
    }}>

      {/* Heading */}
      <h1 style={{
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #2563eb, #06b6d4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: 30
      }}>
        Adaptive AI Tutor – Personalized Learning at Scale
      </h1>

      {/* Topic */}
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: 10, borderRadius: 8, width: "300px" }}
      />

      {/* Levels */}
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setLevel("kid")}>👶 Simple</button>
        <button onClick={() => setLevel("normal")}>🎓 Normal</button>
        <button onClick={() => setLevel("deep")}>🧑‍💻 Deep</button>
      </div>

      <button onClick={explain} style={{ marginTop: 10 }}>
        Explain
      </button>

      {/* Explanation */}
      <h2>📘 Explanation</h2>
      <p>{explanation && formatExplanation(explanation)}</p>

      {/* Simulation */}
      {explanation && (
        <>
          <button onClick={simulate}>▶️ Run Simulation</button>

          <h3 style={{ marginTop: 20, textAlign: "center" }}>📅 Timeline</h3>

          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: 14,
                padding: 16,
                borderRadius: 14,

                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#1e293b",

                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "all 0.25s ease",
                cursor: "pointer",

                borderLeft: "4px solid #3b82f6"
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}

              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
              }}

              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: 6 }}>
                📍 {s.t1}
              </div>
              <div style={{ opacity: 0.85 }}>
                → {s.t2}
              </div>
            </div>
          ))}
        </>
      )}

      {/* Answer */}
      <h2>🧠 Your Answer</h2>
      <textarea
        rows="4"
        cols="50"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <button onClick={evaluate}>Check Understanding</button>

      {/* Evaluation */}
      {evalData && (
        <div style={{
          border: "1px solid #ddd",
          padding: 15,
          marginTop: 20,
          borderRadius: 10,
          background: "#ffffff"
        }}>
          <h2>📊 Evaluation</h2>
          <p>🧠 Understanding: {evalData.understanding}</p>

          <p style={{
            color: evalData.score > 70 ? "green" :
                   evalData.score > 40 ? "orange" : "red",
            fontWeight: "bold"
          }}>
            📈 Score: {evalData.score}%
          </p>

          <h4>❌ Missing</h4>
          <ul>
            {evalData.missingConcepts?.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h4>✅ Strengths</h4>
          <ul>
            {evalData.strengths?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h4>➡️ Next Step</h4>
          <p>{evalData.nextStep}</p>
        </div>
      )}
    </div>
  );
}