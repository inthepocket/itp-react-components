#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const css = require('css')
const toCss = require('to-css')

const SKETCHXPORT_JSON_FILENAME = 'sketchxport.json'
const ROOT_CSS_FILENAME = 'Root.css'

fs.readFile(path.join(SKETCHXPORT_JSON_FILENAME), 'utf8', (error, data) => {
  if (error) {
    console.log(
      `Sketchxport postprocces failed. File not found: ${SKETCHXPORT_JSON_FILENAME}`,
    )
    process.exit()
  }

  const sketchxportJSON = JSON.parse(data)

  fs.readFile(path.join('src', ROOT_CSS_FILENAME), 'utf8', (error, cssData) => {
    if (error) {
      console.log(
        `Sketchxport postprocces failed. File not found: ${ROOT_CSS_FILENAME}`,
      )
      process.exit()
    }

    const nextAST = {}
    const rootCss = css.parse(cssData)
    const rootRule = rootCss.stylesheet.rules.find(
      rule => rule.selectors[0] === ':root',
    )

    rootCss.stylesheet.rules.forEach(rule => {
      const declarations = {}

      rule.declarations.forEach(declaration => {
        declarations[declaration.property] = declaration.value
      })

      sketchxportJSON.colors.forEach(importedColor => {
        declarations[`--${importedColor.id}`] = `#${importedColor.hex}`
      })

      nextAST[rule.selectors.join(', ')] = declarations
    })

    const nextCss = css.stringify(css.parse(toCss(nextAST)))

    fs.writeFile(path.join('src', 'Root.css'), nextCss, 'utf8', () => {
      console.log('sketchxport postprocessing done.')
    })
  })
})
