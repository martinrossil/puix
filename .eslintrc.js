module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    env: {
        "browser": true, // makes HTMLElement and customElements NOT no-undef
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    rules: {
        "prefer-template": "off",
        "no-underscore-dangle": "off",
        "linebreak-style": "off",
        "no-console": "off",
        "@typescript-eslint/indent": "off",
        "class-methods-use-this": "off",
        "import/no-duplicates": "off",
        "import/prefer-default-export": "off",
        "max-len": "off",
        "import/no-extraneous-dependencies": "off",
        "indent": "off",
        "semi": "off",
        "space-before-function-paren": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "no-useless-constructor": "off",
        "no-restricted-syntax": "off", // so we can use for of loop instead if Array iterator
        "no-plusplus": "off"
    }
}