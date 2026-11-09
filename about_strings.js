describe('About Strings (about_strings.js)', function () {
  it('delimiters', function () {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";

    // Эти строки равны? В этом примере специально показаны оба вида кавычек.
    expect(true).toBe(singleQuotedString === doubleQuotedString);
  });

  it('concatenation', function () {
    let fruit = 'apple';
    let dish = 'pie';

    // Эти строки равны?
    expect('apple pie').toBe(fruit + ' ' + dish);
  });

  it('character Type', function () {
    let characterType = typeof 'Amory'.charAt(1);
    // В JavaScript нет отдельного типа для одного символа.
    expect('string').toBe(characterType);
  });

  it('escape character', function () {
    let stringWithAnEscapedCharacter = '\u0041pple';
    // Какое значение находится в переменной после обработки escape-последовательности?
    expect('Apple').toBe(stringWithAnEscapedCharacter);
  });

  it('string.length', function () {
    let fruit = 'apple';
    // Какое значение у fruit.length?
    expect(5).toBe(fruit.length);
  });

  it('slice', function () {
    let fruit = 'apple pie';
    // Какое значение возвращает fruit.slice(0, 5)?
    expect('apple').toBe(fruit.slice(0, 5));
  });
});
