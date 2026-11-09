describe('About Assignment (about_assignment.js)', function () {
  it('local variables', function () {
    let temp = 1;
    // Присваиваем значение локальной переменной temp.
    expect(temp).toBe(1);
  });

  it('global variables', function () {
    // В этом упражнении отсутствие let демонстрирует глобальную переменную.
    // На практике переменные следует объявлять явно.
    temp = 1;
    // Глобальная переменная становится свойством объекта window.
    expect(window.temp).toBe(temp);
  });
});
