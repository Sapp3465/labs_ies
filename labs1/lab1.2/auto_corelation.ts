import {math} from "../lab1.1/math";

export const auto_correlation: (dots1: Array<number>) => Array<number> = (dots) => {
    const result: Array<number> = []
    let average: number = math(dots)
    let correlation_sum: number = 0
    let N: number = dots.length / 2

    for (let index1: number = 0; index1 < N; index1++) {
        correlation_sum = 0
        for (let index2 = 0; index2 < N; index2++) {
            correlation_sum += (dots[index1] - average) * (dots[index1] - average)
        }
        result.push(correlation_sum / (N - 1))
    }
    return result
}