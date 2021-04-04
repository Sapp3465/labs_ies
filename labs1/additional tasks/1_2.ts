//1.2 порівняти час виконання автокореляції із використанням двох довільних структур даних

import {generate_signals, VariantType} from "../lab1.1/signales";
import {auto_correlation} from "../lab1.2/auto_corelation";
import {math} from "../lab1.1/math";

const variant: VariantType = {
    n: 12,
    N: 100000,
    W: 1100
}

const auto_correlation_object: (dots: Array<number>) => { [key: number]: number } = (dots) => {
    const result: { [key: number]: number } = {}
    let average: number = math(dots)
    let correlation_sum: number = 0
    let N: number = dots.length / 2

    for (let index1: number = 0; index1 < N; index1++) {
        correlation_sum = 0
        for (let index2 = 0; index2 < N; index2++) {
            correlation_sum += (dots[index1] - average) * (dots[index1] - average)
        }
        result[index1] = correlation_sum / (N - 1)
    }
    return result
}

const dots: Array<number> = generate_signals(variant)
let start_array: number = new Date().getTime()
auto_correlation(dots)
let time_array = new Date().getTime() - start_array
let start_object: number = new Date().getTime()
auto_correlation_object(dots)
let time_object = new Date().getTime() - start_object

console.log('-------------WORK TIME WITH ARRAY--------------')
console.log(time_array)
console.log('-------------WORK TIME WITH OBJECT--------------')
console.log(time_object)

//-------------WORK TIME WITH ARRAY--------------
// 3021
// -------------WORK TIME WITH OBJECT--------------
// 2975