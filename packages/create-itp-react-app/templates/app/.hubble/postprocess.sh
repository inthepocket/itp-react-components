#!/usr/bin/env bash
set -e

function main() {
  # This file is picked up by hubble-worker
  # You can perform additional transforms & tasks on output here
  npm install
  node ./.hubble/postprocess.js
  node ./scripts/createRootCSS.js
}
main
