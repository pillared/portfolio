#!/usr/bin/env bash
# Run this in your project root, after `next export`

echo "Predeploy initializing."
mkdir -p out/portfolio

# Move everything inside out/ except the new portfolio folder itself into out/portfolio
shopt -s extglob  # enable extended pattern matching (bash only)
mv out/!(portfolio) out/portfolio/
echo "Predeploy complete!"
