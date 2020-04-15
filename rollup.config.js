import typescript from 'rollup-plugin-typescript2';
import hashbang from 'rollup-plugin-hashbang';
import executable from 'rollup-plugin-executable';
import {eslint} from 'rollup-plugin-eslint';
import multiInput from 'rollup-plugin-multi-input';

import pkg from './package.json';

const commonPlugins = [
    eslint({throwOnError: true}),
    typescript({
        typescript: require('typescript')
    })
];

const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies
});

export default [
    // Build distributable
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ],
        plugins: [...commonPlugins],
        external: ['src/static/**', ...external]
    },
    // Build binary
    {
        input: 'src/bin.ts',
        output: {
            dir: 'dist',
            format: 'cjs'
        },
        plugins: [...commonPlugins, hashbang(), executable()],
        external
    },
    // Build static files
    {
        input: ['src/static/**/*.ts'],
        output: [
            {
                dir: 'dist',
                format: 'cjs'
            }
        ],
        plugins: [multiInput(), ...commonPlugins],
        external
    }
];
