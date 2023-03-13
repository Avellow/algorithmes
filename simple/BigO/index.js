// сложность алгоритмов - Big-O; Time Complexity

/*
  1. O(1) - constant
  2. linear - линейная (N)
     e.g. сумма элментов от 0 до N
  
*/

function summation(n) {
  let result = 0; // 1
  for (let i = 0; i <= n; i++) {
    result += i; // 4
  }
  return result; // 1
  // Big O = 1 + 4 + 1 = n + 2 = n (2 опускаем)
}

function quadraticComplexity(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      // 3. O(n^2)
    }
  }
}

/* 
  4. O (log n) - вводимое значение уменьшается 
  на половину с каждой итерацией (e.g. бинарный поиск)

  5. O (n!) - e.g factorial - избегать, где это вомзожно
*/
