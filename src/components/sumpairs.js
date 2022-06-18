const numbers = [1, 4, 8, 7, 3, 15]
const suma = 0

const sumPairs = (numbers, n) => {
  let division=1
  while(division < numbers.length){
    for (let i = 0; i + division < numbers.length; i++){
        const num1 = numbers[i]
        const num2 = numbers[i+division]
        if(num1 + num2 === n){
            return [num1, num2]
        }
    }
    division ++
  }

}

console.log(sumPairs(numbers, 8))