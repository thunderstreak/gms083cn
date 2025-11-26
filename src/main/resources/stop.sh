#!/bin/bash

# Stop script for HeavenMS Server

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Searching for HeavenMS server process...${NC}"

# Function to find PID
find_pid() {
    local pid=""
    
    # Method 1: Try to find using jps
    if command -v jps >/dev/null 2>&1; then
        pid=$(jps | grep -v "Jps" | grep "Server" | awk '{print $1}' | head -n 1)
    fi

    # Method 2: Try to find using ps if jps didn't work
    if [[ -z "$pid" ]] && command -v ps >/dev/null 2>&1; then
        pid=$(ps aux | grep "net.server.Server" | grep -v grep | awk '{print $2}' | head -n 1)
    fi

    # Method 3: Try to read from PID file if it exists
    if [[ -z "$pid" ]] && [[ -f "heavenms.pid" ]]; then
        pid=$(cat heavenms.pid 2>/dev/null)
    fi
    
    echo "$pid"
}

# Find the process ID
PID=$(find_pid)

if [[ -z "$PID" ]]; then
    echo -e "${RED}HeavenMS server process not found.${NC}"
    echo "Make sure the server is running."
    exit 1
else
    echo -e "${GREEN}Found HeavenMS server process with PID: $PID${NC}"
    
    # Check if process actually exists
    if ! kill -0 "$PID" 2>/dev/null; then
        echo -e "${RED}Process $PID does not exist.${NC}"
        # Clean up stale PID file if it exists
        if [[ -f "heavenms.pid" ]]; then
            rm -f heavenms.pid
        fi
        exit 1
    fi
    
    echo -e "${YELLOW}Stopping server...${NC}"
    
    # Send SIGTERM first for graceful shutdown
    kill "$PID"
    
    # Wait for graceful shutdown (up to 30 seconds)
    TIMEOUT=30
    while [[ $TIMEOUT -gt 0 ]] && kill -0 "$PID" 2>/dev/null; do
        echo -n "."
        sleep 1
        ((TIMEOUT--))
    done
    
    if kill -0 "$PID" 2>/dev/null; then
        echo
        echo -e "${YELLOW}Server did not stop gracefully. Forcing termination...${NC}"
        kill -9 "$PID"
    else
        echo
        echo -e "${GREEN}Server stopped successfully.${NC}"
    fi
    
    # Clean up PID file if it exists
    if [[ -f "heavenms.pid" ]]; then
        rm -f heavenms.pid
    fi
fi