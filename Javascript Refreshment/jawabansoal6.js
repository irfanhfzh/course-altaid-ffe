let arr = [1.5, 2.56, 5.1, 12.33]
          .map(x => x === 1.5 ? Math.round(1.5) : x)
          .map(y => y === 2.56 ? Math.round(2.56) : y)
          .map(z => z === 5.1 ? Math.round(5.1) : z)
          .map(a => a === 12.33 ? Math.round(12.33) : a)
console.log(arr);