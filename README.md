# C2-Hacks-2025
 UBCO C2 Hacks Hackathon 2025; Central Theme: Reinvent an existing technology

# Instagram – Comment Well-Being Demo

This project is a **browser-based prototype** that reimagines Instagram with a focus on **mental well-being**.

Instead of letting users fall into toxic comment sections, our interface:
- **Detects harmful language**
- **Hides or rewrites toxic comments**
- **Adds friction** when you try to post something harmful
- Gives a **global “comment health” overview** of the feed

We built this in **one day at a hackathon** using only **HTML, CSS, and JavaScript**.

---

## 🎯 Problem

Social media comments can be:
- Emotionally draining  
- Full of harassment, hate, or subtle negativity  
- Difficult to avoid once you start reading

Current platforms mostly rely on:
- Manual reporting
- Optional filters that are hard to find
- “Don’t read the comments” culture, which puts the burden on the user

We wanted to **protect users by default**, without waiting for moderation.

---

## 💡 Our Idea

We created a prototype of **“Instagram with Comment Intelligence”**:

- **Toxic comments** are **detected and blocked by default**
- You can **choose** to reveal them, but it requires **intentional actions**
- When you try to **post a toxic comment**, the **Post button runs away**  
- A simple **AI layer** rewrites harsh comments into **kinder versions**
- A **global AI panel** shows the overall **toxicity level** of the feed

The goal isn’t censorship — it’s **well-being by design**.

---

## ✨ Key Features

### 1. Instagram-style UI
- Dark theme similar to Instagram
- **Top navigation bar** with “Home”, “Messages”, “About”
- **Stories bar** at the top (fake stories for the demo)
- **5 demo posts** with:
  - Username
  - Timestamp
  - Image or video
  - Like / Comment / Repost / Share buttons

### 2. Smart Comment Section
For each post:
- Click **“Comments”** to toggle the comment section
- Comments are analyzed by our fake AI:
  - **Supportive comments** get a green “Supportive” badge
  - **Toxic comments** are:
    - **Hidden by default** and replaced by `[Blocked toxic comment]`
    - Labeled with “Hidden for your well-being”
- Button: **“Show all comments (including blocked)”** lets users reveal content **only if they choose**.

### 3. AI Rewrites for Harsh Comments
- For comments flagged as toxic, the user can click:
  - **“Show kinder version”**
- The text is replaced by a **softer, de-escalated version** using a simple rewrite function.

> In a real product, this would call an actual LLM / moderation API.  
> In this hackathon prototype, we simulate this behavior locally.

### 4. Runaway “Post” Button (Playful Friction)
- Each post has a **comment box** (“Add a comment…”)
- When the user types a **toxic comment** (containing words from our list) and moves the mouse toward **Post**:
  - The **Post button literally jumps away** from the cursor
  - A counter updates:  
    > “Instagram has protected you X times so far by stopping harmful comments.”
- If the user still tries to click **Post** with a toxic message:
  - We **block the submission**
  - Show an alert suggesting they rephrase it in a kinder way

This introduces **micro-friction** for harmful behavior instead of punishing after the fact.

### 5. Global AI Well-Being Panel

On the right side:
- **Overall toxicity meter** (0–100%)
- Text tag like:
  - “Mostly safe 🙂”
  - “Mixed environment 😐”
  - “High toxicity ⚠️”
- Summary message recommending how to interact with the feed
- Pills showing:
  - `X toxic comment(s) detected`
  - `Y supportive comment(s)`

This simulates a **“mental weather forecast”** for your feed.

---

## 🛠️ Tech Stack

- **HTML** – structure
- **CSS** – dark theme & Instagram-style UI
- **Vanilla JavaScript** – all logic:
  - Fake AI analysis
  - DOM rendering
  - Comment filtering & rewrite
  - Runaway button behavior
  - Global toxicity summary

No frameworks. No backend. Everything runs **in the browser**.

---

## 🚀 How to Run

1. Clone or download this project.
2. Make sure these files are together in one folder:
   - `index.html`
   - `design.css`
   - `code.js`
   - `fish.jpg` (or any image with that filename for demo posts; you can replace it)
   - (Optional) Any video files if you use the `video` field in posts
3. Open the project in **VS Code**.
4. Install the **Live Server** extension (if you don’t have it).
5. Right-click `index.html` → **“Open with Live Server”**.

Your browser should open the demo Instagram page.

---

## 🧪 How the “AI” Works (Hackathon Version)

We simulate AI with simple keyword analysis:

```js
const toxicWords = ["dumb", "stupid", "trash", "idiot", "ugly", "hate", "kill"];
const positiveWords = ["love", "great", "amazing", "cool", "thanks", "appreciate", "keep", "happy"];
