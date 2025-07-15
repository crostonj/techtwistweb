# Environment Setup Script for Windows PowerShell
# This script helps you switch between different environment configurations

param(
    [Parameter(Position=0)]
    [ValidateSet("local", "development", "production", "help")]
    [string]$Environment = "help"
)

$Environments = @("local", "development", "production")

function Show-Help {
    Write-Host "Environment Setup Script" -ForegroundColor Green
    Write-Host ""
    Write-Host "Usage: .\setup-env.ps1 [ENVIRONMENT]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Available environments:" -ForegroundColor Cyan
    foreach ($env in $Environments) {
        Write-Host "  - $env" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Cyan
    Write-Host "  .\setup-env.ps1 local       # Set up for local development" -ForegroundColor White
    Write-Host "  .\setup-env.ps1 development # Set up for development environment" -ForegroundColor White
    Write-Host "  .\setup-env.ps1 production  # Set up for production environment" -ForegroundColor White
    Write-Host ""
    Write-Host "This script will copy the appropriate .env.[ENVIRONMENT] file to .env" -ForegroundColor Gray
}

function Setup-Environment {
    param([string]$env)
    
    $envFile = ".env.$env"
    $targetFile = ".env"
    
    if (-not (Test-Path $envFile)) {
        Write-Error "Environment file '$envFile' not found!"
        Write-Host "Available files:" -ForegroundColor Yellow
        Get-ChildItem -Filter ".env.*" | ForEach-Object { Write-Host "  $($_.Name)" }
        exit 1
    }
    
    Write-Host "Setting up environment: $env" -ForegroundColor Green
    Write-Host "Copying $envFile to $targetFile" -ForegroundColor Gray
    
    # Backup existing .env if it exists
    if (Test-Path $targetFile) {
        Write-Host "Backing up existing .env to .env.backup" -ForegroundColor Yellow
        Copy-Item $targetFile ".env.backup" -Force
    }
    
    # Copy the environment file
    Copy-Item $envFile $targetFile -Force
    
    Write-Host "✅ Environment '$env' has been set up successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Current configuration:" -ForegroundColor Cyan
    Write-Host "======================" -ForegroundColor Cyan
    
    # Show relevant configuration
    Get-Content $targetFile | Where-Object { $_ -match "^(REACT_APP_|NODE_ENV|MONGO_)" } | Select-Object -First 10 | ForEach-Object {
        Write-Host $_ -ForegroundColor White
    }
}

# Main script logic
if ($Environment -eq "help" -or $Environment -eq "") {
    Show-Help
    exit 0
}

# Setup the environment
Setup-Environment -env $Environment
