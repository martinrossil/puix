/* eslint-disable */
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import {version} from './package.json';
import serve from 'rollup-plugin-serve';
// import resolve from '@rollup/plugin-node-resolve';

export default {
    input: './src/PuixDev.ts',
    plugins: [
        clear({ targets: ['public'] }),
        copy({
            targets: [
                { src: 'assets/dist/**.*', dest: 'public' },
                { src: 'assets/fonts/**.*', dest: 'public' },
                { src: 'assets/icons/**.*', dest: 'public' },
                { 
                    src: 'assets/dist/index.html',
                    dest: 'public',
                    transform: (contents) => contents.toString().replace('{{version}}', version)
                } 
            ]
        }),
        typescript({ tsconfig: "tsconfig.esnext.json" }),
        // resolve({dedupe: ['xstate']}),
        strip(),
        serve({
            contentBase: 'public',
            open: true
        })
    ],
    output: [
        {
            file: './public/es6.'  + version + '.js',
            format: 'esm',
            plugins: [
                compiler({
                    language_in: "ECMASCRIPT_NEXT",
                    compilation_level: 'ADVANCED',
                    language_out: "ECMASCRIPT_2015"
                })
            ]
        },
        {
            file: './public/es5.'  + version + '.js',
            format: 'iife',
            plugins: [
                compiler({
                    language_in: "ECMASCRIPT_NEXT",
                    compilation_level: 'ADVANCED',
                    language_out: "ECMASCRIPT5"
                })
            ]
        }
    ]
}
