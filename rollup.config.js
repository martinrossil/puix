/* eslint-disable */
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        },
        plugins: [typescript({tsconfig: "tsconfig.json"})]
    }
]