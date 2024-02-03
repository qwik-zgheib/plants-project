#!/bin/zsh

# Get information about the operating system
osType=$(uname)

# Print the variable for debugging
echo "Operating system detected: $osType"

# Check if it is Linux or Unix
if [[ $osType == *nix* || $osType == Linux ]]; then
    echo "Configuring Git for Unix or Linux systems: Converting line endings to LF on clone and upload."
    git config --global core.autocrlf input
# Check if it is Windows
elif [[ $osType == CYGWIN* || $osType == MINGW* ]]; then
    echo "Setting up Git for Windows systems: Converting line endings to CRLF on clone and upload."
    git config --global core.autocrlf true
else
    echo "Unrecognized operating system. core.autocrlf not set."
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
