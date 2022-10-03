import colors from 'colors';

const firstNum = +process.argv[2];
const secondNum = +process.argv[3];
console.log(process.argv);
const arrPrime = [];

const isPrime = (num) => {
    if (num < 2) {
        return false
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        
            return true;
        
    }
}

const numberTrafficLight = (data) => {
    let count = 1;
    data.forEach((el) => {
        switch (count) {
            case 1: {
                count++;
                console.log(colors.red(el));
                break;
            }
            case 2: {
                count++;
                console.log(colors.yellow(el));
                break;
            }
            case 3: {
                count = 1;
                console.log(colors.green(el));
                break;
            }
        }
    })
}

if (isNaN(firstNum) || isNaN(secondNum)) {
    console.log(colors.red('один из аргументов не является числом'));
} else {
    for (let i = firstNum; i < secondNum; i++) {
        if (isPrime(i)) {
            arrPrime.push(i);
        }
    }
    if (arrPrime.length === 0) {
        console.log('Простых чисел в заданном диапазоне нет');
    } else {
        numberTrafficLight(arrPrime)
    }
}