# Check OS and configure core.autocrlf in Git
if ($env:OSTYPE -like 'darwin*' -or $env:OSTYPE -like 'linux-gnu') {
  git config --global core.autocrlf input
  Write-Host "First option"
}
else {
  git config --global core.autocrlf true
  Write-Host "Second option"
}

# Check if Node.js is installed
if (Get-Command -Name node -ErrorAction SilentlyContinue) {
    Write-Host "Node.js is already installed."
} else {
    Write-Host "Error: Node.js is not installed. Please install it."
    exit 1
}

# Check if npm is installed
if (Get-Command -Name npm -ErrorAction SilentlyContinue) {
    Write-Host "npm is already installed."
} else {
    Write-Host "Error: npm is not installed. Please install it."
    exit 1
}

# Install dependencies and run npm commands
npm install
npm run lint
npm run fmt
npm run dev
