import vuePlugin from 'rollup-plugin-vue'
import alias from 'rollup-plugin-alias';
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
    alias({
      resolve: [ '.js', '.ts'],
      entries: [
        {
          find: 'vue',
          replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js'
        },
      ]
    }),
    vuePlugin({
      target: 'browser'
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
    svgToSymbol(),
  ]
}
