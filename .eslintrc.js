module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
   // 语法规则，代码中不准出现no-console  
   rules: {
    // 开发阶段不报错
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 自定义，强制函数括号之前的空格的一致never是禁止, 修改规则
    'space-before-function-paren': ["warn", "never"],
    // 'object-curly-spacing': ["error", "always"]
    //关闭组件命名规
    'vue/multi-word-component-names':'off',
    'eol-last':["warn", "never"],
    // 允许在注释块中使用空白符
    'no-trailing-spaces': ["warn", {"ignoreComments": true }],
    // 最大两个空格
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }],
    'padded-blocks': ["warn", "never"],
    'quotes': ["warn", "double", { "avoidEscape": true }]    // 'camelcase': 
  }
}
