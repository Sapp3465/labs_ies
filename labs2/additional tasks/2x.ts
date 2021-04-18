//побудувати графік відхилення fft (2.2) від dft (2.1) та порівняти час виконання для одного сигналу

import {generate_signals, VariantType} from "../../labs1/lab1.1/signales";
import {convertTwo} from "./convertTwo";
import {discrete_fourier} from "../lab2.1/discrete_fourier";
import {fast_fourier} from "../lab2.2/fast_fourier";

const variant: VariantType = {
    n: 12,
    N: 100,
    W: 1100
}

let dftTime: Array<number> = []
let fftTime: Array<number> = []

for (let index: number = 1; index <= 50; index++) {
    const dots: Array<number> = generate_signals({...variant, N: variant.N * index})
    let start: number = new Date().getTime()
    discrete_fourier(dots)
    dftTime.push(new Date().getTime() - start)
    start = new Date().getTime()
    fast_fourier(dots)
    fftTime.push(new Date().getTime() - start)
}

const graphic = convertTwo(dftTime, fftTime)

console.log('-------- GRAPHIC -------------')
console.log(graphic)
console.log('-------- TIME ----------------')
console.log('FFT : ' + dftTime[49])
console.log('DFT : ' + fftTime[49])

//-------- GRAPHIC -------------
// x;y1;y2
// 0;8;2
// 1;4;8
// 2;12;3
// 3;11;9
// 4;18;1
// 5;19;1
// 6;28;2
// 7;31;2
// 8;45;3
// 9;50;2
// 10;57;5
// 11;76;4
// 12;81;5
// 13;96;6
// 14;109;7
// 15;136;8
// 16;147;8
// 17;161;9
// 18;180;11
// 19;196;12
// 20;215;27
// 21;236;30
// 22;258;34
// 23;293;116
// 24;306;108
// 25;328;109
// 26;371;115
// 27;390;121
// 28;435;136
// 29;452;145
// 30;478;158
// 31;503;158
// 32;559;168
// 33;579;187
// 34;620;195
// 35;655;207
// 36;688;219
// 37;713;220
// 38;756;237
// 39;797;244
// 40;847;261
// 41;892;325
// 42;915;289
// 43;965;293
// 44;1002;317
// 45;1081;350
// 46;1116;344
// 47;1148;367
// 48;1212;396
// 49;1304;388
//
// -------- TIME ----------------
// FFT : 388
// DFT : 1304