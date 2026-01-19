📌 TraceLog – Endpoint Activity Tracking Platform
🧠 Overview

TraceLog is a host-based device activity monitoring system designed to track file system operations, USB usage, and user activity timelines on a local machine.
The system helps users answer questions like:

“What did I work on yesterday?”

“Which file was deleted and when?”

“When was a USB device connected?”

This project is especially useful for students, shared systems, productivity analysis, and digital forensics.

🎯 Objectives

Track file creation, modification, and deletion

Maintain a timeline of user activity

Monitor USB and external device connections

Provide accountability on shared devices

Support digital forensic analysis

Improve productivity awareness

🚀 Key Features

📂 File Activity Tracking (Create / Edit / Delete)

🕒 Timeline View of daily activities

💾 USB & External Device Monitoring

🔍 Search by File Name or Date

🧾 Detailed Logs for Forensic Use

🗄️ Local SQLite Database

🔐 No Internet Required – Fully Offline

🛠️ Technology Stack
Component	Technology
Language	Python 3.x
Database	SQLite
OS	Windows / Linux
Libraries	watchdog, psutil
UI	Python-based dashboard
Storage	Local logs & database

📁 Project Structure
Device-Tracking-System/
│
├── docs/              # Documentation & diagrams
├── src/
│   ├── core/          # System-level monitoring
│   ├── tracker/       # File & USB tracking
│   ├── logs/          # Activity logs
│   ├── database/      # SQLite DB handling
│   ├── ui/            # Dashboard & timeline view
│   ├── utils/         # Helper utilities
│   └── main.py        # Entry point
│
├── tests/             # Test cases
├── screenshots/       # UI screenshots
├── requirements.txt
├── README.md
└── run.bat / run.sh

⚙️ Installation & Setup
🔹 Prerequisites

Python 3.8 or above

pip package manager

🔹 Step 1: Clone or Download
git clone https://github.com/your-username/TraceLog.git
cd TraceLog


OR
Download ZIP → Extract

🔹 Step 2: Install Dependencies
pip install -r requirements.txt

🔹 Step 3: Run the Application
python src/main.py

🖥️ How It Works

Application runs locally in the background

Tracks:

File operations
USB insert/remove events

Stores logs in:
SQLite database
Log files

Dashboard displays:

Daily timeline
Searchable activity history

🔐 Security & Privacy

✔ Runs locally only
✔ No cloud or internet dependency
✔ No personal data upload
✔ Logs stored securely on device
This project follows ethical monitoring principles and is intended for educational and forensic purposes.

🧪 Example Use Cases

Students tracking study/work progress
Shared laptop accountability
Accidental file deletion recovery
USB-based malware investigation
Digital forensic evidence collection

📸 Screenshots

Screenshots available in the screenshots/ folder
(Dashboard, logs view, USB tracking)

🎓 Academic Relevance

Cyber Security
Digital Forensics
Operating Systems
System Monitoring
Host-Based Intrusion Detection Concepts

🧠Explanation

“TraceLog is a host-based endpoint activity monitoring system that records file and device activities locally to support productivity analysis and digital forensic investigations.”

🔮 Future Enhancements

Cloud backup (optional)
User authentication
Real-time alerts
Encrypted log storage
Hybrid web dashboard

📜 License

This project is licensed for educational use only.
Unauthorized commercial usage is not permitted.


⭐ Acknowledgment

Inspired by real-world problems in:

File loss recovery
Shared device accountability
Digital forensic investigations
