import {math} from "./math";

export const dispersion: (dots: Array<number>) => number = (dots) => {
    let average: number = math(dots)
    let dispersion_sum: number = 0
    for (let index : number = 0; index < dots.length; ++index) {
        dispersion_sum += (average - dots[index]) * (average - dots[index])
    }
    let result: number = dispersion_sum / (dots.length - 1)
    return result
}