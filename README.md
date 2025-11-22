Brainly 
Brainly is a full-stack web application designed to help users store, organize, and share online content they care about — all in one place. Whether it’s a YouTube video or a tweet, Brainly lets you save it, categorize it, and view it later in a clean card-based layout.
🔐 User Authentication
Secure signup & login using JWT and hashed passwords (bcrypt).

➕ Add & Manage Content
Save YouTube videos or Tweets with title and type selection.

🗂️ Smart Categorization
Filter your saved content by type (YouTube / Twitter).

✨ Preview Embedded Media
YouTube videos and Tweets render directly inside the app.

🔗 Share Your Brain
Generate a unique shareable link to showcase your saved content.

🗑️ Delete Content
Remove stored items anytime.

🎨 Beautiful, Modern UI
Built with clean UX, responsive design & TailwindCSS.
| Layer          | Technology                                  |
| -------------- | ------------------------------------------- |
| Frontend       | React + TypeScript + Axios + TailwindCSS    |
| Backend        | Node.js + Express.js                        |
| Database       | MongoDB + Mongoose                          |
| Authentication | JWT + bcrypt                                |
| Validation     | Zod                                         |
| Other          | React Icons, iFrame embeds, Shareable links |

| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| POST   | `/api/v1/signup`           | Register a new user         |
| POST   | `/api/v1/signin`           | Login and receive JWT token |
| POST   | `/api/v1/content`          | Add a new content item      |
| GET    | `/api/v1/content`          | Fetch all user content      |
| DELETE | `/api/v1/content`          | Delete a content item       |
| POST   | `/api/v1/brain/share`      | Enable shareable link       |
| GET    | `/api/v1/brain/:shareLink` | Access shared brain         |

📸 Sample UI

Cards with action icons and embedded media for quick viewing

<img width="1895" height="862" alt="image" src="https://github.com/user-attachments/assets/4da1138a-63ba-48a7-9393-b8ea889b1e6d" />

🧩 Future Enhancements

✔️ Tags system with filtering

✔️ Social login

📚 Bookmark categories / folders

👥 Public collections & collaboration

🕵️ Search functionality
