#!/bin/bash

# Kitchen Sync - Offline Mode (MacOS/Linux)
# This script runs the local VLM sync using Ollama.

echo "--- Pallav's Kitchen: Offline Sync ---"

# Check if Ollama is running
if ! pgrep -x "ollama" > /dev/null
then
    echo "Error: Ollama is not running. Please start Ollama first."
    exit 1
fi

# Run the offline sync python script
python3 kitchen-sync/scripts/sync_offline.py

echo "--- Sync Complete! ---"
