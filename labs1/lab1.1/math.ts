export const math: (dots: Array<number>) => number = (dots) => {
    let dots_sum: number = 0
    for (let index : number = 0; index < dots.length; ++index) {
        dots_sum += dots[index]
    }
    let result: number = dots_sum / dots.length
    return result
}