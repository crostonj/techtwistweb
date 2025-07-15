#!/bin/bash

# Environment Setup Script
# This script helps you switch between different environment configurations

set -e

ENVIRONMENTS=("local" "development" "production")
ENV_DIR="$(dirname "$0")"

show_help() {
    echo "Environment Setup Script"
    echo ""
    echo "Usage: $0 [ENVIRONMENT]"
    echo ""
    echo "Available environments:"
    for env in "${ENVIRONMENTS[@]}"; do
        echo "  - $env"
    done
    echo ""
    echo "Examples:"
    echo "  $0 local       # Set up for local development"
    echo "  $0 development # Set up for development environment"
    echo "  $0 production  # Set up for production environment"
    echo ""
    echo "This script will copy the appropriate .env.[ENVIRONMENT] file to .env"
}

setup_environment() {
    local env=$1
    local env_file=".env.$env"
    local target_file=".env"
    
    if [[ ! -f "$env_file" ]]; then
        echo "Error: Environment file '$env_file' not found!"
        echo "Available files:"
        ls -la .env.* 2>/dev/null || echo "No environment files found"
        exit 1
    fi
    
    echo "Setting up environment: $env"
    echo "Copying $env_file to $target_file"
    
    # Backup existing .env if it exists
    if [[ -f "$target_file" ]]; then
        echo "Backing up existing .env to .env.backup"
        cp "$target_file" ".env.backup"
    fi
    
    # Copy the environment file
    cp "$env_file" "$target_file"
    
    echo "✅ Environment '$env' has been set up successfully!"
    echo ""
    echo "Current configuration:"
    echo "======================"
    grep -E "^(REACT_APP_|NODE_ENV|MONGO_)" "$target_file" | head -10
}

# Main script logic
if [[ $# -eq 0 ]] || [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    show_help
    exit 0
fi

REQUESTED_ENV=$1

# Validate environment
if [[ ! " ${ENVIRONMENTS[*]} " =~ " $REQUESTED_ENV " ]]; then
    echo "Error: Invalid environment '$REQUESTED_ENV'"
    echo ""
    show_help
    exit 1
fi

# Setup the environment
setup_environment "$REQUESTED_ENV"
