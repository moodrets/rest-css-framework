import svelte from 'rollup-plugin-svelte'
import scss from 'rollup-plugin-scss'
import html from 'rollup-plugin-generate-html-template'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import svgToSymbol from 'rollup-plugin-svg-to-symbol'

const isProd = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/js/app.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    svelte({
      extensions: ['.svelte'],
      emitCss: true,
    }),
    resolve({
      browser: true,
			dedupe: ['svelte']
		}),
    commonjs({
      include: 'node_modules/**',
    }),
    scss({
      outputStyle: isProd ? 'compressed' : 'nested',
    }),
    html({
      template: 'src/index.html',
      target: 'index.html',
    }),
    svgToSymbol()
  ]
}
