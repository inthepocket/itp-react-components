#!/usr/bin/env bash
set -e

function main() {
  # This file is picked up by sketchxport-worker
  # You can perform additional transforms & tasks on output here
  npm install
  node ./.sketchxport/postprocess.js
  node ./scripts/createRootCSS.js
}
main
