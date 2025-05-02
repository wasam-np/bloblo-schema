#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

SCHEMA_DIR="schemas"
PACKAGES_DIR="packages"

# Ensure output directories exist
mkdir -p "$PACKAGES_DIR/npm/src"
mkdir -p "$PACKAGES_DIR/nuget"

echo "Generating TypeScript models for npm..."
#quicktype -s schema -o "$PACKAGES_DIR/npm/src/blocks_block.ts" "$SCHEMA_DIR/block.schema.json"
quicktype -s typescript -o "$PACKAGES_DIR/npm/src/blocks_block.ts" "$SCHEMA_DIR/block.schema.ts"

echo "Generating C# models for NuGet..."
#quicktype -s schema -o "$PACKAGES_DIR/nuget/BlocksBlock.cs" "$SCHEMA_DIR/block.schema.json"
quicktype -s typescript -l cs -o "$PACKAGES_DIR/nuget/BlocksBlock.cs" "$SCHEMA_DIR/block.schema.ts"


echo "Code generation complete."