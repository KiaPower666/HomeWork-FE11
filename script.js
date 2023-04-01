// // С помощью деструктуризации запишите в отдельны переменные:
// 1.1 Название города в котором находится авто 
// 1.2 Четвертый регион из поля region //  (по умолчанию значение должно быть 'Arizona')
// 1.3 Поле high, объекта price
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида:

const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'Boston',
                street: {
                    name: 'pushkina',
                    number: 2
                }
            }
        },
        region: ['Iowa', 'Texas', 'California']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            high: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
};

// 1.1
const {
    adress: {
        country: {
            city: {
                name: nameCity
            }
        }
    }
} = car;
console.log(nameCity);

// 1.2
const {
    adress:
    { region:
        [, , , d = 'Arizona']
    }
} = car;
console.log(d);
// 1.3

const {
    specs: {
        price: {
            high
        }
    }
} = car;
console.log(high);
// 1.4

const {specs: {fuelConsumption = {city: 12, mix: 10, country: 8}}} = car; 
console.log(fuelConsumption);



//  Дан объект:
const student = {
    math: 6,
    biology: 2,
    language: 2,
    isOboltus: true
};
// 2.1 Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).
function numberСalculator(student) {
    for (let key in student) {
        if (typeof student[key] == 'number') {
            student[key] *= 2;
        }
    }
    console.log(student);
}
numberСalculator(student)

// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.

let sum = 0;
let countryNew = 0;
let result = 0;

function calculatAverageFromArray(student) {

    for (let key in student) {
        if (typeof student[key] === 'number') {
            sum += student[key];
            countryNew++;
        } else {
            countryNew++;
        }
        if (sum > 5) {
            student.isOboltus = false;
        }
        result = sum / countryNew;
    }
    console.log(sum);
    console.log(countryNew);
    console.log(student);
    console.log(result);
}

calculatAverageFromArray(student)
