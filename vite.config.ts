import { defineConfig } from "vite";
import html from 'vite-plugin-html'

const path = require('path')
const fs = require("fs");
const marked = require("marked");

const markdown = fs.readFileSync(path.resolve(__dirname, './README.md'), 'utf8')

export default defineConfig({
    plugins: [
        html({
            inject: {
                data: {
                    markdown: marked(markdown),
                },
            },
            minify: true,
        }),
    ],
});
