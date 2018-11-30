'use strict';

const babel = {
    presets: [
        [
            'env',
            {
                targets: {
                    node: '6.9.0',
                },
            },
        ],
    ],
};

module.exports = babel;
