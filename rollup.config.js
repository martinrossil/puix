/* eslint-disable */
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        },
        plugins: [
            typescript({tsconfig: "tsconfig.json"}),
            filesize({ showBrotliSize: true })]
    }
]