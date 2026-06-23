@echo off
setlocal
cd /d "%~dp0"

echo =====================================
echo FarmSec Next.js Frontend
ECHO =====================================

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 20.9 or later and run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing project packages...
  call npm install
  if errorlevel 1 (
    echo Package installation failed.
    pause
    exit /b 1
  )
)

echo Starting FarmSec at http://localhost:3000
call npm run dev
pause
