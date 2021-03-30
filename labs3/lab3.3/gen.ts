export const gen: (a: number, b: number, c: number, d: number, y: number) => string = (a, b, c, d, y) => {
    const population: number = 40
    const max_gen_value = 5
    const time: number = 4000
    let gens: Array<Array<number>> = []
    let deltas: Array<number> = []
    let interests: Array<number> = []

    const start: number = new Date().getTime()

    for (let index: number = 0; index < population; index++) {
        gens[index] = []
        gens[index][0] = Math.floor(Math.random() * max_gen_value)
        gens[index][1] = Math.floor(Math.random() * max_gen_value)
        gens[index][2] = Math.floor(Math.random() * max_gen_value)
        gens[index][3] = Math.floor(Math.random() * max_gen_value)
    }

    for (let index: number = 0; index < population; index++) {
        let result: number = a * gens[index][0] + b * gens[index][1] + c * gens[index][2] + d * gens[index][3];
        deltas[index] = Math.abs(result - y)
        if (!deltas[index]) return 'x1 = ' + gens[index][0] + ' x2 = ' + gens[index][1] + ' x3 = ' + gens[index][2] + ' x4 = ' + gens[index][3] + ' delta = ' + deltas[index]
    }

    let end: number = new Date().getTime()
    while (end - start < time) {
        let all_interests: number = 0
        for (let index = 0; index < population; index++) all_interests += 1 / deltas[index]
        for (let index = 0; index < population; index++) interests[index] = (1 / deltas[index]) / all_interests

        let all_chances: Array<number> = []
        for (let index = 0; index < population; index++) all_chances[index] = Math.floor(Math.random() * deltas[index] * 100)
        let live_gen_delta: number = -Infinity
        let father_index: number = 0
        for (let index = 0; index < population; index++) {
            if (live_gen_delta < all_chances[index]) {
                live_gen_delta = all_chances[index]
                father_index = index
            }
        }
        all_chances = []
        for (let index = 0; index < population; index++) all_chances[index] = Math.floor(Math.random() * deltas[index] * 100)
        live_gen_delta = -Infinity
        let mother_index: number = 0
        for (let index = 0; index < population; index++) {
            if (live_gen_delta < all_chances[index]) {
                live_gen_delta = all_chances[index]
                mother_index = index
            }
        }

        let children_gens: Array<Array<number>> = []
        for (let index = 0; index < population; index++) {
            children_gens[index] = []
            children_gens[index][0] = gens[father_index][0]
            children_gens[index][1] = gens[father_index][1]
            children_gens[index][2] = gens[mother_index][2]
            children_gens[index][3] = gens[mother_index][3]
        }
        gens = children_gens

        for (let index: number = 0; index < population; index++) {
            let result: number = a * gens[index][0] + b * gens[index][1] + c * gens[index][2] + d * gens[index][3];
            deltas[index] = Math.abs(result - y)
            if (!deltas[index]) return 'x1 = ' + gens[index][0] + ' x2 = ' + gens[index][1] + ' x3 = ' + gens[index][2] + ' x4 = ' + gens[index][3] + ' delta = ' + deltas[index]
        }
        end = new Date().getTime()
    }

    let smallDelta: number = Infinity
    let deltaIndex: number = 0
    for (let index = 0; index < population; index++) {
        if (deltas[index] < smallDelta) {
            smallDelta = deltas[index]
            deltaIndex = index
        }
    }
    return 'x1 = ' + gens[deltaIndex][0] + ' x2 = ' + gens[deltaIndex][1] + ' x3 = ' + gens[deltaIndex][2] + ' x4 = ' + gens[deltaIndex][3] + ' delta = ' + deltas[deltaIndex]
}