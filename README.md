```markdown
# 📚 StudyCast - AI-Powered Textbook Learning Platform

Transform your textbooks into engaging, multi-format learning experiences powered by cutting-edge AI.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-blue)](https://python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue)](https://postgresql.org/)
[![Claude AI](https://img.shields.io/badge/Claude-AI-orange)](https://anthropic.com/)

> **StudyCast** isn't just a study tool — it's your AI-powered learning companion that makes education accessible, engaging, and effective. Upload once, learn everywhere.

---

## ✨ Features Overview

### 🎓 **Smart Textbook-to-Podcast Conversion**
Upload any textbook, research paper, or study material (PDF, DOCX, or TXT) and instantly transform it into a **conversational, podcast-style explanation**.

The app analyzes your document, understands the content, and generates a natural dialogue between two AI hosts who break down complex material in an engaging, human-like conversation.

### 🧠 **AI-Powered Deep Understanding**
Our system doesn't just read — it *comprehends*.

Powered by **Claude AI (Anthropic's advanced LLM)**, the app intelligently analyzes uploaded content to:
* Identify main topics, key concepts, and learning objectives
* Simplify complex explanations while maintaining academic accuracy
* Create natural conversational flow between two distinct speakers
* Adapt tone and pacing for optimal educational delivery

This transforms dense textbooks and academic materials into accessible, enjoyable learning experiences.

### 📝 **Comprehensive Smart Summaries**
Alongside the podcast, the AI generates **detailed yet digestible summaries** — perfect for quick revision, note-taking, or exam preparation.

Each summary includes:
* Key takeaways and core concepts
* Important definitions and terminology
* Supporting examples and real-world applications
* Logical structure that mirrors the original content

It's like having a personal tutor condense your textbook into the most important points.

### 🔊 **High-Quality Text-to-Speech Audio**
Once the podcast script is generated, the app uses **professional-grade Text-to-Speech (TTS)** to create clear, natural-sounding audio.

Two distinct AI voices engage in dialogue, making the content feel like a real educational podcast you can enjoy anywhere — while commuting, exercising, or studying.

Powered by industry-leading TTS services:
* **Google Cloud Text-to-Speech** (natural, expressive voices)
* **Amazon Polly** (high-quality neural voices)
* Optimized audio output for seamless playback

### ✅ **Interactive Quiz Generation**
Test your understanding with **auto-generated quizzes** tailored to your uploaded content.

Each quiz features:
* Multiple-choice questions targeting key concepts
* Varying difficulty levels from recall to application
* Instant feedback with detailed explanations
* Score tracking to monitor your progress

Turn passive reading into active learning with immediate comprehension checks.

### 📚 **Immersive Multi-Format Learning**
No more staring at endless pages of dense text — now you can **read, listen, and test** your knowledge.

The platform combines:
* Clean, intuitive file uploader with drag-and-drop support
* Beautiful text viewer for summaries and transcripts
* Integrated audio player with playback controls
* Interactive quiz interface with progress tracking

Transform studying from a chore into an engaging, multi-sensory experience.

### 🧩 **Complete Intelligent Pipeline**
Each uploaded document flows through a sophisticated AI processing system:

1. 📄 **Upload Document** (PDF, DOCX, or TXT)
2. 🔍 **Extract & Parse** text content intelligently
3. 🧠 **AI Analysis** via Claude API for deep comprehension
4. 🎙️ **Generate Podcast Script** with natural dialogue
5. 📝 **Create Summary** with key insights
6. ✅ **Build Custom Quiz** testing core concepts
7. 🔊 **Convert to Audio** using premium TTS
8. 💾 **Store Results** in PostgreSQL database

Access your processed materials anytime — re-listen to podcasts, review summaries, or retake quizzes for mastery.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible components
- **TypeScript** - Type-safe JavaScript

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **PostgreSQL** - Relational database
- **Multer** - File upload handling
- **pg** - PostgreSQL client

### AI & Processing
- **Python 3.9+** - AI processing service
- **Claude AI (Anthropic)** - Advanced language model
- **PyPDF2 / pdfplumber** - PDF text extraction
- **python-docx** - Word document processing
- **Google Cloud TTS / Amazon Polly** - Text-to-speech

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **PostgreSQL Cloud** - Database hosting

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://python.org/))
- **PostgreSQL** ([Download](https://postgresql.org/))
- **Git** ([Download](https://git-scm.com/))

You'll also need API keys for:
- **Claude API** (Anthropic) - [Get API Key](https://console.anthropic.com/)
- **Google Cloud TTS** or **Amazon Polly** - For text-to-speech

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/studycast.git
cd studycast
```

