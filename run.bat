@echo off
echo VetCare Pro - Run Application
echo ===========================
echo.

echo Choose how to run the application:
echo.
echo 1. Start development server (npm run start:dev)
echo 2. Start production server (npm start)
echo 3. Clean and start development server (npm run dev:clean)
echo 4. Clean, build and start production server (npm run start:clean)
echo 5. Exit
echo.

set /p OPTION=Enter your choice (1-5): 

if "%OPTION%"=="1" (
  echo.
  echo Starting development server...
  npm run start:dev
) else if "%OPTION%"=="2" (
  echo.
  echo Starting production server...
  npm start
) else if "%OPTION%"=="3" (
  echo.
  echo Cleaning and starting development server...
  npm run dev:clean
) else if "%OPTION%"=="4" (
  echo.
  echo Cleaning, building and starting production server...
  npm run start:clean
) else if "%OPTION%"=="5" (
  echo.
  echo Exiting...
  exit /b
) else (
  echo.
  echo Invalid option. Please try again.
  exit /b
)