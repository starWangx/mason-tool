import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: 'src/index.tsx',
    //external: ['lodash'],
    // globals: {
    //   lodash: '_'
    // },
    output: {
      dir: 'dist/umd',
      format: 'umd',
      name: '$tool',
    },
    plugins: [
      resolve(),  // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      typescript({
        target: 'es5',
        lib: ['es5', 'es6', 'es2015', 'es2016', 'dom']
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        runtimeHelpers: true,       // 使plugin-transform-runtime生效
      }),
      // eslint({
      //   throwOnError: true,
      //   throwOnWarning: true,
      //   include: ['src/**'],
      //   exclude: ['node_modules/**']
      // }),
      terser()
    ]
  },
  {
    input: 'src/index.tsx',
    //external: ['lodash'],
    // globals: {
    //   lodash: '_'
    // },
    output: {
      dir: 'dist/esm',
      format: 'esm',
      name: '$tool',
    },
    plugins: [
      resolve(),  // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      typescript({
        target: 'es5',
        lib: ['es5', 'es6', 'es2015', 'es2016', 'dom']
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        runtimeHelpers: true,       // 使plugin-transform-runtime生效
      }),
      // eslint({
      //   throwOnError: true,
      //   throwOnWarning: true,
      //   include: ['src/**'],
      //   exclude: ['node_modules/**']
      // }),
    ]
  }
];
