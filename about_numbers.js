describe('About Numbers (about_numbers.js)', function () {
  it('types', function () {
    let typeOfIntegers = typeof 6;
    let typeOfFloats = typeof 3.14159;

    // Являются ли целые и дробные числа одним и тем же типом?
    expect(true).toBe(typeOfIntegers === typeOfFloats);
    // Какой тип у чисел в JavaScript?
    expect('number').toBe(typeOfIntegers);
    // Какое целое число равно 1.0?
    expect(1).toBe(1.0);
  });

  it('NaN', function () {
    let resultOfFailedOperations = 7 / 'apple';

    // Результат операции не является числом.
    expect(true).toBe(isNaN(resultOfFailedOperations));
    // Что возвращает сравнение NaN == NaN?
    expect(false).toBe(resultOfFailedOperations == NaN);
  });
});
