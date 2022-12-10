#!/bin/bash

echo "BUILDING TAILWIND CSS"
yarn tailwindcss -i ./themes/catppuccin-latte/static/css/tailwind-input.css -o ./themes/catppuccin-latte/static/css/main.css

echo "STARTING HUGO SERVER"
hugo server
