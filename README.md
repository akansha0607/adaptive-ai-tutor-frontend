# 📘 Frontend README.md

````md
# 🚀 AI Adaptive Tutor Frontend

A modern React-based frontend for the AI Adaptive Tutor platform that delivers personalized concept explanations, interactive simulations, and AI-powered learning assessments.

---

## 🌟 Features

- 🧠 Topic-based AI explanations
- 🎓 Learning modes:
  - Simple
  - Normal
  - Deep Dive
- 🎬 Dynamic simulation timeline for any topic
- 📊 AI-powered understanding evaluation
- 📈 Score indicators and personalized feedback
- 🎨 Attractive hackathon-ready UI

---

## 🏗️ Tech Stack

- React.js
- Axios
- JavaScript
- CSS / Inline Styling
- VS Code

---

## ⚙️ Setup Instructions

### Clone Repository
```bash
git clone <frontend-repo-url>
cd frontend
````

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

## 🔗 Backend Connection

Ensure backend is running at:

```bash
http://localhost:8081
```

Integrated APIs:

* POST `/ai/explain`
* POST `/ai/evaluate`
* POST `/ai/simulate`

---

## 📂 Project Structure

```bash
frontend/
├── public/
├── src/
│   ├── App.js
│   ├── api.js
│   └── components/
└── package.json
```

---

## 🎯 Demo Flow

1. Enter a topic
2. Select learning mode
3. Generate explanation
4. Run live simulation
5. Submit understanding
6. Receive AI evaluation

---

## 🏆 Highlights

* Personalized learning experience
* Dynamic timeline visualization
* Hackathon-grade polished UI
* Adaptive educational workflow

---

## 🚀 Future Enhancements

* Dark mode dashboard
* User authentication
* Progress tracking
* Quiz engine
* Voice interaction

---

## 📢 Tagline

**Learn Smarter. Not Harder.**

````

---

# 📙 Backend README.md

```md
# 🚀 AI Adaptive Tutor Backend

A Spring Boot-powered intelligent backend system for personalized AI tutoring, concept simulation, and understanding evaluation.

---

## 🌟 Features

- 🧠 AI-generated concept explanations
- 📊 Structured understanding evaluation
- 🎬 Dynamic topic simulations
- 🔗 Groq / Gemini / OpenAI API integration
- ⚡ RESTful APIs
- ☁️ Cloud deployment ready

---

## 🏗️ Tech Stack

- Java 17
- Spring Boot
- Maven
- REST APIs
- Groq API / LLM APIs
- IntelliJ IDEA

---

## ⚙️ Setup Instructions

### Clone Repository
```bash
git clone <backend-repo-url>
cd backend
````

### Configure Environment Variable

```bash
export GROQ_API_KEY=your_api_key_here
```

### Run Application

```bash
mvn spring-boot:run
```

Runs on:

```bash
http://localhost:8081
```

---

## 📂 Project Structure

```bash
backend/
├── src/main/java/com/learning/ai/
│   ├── controller/
│   ├── service/
│   └── model/
├── src/main/resources/
│   └── application.properties
└── pom.xml
```

---

## 🔌 API Endpoints

### Explain Concept

### POST `/ai/explain`

```json
{
  "topic": "Java Multithreading",
  "level": "normal"
}
```

---

### Evaluate Understanding

### POST `/ai/evaluate`

```json
{
  "topic": "Java Multithreading",
  "answer": "Threads improve performance"
}
```

---

### Simulate Topic

### POST `/ai/simulate`

```json
{
  "topic": "Kafka Architecture"
}
```

---

## 🧪 Sample curl Commands

### Explain

```bash
curl -X POST http://localhost:8081/ai/explain \
-H "Content-Type: application/json" \
-d '{
  "topic": "Java Multithreading",
  "level": "normal"
}'
```

### Evaluate

```bash
curl -X POST http://localhost:8081/ai/evaluate \
-H "Content-Type: application/json" \
-d '{
  "topic": "Java Multithreading",
  "answer": "Threads improve performance"
}'
```

### Simulate

```bash
curl -X POST http://localhost:8081/ai/simulate \
-H "Content-Type: application/json" \
-d '{
  "topic": "Russia Ukraine War"
}'
```

---

## 🔒 Environment Variables

```bash
GROQ_API_KEY=your_api_key_here
```

---

## 🏆 Highlights

* AI-driven adaptive learning engine
* Personalized concept evaluation
* Topic-agnostic simulations
* Production-ready architecture
* Hackathon-winning differentiation

---

## 🚀 Future Enhancements

* Kafka integration
* Persistent learning history
* Analytics dashboard
* Multi-model AI routing
* Scalable cloud deployment

---

## 📢 Core Vision

**Explain → Simulate → Evaluate → Personalize**

Building the future of intelligent education.

```
```
