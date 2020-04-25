/* eslint-disable */

/* import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'commonjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'esm',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: 'tests/**',
            clean: true
        }),
        commonjs({
            include: ['node_modules/**']
        })
    ]
} */




import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        },
        plugins: [typescript({tsconfig: "tsconfig.esm.json"})]
    },
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'commonjs',
            sourcemap: true
        },
        plugins: [typescript({tsconfig: "tsconfig.cjs.json"})]
    }
]