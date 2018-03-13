module.exports = {
    "rules": {
        'no-console': (process.env.NODE_ENV === 'production' ? 2 : 0)
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", 
    ]
}
