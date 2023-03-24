#! /bin/bash

read -p "Which chapter (number)? " chapter_no
read -p "Name of function in camelCase: " name

path="eloquent-javascript/ch$chapter_no"

mkdir "eloquent-javascript/ch$chapter_no"

echo "function $name() {\n  return false;\n}\n\nexport default $name;" > "$path/$name.js"
code -r "$path/$name.js"

echo "import $name from './$name';\n\ndescribe('CH$chapter_no: <name of exercise>', () => {\n  test('TC 1: <test case>', () => {\n    // Arrange\n\n    // Act\n    const result = $name();\n\n    // Assert\n    expect(result).toBe(true);\n  });\n});" > "$path/$name.test.js"
code -r "$path/$name.test.js"

npm run test:watch