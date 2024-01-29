# Check OS and configure core.autocrlf in Git
if ($env:OSTYPE -like 'darwin*' -or $env:OSTYPE -like 'linux-gnu') {
  git config --global core.autocrlf input
}
else {
  git config --global core.autocrlf true
}

# Check if Node.js and npm are installed
if (Get-Command -Name node -ErrorAction SilentlyContinue -and Get-Command -Name npm -ErrorAction SilentlyContinue) {
  Write-Host "Node.js and npm are already installed."
}
else {
  Write-Host "Error: Node.js and npm are not installed. Please install them."
  exit 1
}

# Install dependencies and run npm commands
npm install
npm run lint
npm run fmt
npm run dev
