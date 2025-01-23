@echo off
:install_requirements
echo Do you want to download the requirements? (y/n)
set /p input=
if /i "%input%"=="y" (
    pip install -r requirements.txt
    goto choose_file
) else if /i "%input%"=="n" (
    goto choose_file
) else (
    echo Invalid response. Please type "y" or "n".
    goto install_requirements
)

:choose_file
echo Do you want to execute:
echo [01]. Python Bot
echo [02]. JavaScript Bot
set /p choice=""
if "%choice%"=="1" (
    python python/main.py
    goto end
) else if "%choice%"=="2" (
    node JavaScript/main.js
    goto end
) else (
    echo Invalid choice. Please enter 1 or 2.
    goto choose_file
)

:end
pause
