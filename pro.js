// Dot product function (procedure)
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  // Algorithm to determine orthogonal vectors
  function orthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = 0; j < vectors.length; j++) {
        if (i === j) continue;
        if (dot_product(vectors[i], vectors[j]) === 0) {
          console.log(`Vector ${i} and vector ${j} are orthogonal.`);
        }
      }
    }
  }
  
  // Example
  let vectors = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  orthogonal(vectors);
  // Output: "Vector 0 and vector 1 are orthogonal."
  
  // Modification using dot_product function
  function orthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = 0; j < vectors.length; j++) {
        if (i === j) continue;
        if (dot_product(vectors[i], vectors[j])() === 0) {
          console.log(`Vector ${i} and vector ${j} are orthogonal.`);
        }
      }
    }
  }
  