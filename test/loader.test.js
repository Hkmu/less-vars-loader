import compiler from './compiler';

const result = JSON.stringify({
    colorWhite: '#ffffff',
    colorBlack: '#000000',
    colorBrand: '#2196F3',
    marginSm: '3px',
    marginLg: '12px',
    cardMargin: '3px',
    cardBg: '#2196F3'
});
const plainResult = JSON.stringify({
    'color-white': '#ffffff',
    'color-black': '#000000',
    'color-brand': '#2196F3',
    'margin-sm': '3px',
    'margin-lg': '12px',
    'card-margin': '3px',
    'card-bg': '#2196F3'
});

test('default camelcased output', async () => {
    const stats = await compiler('./default');
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(`module.exports = ${result};\n`);
});

test('plain output', async () => {
    const stats = await compiler('./plain');
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(`module.exports = ${plainResult};\n`);
});
