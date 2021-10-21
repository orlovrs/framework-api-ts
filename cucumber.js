let common = [
    '--require-module ts-node/register',
    '--require ./features/**/*.ts',
    '--require ./features/step-definitions/**/*.ts',
].join(' ');

module.exports = {
    default: common
};