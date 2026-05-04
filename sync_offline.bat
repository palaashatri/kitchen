@echo off
title Pallav's Kitchen: Offline Sync
echo --- Pallav's Kitchen: Offline Sync (Windows) ---

:: Check if python is available
where python >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Error: Python not found. Please install Python.
    pause
    exit /b 1
)

:: Run the offline sync python script
python kitchen-sync/scripts/sync_offline.py

echo --- Sync Complete! ---
pause
