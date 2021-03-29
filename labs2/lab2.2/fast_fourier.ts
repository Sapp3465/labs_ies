export const fast_fourier: (dots: Array<number>) => Array<number> = (dots) => {
    const result: Array<number> = []
    const N: number = dots.length
    const tableR: Array<number> = []
    const tableI: Array<number> = []

    for (let index1: number = 0; index1 < N / 2; index1++) {
        tableR[index1] = Math.cos(-2 * Math.PI * index1 / N)
        tableR[index1 + N / 2] = -tableR[index1]
        tableI[index1] = Math.sin(-2 * Math.PI * index1 / N)
        tableI[index1 + N / 2] = -tableI[index1]
    }

    for (let index1: number = 0; index1 < N / 2; index1++) {
        let real1: number = 0
        let real2: number = 0
        let image1: number = 0
        let image2: number = 0
        for (let index2 = 0; index2 < N / 2; index2++) {
            real1 += dots[2 * index2] * tableR[2 * index1 * index2 % N]
            real2 += dots[2 * index2 + 1] * tableR[index1 * (2 * index2 + 1) % N]
            image1 += dots[2 * index2] * tableI[index1 * 2 * index2 % N]
            image2 += dots[2 * index2 + 1] * tableI[index1 * (2 * index2 + 1) % N]
        }
        result[index1] = Math.sqrt((real1 + real2) * (real1 + real2) + (image1 + image2) * (image1 + image2))
        result[N / 2 + index1] = Math.sqrt((real1 - real2) * (real1 - real2) + (image1 - image2) * (image1 - image2))
    }
    return result
}