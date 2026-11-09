describe('About Equality (about_equality.js)', function () {
  it('numeric equality', function () {
    // Чему должна равняться сумма?
    expect(3 + 4).toBe(7);
  });

  it('string equality', function () {
    // Выполните конкатенацию строк.
    expect('3' + '7').toBe('37');
  });

  it('equality without type coercion', function () {
    // Чему строго равно число 3?
    expect(3 === 3).toBeTruthy();
  });

  it('equality with type coercion', function () {
    // Какая строка будет равна 3 при нестрогом сравнении?
    expect(3 == '3').toBeTruthy();
  });

  it('string literals', function () {
    // Типы кавычек могут различаться, но парные кавычки должны совпадать.
    expect('frankenstein' === "frankenstein").toBeTruthy();
    // Строки можно записывать в одинарных и двойных кавычках.
    expect("frankenstein" === 'frankenstein').toBeTruthy();
  });
});