#### 2. Setup Frontend

```bash
cd frontend
npm install
```

Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### 3. Setup Backend

```bash
cd ../backend
npm install
```

Create `.env` file:
```env
# Server
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/studycast

# API Keys
CLAUDE_API_KEY=your_claude_api_key_here
GOOGLE_APPLICATION_CREDENTIALS=path/to/google-credentials.json
# OR for Amazon Polly
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads
AUDIO_OUTPUT_DIR=./audio_outputs
```

#### 4. Setup Python Service

```bash
cd python_service
python -m venv venv

# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

Create `requirements.txt`:
```txt
anthropic==0.18.1
PyPDF2==3.0.1
pdfplumber==0.10.3
python-docx==1.1.0
Flask==3.0.0
google-cloud-texttospeech==2.16.3
# OR
boto3==1.34.59
python-dotenv==1.0.1
```

Create `.env` in `python_service`:
```env
CLAUDE_API_KEY=your_claude_api_key_here
GOOGLE_APPLICATION_CREDENTIALS=path/to/google-credentials.json
```

#### 5. Setup Database

```bash
# Create PostgreSQL database
createdb studycast

# Or using psql
psql -U postgres
CREATE DATABASE studycast;
\q
```

Create database schema by running the SQL migration:

```sql
-- Create tables
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS uploads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    filepath VARCHAR(500) NOT NULL,
    filetype VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS processing_results (
    id SERIAL PRIMARY KEY,
    upload_id INTEGER REFERENCES uploads(id) ON DELETE CASCADE,
    extracted_text TEXT,
    summary TEXT,
    podcast_script TEXT,
    audio_filepath VARCHAR(500),
    quiz_data JSONB,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_uploads_user_id ON uploads(user_id);
CREATE INDEX idx_uploads_status ON uploads(status);
CREATE INDEX idx_processing_upload_id ON processing_results(upload_id);
```

### Running the Application

#### Development Mode

Open three separate terminal windows:

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# or
node server.js
```
Backend will run on `http://localhost:5000`

**Terminal 3 - Python Service (if running separately):**
```bash
cd backend/python_service
source venv/bin/activate  # On Windows: venv\Scripts\activate
python app.py
```
Python service will run on `http://localhost:8000`

#### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📖 Usage Guide

### Step 1: Upload Your Document
1. Click the upload area or drag and drop your file
2. Supported formats: PDF, DOCX, TXT
3. Maximum file size: 10MB

### Step 2: Wait for Processing
- Text extraction: ~10-30 seconds
- AI summary generation: ~30-60 seconds
- Podcast script creation: ~60-90 seconds
- Audio generation: ~30-60 seconds
- Quiz generation: ~20-40 seconds

**Total processing time: 2-5 minutes** depending on document length

### Step 3: Access Your Content

#### Summary Tab
- Read the comprehensive AI-generated summary
- Download as text file for offline access
- Copy key points for note-taking

#### Podcast Tab
- Listen to the AI-generated dialogue
- View the full transcript
- Download audio file (MP3)
- Adjust playback speed

#### Quiz Tab
- Answer multiple-choice questions
- Get instant feedback
- View explanations for each answer
- Track your score
- Retake quiz to improve understanding

---

## 🏗️ Project Structure

```
studycast/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js 14 App Router
│   │   │   ├── page.tsx     # Landing page
│   │   │   ├── upload/      # Upload page
│   │   │   ├── results/     # Results pages
│   │   │   └── layout.tsx   # Root layout
│   │   ├── components/      # React components
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── FileUpload.tsx
│   │   │   ├── AudioPlayer.tsx
│   │   │   └── Quiz.tsx
│   │   └── services/        # API service layer
│   │       └── api.ts
│   ├── public/              # Static assets
│   ├── package.json
│   └── next.config.js
│
├── backend/                  # Node.js/Express backend
│   ├── routes/              # API routes
│   │   ├── upload.js
│   │   ├── results.js
│   │   └── status.js
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── middleware/          # Express middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── config/              # Configuration
│   │   └── database.js
│   ├── utils/               # Utility functions
│   ├── python_service/      # Python AI processing
│   │   ├── text_extractor.py
│   │   ├── ai_processor.py
│   │   ├── audio_generator.py
│   │   ├── app.py           # Flask/FastAPI wrapper
│   │   └── requirements.txt
│   ├── uploads/             # Temporary file storage
│   ├── audio_outputs/       # Generated audio files
│   ├── server.js            # Express app entry
│   └── package.json
│
├── .gitignore
├── README.md
└── render.yaml              # Render deployment config
```

---

## 🚀 Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Configure project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
   ```

6. Click "Deploy"

### Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure service:
   - **Name:** studycast-backend
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** 
     ```bash
     npm install && cd python_service && pip install -r requirements.txt
     ```
   - **Start Command:** `npm start`

5. Add Environment Variables:
   ```
   NODE_ENV=production
   DATABASE_URL=your_postgresql_url
   CLAUDE_API_KEY=your_claude_key
   FRONTEND_URL=https://your-frontend.vercel.app
   GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json
   ```

6. Create PostgreSQL Database on Render:
   - Click "New +" → "PostgreSQL"
   - Note the connection string and add to backend environment variables

7. Click "Create Web Service"

### Post-Deployment

1. Verify both services are running
2. Test file upload end-to-end
3. Monitor logs for any errors
4. Set up custom domains (optional)

---

## 🧪 Testing

### Run Tests

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test

# Python tests
cd backend/python_service
pytest
```

### Manual Testing Checklist

- [ ] File upload (PDF, DOCX, TXT)
- [ ] Processing status updates
- [ ] Summary generation quality
- [ ] Podcast script naturalness
- [ ] Audio playback
- [ ] Quiz functionality
- [ ] Error handling
- [ ] Mobile responsiveness

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** "Cannot connect to database"
```bash
# Check PostgreSQL is running
pg_isready

# Verify connection string in .env
# Format: postgresql://user:password@host:port/database
```

**Issue:** "Claude API rate limit exceeded"
```bash
# Implement retry logic with exponential backoff
# Check your API usage at console.anthropic.com
```

**Issue:** "File upload fails"
```bash
# Check file size limits
# Verify upload directory exists and has write permissions
mkdir -p backend/uploads backend/audio_outputs
chmod 755 backend/uploads backend/audio_outputs
```

**Issue:** "Python service not responding"
```bash
# Ensure virtual environment is activated
source backend/python_service/venv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt
```

---

## 📊 Roadmap

- [ ] Multi-language support
- [ ] Custom voice selection
- [ ] Collaborative study groups
- [ ] Mobile app (React Native)
- [ ] Browser extension for quick uploads
- [ ] Integration with learning management systems (LMS)
- [ ] Advanced analytics and progress tracking
- [ ] Spaced repetition for quizzes
- [ ] Export to Anki flashcards

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/israelolrunfemi)
- Email: OlorunfemiIsrael2@gmail.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- [Anthropic](https://anthropic.com/) for Claude AI
- [Vercel](https://vercel.com/) for frontend hosting
- [Render](https://render.com/) for backend hosting
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- All contributors and testers

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search [existing issues](https://github.com/yourusername/studycast/issues)
3. Open a [new issue](https://github.com/yourusername/studycast/issues/new)
4. Contact: your.email@example.com

---

<div align="center">

**Made with ❤️ for students everywhere**

[⬆ Back to Top](#-studycast---ai-powered-textbook-learning-platform)

</div>
