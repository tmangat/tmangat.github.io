import os
import json

# Get the current working directory
current_folder = os.getcwd()

# Supported image file extensions
supported_extensions = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"}

# Get a list of image files in the current folder
images = [
    file for file in os.listdir(current_folder)
    if os.path.isfile(file) and os.path.splitext(file)[1].lower() in supported_extensions
]

# Save the list to a JSON file
output_file = "../../js/!gc.json"
with open(output_file, "w") as f:
    json.dump(images, f, indent=4)

print(f"Image list saved to {output_file}")
