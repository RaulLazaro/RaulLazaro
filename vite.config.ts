import { defineConfig } from 'vite'
import html from 'vite-plugin-html'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

import path from 'path'
import fs from 'fs'
import marked from 'marked'

const markdown = fs.readFileSync(path.resolve(__dirname, './README.md'), 'utf8')

export default defineConfig({
  plugins: [
    html({
      inject: {
        data: {
          markdown: marked(markdown)
        }
      },
      minify: true
    }),
    WindiCSS(),
    ViteRestart({
      restart: ['README.md']
    })
  ]
})
