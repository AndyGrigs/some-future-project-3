

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },

    "ignorePatterns": ["**/.eslintrc.js", "src/shared/config/i18next/i18next.ts"],

    "extends": [
        "standard-with-typescript",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // 'react/jsx-indent': [2, 4],
        //'react/jsx-indent-props': [4, 4],
        "quotes": ["error", "single"],
        "prettier/prettier": "error",
        "@typescript-eslint/indent": "off",
        //indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        'no-unused-vars': 'warn',
        "@typescript-eslint/no-unused-vars": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/naming-convention": "off",
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "prettier/prettier": "off",
    },
    "globals": {
        "__IS_DEV__": true,
    },
}
