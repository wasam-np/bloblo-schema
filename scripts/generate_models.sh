#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

SCHEMA_DIR="schemas"
PACKAGES_DIR="packages"

# Ensure output directories exist
mkdir -p "$PACKAGES_DIR/npm/src"
mkdir -p "$PACKAGES_DIR/nuget"

echo "Generating TypeScript models for npm..."
quicktype -s schema "$SCHEMA_DIR/block.schema.json" --lang typescript -o "$PACKAGES_DIR/npm/src/blocks_block.ts"

echo "Generating C# models for NuGet..."
quicktype -s schema "$SCHEMA_DIR/block.schema.json" --lang csharp -o "$PACKAGES_DIR/nuget/BlocksBlock.cs"


echo "Code generation complete."