/* eslint-disable */
import {version} from './package.json';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: './src/PuixDev.ts',
        plugins: [
            typescript({tsconfig: "tsconfig.development.json"}),
            clear({ targets: ['development'] }),
            copy({
                targets: [
                    { 
                        src: 'assets/index.html',
                        dest: 'development',
                        transform: (contents) => contents.toString().replace('{{version}}', version)
                    },
                    {
                        src: ['assets/*.css', 'assets/*.woff', 'assets/*.woff2'],
                        dest: 'development'
                    }
                ]
            })
        ],
        output: {
            file: './development/esnext.' + version + '.js',
            format: 'esm',
            sourcemap: true,
        }
    }
]
