describe('About Operators (about_operators.js)', function () {
  it('addition', function () {
    let result = 0;
    // Добавляйте i к результату, увеличивая i от 0 до 5 включительно.
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }

    // Какое значение получится в результате?
    expect(15).toBe(result);
  });

  it('assignment addition', function () {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      // Это сокращенная запись result = result + i.
      result += i;
    }

    // Какое значение получится в результате?
    expect(15).toBe(result);
  });

  it('subtraction', function () {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }

    // Какое значение получится в результате?
    expect(2).toBe(result);
  });

  it('assignment subtraction', function () {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }

    // Какое значение получится в результате?
    expect(2).toBe(result);
  });

  // Операторы присваивания доступны и для других арифметических действий.
  // Оператор % вычисляет остаток от деления.
  it('modulus', function () {
    let result = 10;
    let divisor = 5;
    // Это сокращенная запись result = result % divisor.
    result %= divisor;

    // Какое значение получится в результате?
    expect(0).toBe(result);
  });

  // typeof возвращает строку с названием типа.
  it('typeof', function () {
    // Какой тип у пустого объекта?
    expect('object').toBe(typeof {});
    // Какой тип у строк?
    expect('string').toBe(typeof 'apple');
    // Какой тип у -5?
    expect('number').toBe(typeof -5);
    // Какой тип у false?
    expect('boolean').toBe(typeof false);
  });
});
