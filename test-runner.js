// Минимальный запуск проверок из учебных файлов без внешних библиотек.
let testResults = [];
let currentSuite = '';

function describe(suiteName, callback) {
  currentSuite = suiteName;
  callback();
}

function it(testName, callback) {
  let fullName = currentSuite + ' - ' + testName;
  try {
    callback();
    testResults.push({ name: fullName, passed: true });
  } catch (error) {
    testResults.push({ name: fullName, passed: false, error: error.message });
  }
}

function expect(actualValue) {
  return {
    toBe(expectedValue) {
      if (!Object.is(actualValue, expectedValue)) {
        throw new Error('Неверное значение: ' + String(actualValue));
      }
    },
    toEqual(expectedValue) {
      if (!Object.is(actualValue, expectedValue)) {
        throw new Error('Неверное значение: ' + String(actualValue));
      }
    },
    toBeTruthy() {
      if (!actualValue) {
        throw new Error('Ожидалось истинное значение');
      }
    }
  };
}

function renderResults() {
  let resultsList = document.getElementById('results');
  let summary = document.getElementById('summary');
  let passedTests = testResults.filter(function (testResult) {
    return testResult.passed;
  }).length;

  summary.textContent = 'Пройдено ' + passedTests + ' из ' + testResults.length + ' проверок';
  for (let testResult of testResults) {
    let item = document.createElement('li');
    item.className = testResult.passed ? 'passed' : 'failed';
    item.textContent = (testResult.passed ? 'OK: ' : 'Ошибка: ') + testResult.name;

    if (!testResult.passed) {
      item.textContent += ' - ' + testResult.error;
    }

    resultsList.appendChild(item);
  }
}
