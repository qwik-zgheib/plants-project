# Get information about the operating system
$osType = $env:OS

# Print the variable for debugging
Write-Host "Operating system detected: $osType"

# Check if it is Linux
if ($osType -like 'Unix' -or $osType -like 'Linux') {
    Write-Host "Configuring Git for Unix or Linux systems: Converting line endings to LF on clone and upload."
    git config --global core.autocrlf input
}
# Check if it is Windows
elseif ($osType -like 'Windows_NT') {
    Write-Host "Setting up Git for Windows systems: Converting line endings to CRLF on clone and upload."
    git config --global core.autocrlf true
}
else {
    Write-Host "Unrecognized operating system. core.autocrlf not set."
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
