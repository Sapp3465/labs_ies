import {discrete_fourier} from "./discrete_fourier";
import {generate_signals, VariantType} from "../../labs1/lab1.1/signales";
import {convert} from "../../labs1/lab1.1/convert";


const variant: VariantType = {
    n: 12,
    N: 64,
    W: 1100
}

const dots: Array<number> = generate_signals(variant)
const result: Array<number> = discrete_fourier(dots)

const graphic_dots = convert(dots)
const graphic_result = convert(result)
console.log('-------------dots--------------')
console.log(graphic_dots)
console.log('-------------result--------------')
console.log(graphic_result)

//-------------dots--------------
//x;y
// 0;20.491982545561807
// 1;23.90731296982211
// 2;-2.5223636482439282
// 3;9.474666074700451
// 4;-7.406715166107634
// 5;28.423998224101346
// 6;-27.530508634236103
// 7;28.423998224101346
// 8;31.338096117143827
// 9;-2.5223636482439282
// 10;-0.5315865752310107
// 11;-0.30376375727486415
// 12;7.834524029285957
// 13;-7.406715166107634
// 14;-3.497392553507691
// 15;23.90731296982211
// 16;18.949332149400902
// 17;27.322643394082412
// 18;18.83281373188811
// 19;-0.45564563591229756
// 20;0
// 21;-7.406715166107634
// 22;0
// 23;15.066250985510486
// 24;5.893511848824806
// 25;-18.35367242282407
// 26;11.299688239132863
// 27;-14.813430332215267
// 28;27.420834102500844
// 29;18.83281373188811
// 30;15.066250985510486
// 31;-4.540254566839069
// 32;22.599376478265725
// 33;0
// 34;-0.5044727296487854
// 35;27.420834102500844
// 36;0
// 37;-0.45564563591229756
// 38;3.2741732493471116
// 39;0
// 40;-14.813430332215267
// 41;-21.412617826628082
// 42;-22.220145498322903
// 43;-6.994785107015382
// 44;35.2553581317868
// 45;19.58631007321489
// 46;-1.513418188946356
// 47;3.15822202490015
// 48;0
// 49;-14.813430332215267
// 50;-0.3797046965935791
// 51;12.6328880996006
// 52;18.949332149400902
// 53;-0.5315865752310107
// 54;33.89906471739859
// 55;22.10755417430105
// 56;-24.481747874553836
// 57;5.893511848824806
// 58;30.13250197102097
// 59;7.533125492755243
// 60;12.6328880996006
// 61;-9.176836211412034
// 62;-0.6834684538684446
// 63;11.299688239132863
//
// -------------result--------------
// x;y
// 0;383.5884424399149
// 1;100.88394082097953
// 2;85.7282482761397
// 3;99.68816281422032
// 4;126.7640168363452
// 5;121.76628507941672
// 6;27.45990900032845
// 7;211.33200198702093
// 8;63.14396330731528
// 9;250.56955809262698
// 10;57.030832822394174
// 11;112.94923024380597
// 12;144.10998024946755
// 13;120.80347205084055
// 14;116.08633777170319
// 15;61.27872267741195
// 16;137.0409308419251
// 17;56.655483178271275
// 18;179.9066159069919
// 19;160.50765864900828
// 20;111.42026199270569
// 21;159.66326311211026
// 22;102.04111018394987
// 23;121.70241572610216
// 24;103.97702808218683
// 25;39.61476956197647
// 26;140.82033742282488
// 27;78.54292959362957
// 28;170.87702161946845
// 29;40.24842268090707
// 30;143.8259520430859
// 31;116.86479263614365
// 32;31.981105949274763
// 33;116.86479263614575
// 34;143.82595204308478
// 35;40.24842268090589
// 36;170.8770216194684
// 37;78.54292959363084
// 38;140.82033742282584
// 39;39.614769561975805
// 40;103.9770280821881
// 41;121.70241572610288
// 42;102.04111018394917
// 43;159.66326311210972
// 44;111.42026199270944
// 45;160.50765864901058
// 46;179.9066159069932
// 47;56.655483178270494
// 48;137.0409308419266
// 49;61.27872267741247
// 50;116.08633777170449
// 51;120.80347205083969
// 52;144.10998024946818
// 53;112.94923024380536
// 54;57.03083282239504
// 55;250.5695580926258
// 56;63.14396330731809
// 57;211.33200198702377
// 58;27.45990900032947
// 59;121.76628507941695
// 60;126.76401683634484
// 61;99.68816281421857
// 62;85.7282482761383
// 63;100.88394082097956