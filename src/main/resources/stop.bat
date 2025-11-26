@echo off
setlocal enabledelayedexpansion

echo Searching for HeavenMS server process...

REM Function to find PID
set PID=

REM Method 1: Try to find using tasklist
for /f "tokens=2 delims=," %%i in ('tasklist /fo csv ^| findstr "java.exe" ^| findstr "net.server.Server"') do (
    set PID=%%i
    goto :found
)

:found

REM Method 2: Try to read from PID file if it exists
if "!PID!"=="" (
    if exist "heavenms.pid" (
        set /p PID=<heavenms.pid
    )
)

if "!PID!"=="" (
    echo HeavenMS server process not found.
    echo Make sure the server is running.
    exit /b 1
) else (
    echo Found HeavenMS server process with PID: !PID!
    
    REM Check if process actually exists
    tasklist /fi "PID eq !PID!" 2>NUL | find /I "!PID!" >NUL
    if errorlevel 1 (
        echo Process !PID! does not exist.
        REM Clean up stale PID file if it exists
        if exist "heavenms.pid" (
            del /f heavenms.pid
        )
        exit /b 1
    )
    
    echo Stopping server...
    
    REM Attempt graceful shutdown
    taskkill /PID !PID!
    
    REM Wait a moment for graceful shutdown
    timeout /t 10 /nobreak >NUL
    
    REM Check if process is still running
    tasklist /fi "PID eq !PID!" 2>NUL | find /I "!PID!" >NUL
    if errorlevel 1 (
        echo Server stopped successfully.
    ) else (
        echo Server did not stop gracefully. Forcing termination...
        taskkill /F /PID !PID!
        echo Server terminated.
    )
    
    REM Clean up PID file if it exists
    if exist "heavenms.pid" (
        del /f heavenms.pid
    )
)