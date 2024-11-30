export default [
  {
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      rules: {
        "prefer-const": "warn",
        "no-constant-binary-expression": "error",
        "no-var": "error", //Запрещает использование var. Вместо этого рекомендуются let и const
        "semi": "error", //Требует обязательного использования точек с запятой (;) в конце каждой инструкции.
        "indent": ["error", 2], // Указывает на необходимость соблюдать стандартизированный отступ. Обычно это табуляция или 2/4 пробела.
        "no-multi-spaces": "error", //Запрещает использование нескольких пробелов подряд, за исключением случаев выравнивания в комментариях.
        "space-in-parens": "error", //Требует правильного использования пробелов внутри круглых скобок.( a + b ) => (a + b)
        "no-multiple-empty-lines": "error", //Ограничивает количество пустых строк подряд. Повторяющиеся пустые строки запрещены.
        "prefer-const": "error", //Рекомендует использовать const вместо let, если значение переменной не переопределяется.
        "no-use-before-define": "error" //Запрещает использование переменных или функций до их объявления.
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
  }
];