#!/bin/fish

# Check OS and configure core.autocrlf in Git
if string match --regex --entire $OSTYPE 'darwin.*'
    git config --global core.autocrlf input
else if string match --regex --entire $OSTYPE 'linux-gnu'
    git config --global core.autocrlf input
else
    git config --global core.autocrlf true
end

# Check if Node.js and npm are installed
if command -v node >/dev/null && command -v npm >/dev/null
    echo "Node.js and npm are already installed."
else
    echo "Error: Node.js and npm are not installed. Please install them."
    exit 1
end

# Install dependencies and run npm commands
npm install
npm run lint
npm run fmt
npm run dev
