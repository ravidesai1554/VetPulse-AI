@echo off
echo VetCare Pro - Starting Application
echo ===============================
echo.

echo This script will start the VetCare Pro application.
echo.

echo Options:
echo 1. Start development server (npm run dev)
echo 2. Build and start production server (npm run build && npm run start)
echo 3. Clean, build and start production server (clean + build + start)
echo 4. Exit
echo.

set /p OPTION=Enter your choice (1-4): 

if "%OPTION%"=="1" (
  echo.
  echo Starting development server...
  npm run dev
) else if "%OPTION%"=="2" (
  echo.
  echo Building and starting production server...
  npm run build && npm run start
) else if "%OPTION%"=="3" (
  echo.
  echo Cleaning, building and starting production server...
  rimraf .next out && npm run build && npm run start
) else if "%OPTION%"=="4" (
  echo.
  echo Exiting...
  exit /b
) else (
  echo.
  echo Invalid option. Please try again.
  exit /b
)