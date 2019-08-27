#!/usr/bin/env bash
set -e

# The directory that contains the original exported hubble assets
HUBBLE_INPUT_DIR="$(dirname "$0")/hubble-assets"

# The root directory of the folder structure we are outputting to
HUBBLE_OUTPUT_ROOT_DIR="$(dirname "$0")/../src"

HUBBLE_IMAGES_ROOT_DIR="${HUBBLE_OUTPUT_ROOT_DIR}/common/assets/images"
HUBBLE_OUTPUT_IMAGES_DIR="${HUBBLE_IMAGES_ROOT_DIR}/hubble"

# delete_from_pattern(folderPath: OS Path, pattern: string): void
# Performs recursive find in given folderPath and then removes every file matching the pattern
function delete_from_pattern() {
  echo "[delete_from_pattern]: Removing all images in $1 which match pattern $2"
  if [ "$(uname)" == "Linux" ]; then
    find "$1" -type f -name "$2" -print0 | xargs --null /bin/rm -rf
  else
    find "$1" -type f -name "$2" -print0 | /usr/bin/xargs -0 /bin/rm -rf
  fi
}

function map_images() {
  echo "[map_images]: Mapping images from Hubble..."

  if [ -d "$HUBBLE_OUTPUT_IMAGES_DIR" ]; then
    echo "[map_images]: Regenerating image output directory for project: $HUBBLE_OUTPUT_IMAGES_DIR..."
    rm -rf "$HUBBLE_OUTPUT_IMAGES_DIR"
  fi

  echo "[map_images]: Creating $HUBBLE_OUTPUT_IMAGES_DIR..."
  mkdir -p "$HUBBLE_OUTPUT_IMAGES_DIR"

  echo "[map_images]: Copying assets from $HUBBLE_INPUT_DIR/ to $HUBBLE_OUTPUT_IMAGES_DIR..."
  # The trailing dot is needed to skip copying the hubble-assets folder and just copy its contents
  cp -R "$HUBBLE_INPUT_DIR/." "$HUBBLE_OUTPUT_IMAGES_DIR/"

  echo "[map_images]: Cleaning up unneeded assets..."
  delete_from_pattern "$HUBBLE_OUTPUT_IMAGES_DIR" "*.png"
  echo "[map_images]: Done!"
}

function main() {
  echo "Checking required dependencies..."
  npm ci

  echo "ls"
  ls -l

  echo "Verify HUBBLE_INPUT_DIR exists"
  if [ ! -d "$HUBBLE_INPUT_DIR" ]; then
  mkdir -p "$HUBBLE_INPUT_DIR"
  fi
  map_images
  npm run hubble:postProcess:web -- -i "$HUBBLE_OUTPUT_IMAGES_DIR" -o "${HUBBLE_OUTPUT_ROOT_DIR}"

  rm -rf "$HUBBLE_INPUT_DIR"
}
main
