@echo off
echo Setting up Trace Log...

echo [1/2] Setting up Backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
cd ..

echo [2/2] Setting up Frontend...
cd frontend
npm install
cd ..

echo Setup Complete! 
echo To run the app, use 'npm run dev' in frontend and 'python main.py' in backend/venv.
pause
