# Trace Log - Implementation Plan

## Phase 1: Backend Core (& Monitoring)
1.  **Project Initialization**: Set up FastAPI and project structure.
2.  **Database Schema**: Define SQLite models using SQLAlchemy for Events (type, timestamp, description, metadata).
3.  **File Monitor**: Implement a service using `watchdog` to track a specified directory.
4.  **USB Monitor**: Implement a service using `WMI` (for Windows) to detect USB insertion/removal.
5.  **API Endpoints**:
    *   `GET /api/events`: Retrieve events with filtering by date/type.
    *   `GET /api/status`: Check monitoring status.

## Phase 2: Frontend Dashboard
1.  **Vite + React Setup**: Initialize the frontend project.
2.  **Design System**: Create a modern, dark-themed UI with a focus on a "Timeline" view.
3.  **Visualizations**:
    *   Interactive Timeline using CSS/Framer Motion.
    *   Activity summary (counts of file vs USB vs download events).

## Phase 3: Advanced Features
1.  **Download Tracking**: Specific tracking for browser downloads directory.
2.  **System Tray Icon**: (Optional) Allow the app to run in the background.
3.  **Export Data**: Export logs to CSV/JSON.

## Tech Stack
-   **Backend**: Python, FastAPI, SQLAlchemy, SQLite, `watchdog`, `WMI`.
-   **Frontend**: React, Vite, Vanilla CSS, Lucide-React (icons).
