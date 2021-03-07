module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules" : {
        "no-console": "off",
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        'indent': ['error', 4],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "off",
    }
};
