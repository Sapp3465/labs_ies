import {math} from "../lab1.1/math";

export const correlation: (dots1: Array<number>, dots2: Array<number>) => Array<number> = (dots1, dots2) => {
    const result: Array<number> = []
    let average1: number = math(dots1)
    let average2: number = math(dots2)
    let correlation_sum: number = 0
    let N: number = dots1.length / 2

    for (let index1: number = 0; index1 < N; index1++) {
        correlation_sum = 0
        for (let index2 = 0; index2 < N; index2++) {
            correlation_sum += (dots1[index1] - average1) * (dots2[index1 + index2] - average2)
        }
        result.push(correlation_sum / (N - 1))
    }
    return result
}