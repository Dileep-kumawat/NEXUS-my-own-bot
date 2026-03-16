# 🤖 Nexus Terminal AI

A simple **AI-powered terminal chatbot** built with **Node.js**, **LangChain**, and **Mistral AI**.
This project allows users to interact with an AI assistant directly from the terminal.

The assistant (named **Nexus**) can answer questions, generate text, and maintain conversation context during a session.

---

## 📸 Demo

![Nexus Terminal AI Screenshot](./preview.png)

---

# 🚀 Features

* 💬 Interactive **terminal-based AI chatbot**
* 🧠 Powered by **Mistral AI**
* 🔗 Built using **LangChain**
* 🎨 Colored terminal interface using **Chalk**
* 📝 Conversation memory during the session
* ❌ Exit anytime using `/exit`

---

# 🛠️ Tech Stack

* **Node.js**
* **LangChain**
* **Mistral AI**
* **Chalk**
* **Prompt-sync**
* **dotenv**

---

# 📂 Project Structure

```
nexus-terminal-ai
│
├── node_modules
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/nexus-terminal-ai.git
```

### 2️⃣ Navigate to the project folder

```bash
cd nexus-terminal-ai
```

### 3️⃣ Install dependencies

```bash
npm install
```

---

# 🔑 Environment Setup

Create a `.env` file in the root folder.

```
MISTRAL_API_KEY=your_api_key_here
```

Get your API key from:

👉 [https://console.mistral.ai/](https://console.mistral.ai/)

---

# ▶️ Running the Project

Start the AI assistant using:

```bash
node server.js
```

---

# 💬 Example Usage

```
======================================
        NEXUS TERMINAL AI
      Type /exit to quit
======================================

You > Hello
NEXUS > Hey! How can I help you today?

You > Who is the president of India?
NEXUS > The current president of India is Droupadi Murmu.
```

---

# 🧠 How It Works

1. The user enters a prompt in the terminal.
2. The message is sent to **Mistral AI** using **LangChain**.
3. The AI generates a response.
4. The response is printed in the terminal with styling.
5. The conversation history is stored to maintain context.

Core code snippet:

```javascript
const res = await model.invoke(messages);
const reply = res.content[1].text;
```

---

# 📦 Dependencies

* `@langchain/mistralai`
* `langchain`
* `chalk`
* `prompt-sync`
* `dotenv`

Install them with:

```bash
npm install @langchain/mistralai langchain chalk prompt-sync dotenv
```

---

# ❌ Exit the Assistant

Simply type:

```
/exit
```

---

# 📌 Future Improvements

* Streaming responses
* Better conversation memory
* Command handling
* CLI arguments support
* Multi-model support
* Saving chat history

---

# 👨‍💻 Author

Developed by **Dileep**