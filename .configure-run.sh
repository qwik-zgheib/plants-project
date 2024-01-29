#!/bin/bash

# Check OS and configure core.autocrlf in Git
if [[ "$OSTYPE" == "darwin"* ]]; then
    git config --global core.autocrlf input
elif [[ "$OSTYPE" == "linux-gnu" ]]; then
    git config --global core.autocrlf input
else
    git config --global core.autocrlf true
fi

# Check if Node.js and npm are installed
if command -v node >/dev/null && command -v npm >/dev/null; then
    echo "Node.js and npm are already installed."
else
    echo "Error: Node.js and npm are not installed. Please install them."
    exit 1
fi

# Install dependencies and run npm commands
npm install
npm run lint
npm run fmt
npm run dev
