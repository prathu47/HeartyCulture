import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allproduct } from './outdoor';

@Injectable({
  providedIn: 'root'
})
export class OutdoorService {

  constructor() { }
  productDetail:Allproduct[]=[
    {
        "pid":15,
        "pname":"Marwa | Marjoram - Origanum majorana",
        "pdescription":"Heartyculture Nursery",
        "price":149.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/01_256x256.jpg?v=1620468123"
    },
    {
        "pid":16,
        "pname":"Spider plant | Chlorophytum comosum",
        "pdescription":"Heartyculture Nursery",
        "price":186.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06082_256x256.jpg?v=1630220058"
    },
    {
        "pid":17,
        "pname":"Desert rose | Adenium obesum",
        "pdescription":"Heartyculture Nursery",
        "price":399.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/pink_256x256.png?v=1601196490"
    },
    {
        "pid":18,
        "pname":"Money plant | Epipremnum aureum ",
        "pdescription":"Heartyculture Nursery",
        "price":199.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/04_256x256.jpg?v=1631961101"
    },
    {
        "pid":19,
        "pname":"Aralia vaerigated | Polyscias fruticosa",
        "pdescription":"Heartyculture Nursery",
        "price":349.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06104_256x256.jpg?v=1632293168"
    },
    {
        "pid":20,
        "pname":"Jade plant bonsai | Portulacaria afra",
        "pdescription":"Heartyculture Nursery",
        "price":299.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/portula_256x256.jpg?v=1613493311"
    },
    {
        "pid":21,
        "pname":"Foxtail Fern | Asparagus densiflorus",
        "pdescription":"Heartyculture Nursery",
        "price":349.00,
        "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06159_256x256.jpg?v=1632295725"
    },
    {
      "pid":22,
      "pname":"Ficus panda golden",
      "pdescription":"Heartyculture Nursery",
      "price":299.00,
      "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/IMG_7785_256x171.jpg?v=1638256775"
  },
  {
    "pid":23,
    "pname":"Night-flowering jasmine",
    "pdescription":"Heartyculture Nursery",
    "price":499.00,
    "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_6_391x391.png?v=1632570037"
},
{
  "pid":24,
  "pname":"Asparagus Fern | Sprenger's asparagus",
  "pdescription":"Heartyculture Nursery",
  "price":399.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_2092e89a-f66d-402a-a7d8-c5e652532c8c_391x391.png?v=1631504839"
},
{
  "pid":25,
  "pname":"Wandering jew | Tradescantia zebrina",
  "pdescription":"Heartyculture Nursery",
  "price":249.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_2d010dbf-abaa-40d8-a05d-09b0678cf3d1_391x391.png?v=1631533836"
},
{
  "pid":26,
  "pname":"Ficus microcarpa | Ficus moclame",
  "pdescription":"Heartyculture Nursery",
  "price":314.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06331_391x391.jpg?v=1630301263"
},
{
  "pid":27,
  "pname":"Painted Nettle | Coleus scutellarioides",
  "pdescription":"Heartyculture Nursery",
  "price":249.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_4702870e-7f5d-451b-b791-b1c9863e3c8d_391x391.png?v=1631506550"
},
{
  "pid":28,
  "pname":"Acalypha Wilkesiana Rosea",
  "pdescription":"Heartyculture Nursery",
  "price":349.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/IMG_7673_391x261.jpg?v=1638354125"
},
{
  "pid":29,
  "pname":"Alternenthera dentata 'Little Ruby'",
  "pdescription":"Heartyculture Nursery",
  "price":210.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/IMG_7885_391x261.jpg?v=1638341417"
},
{
  "pid":30,
  "pname":"Wild Jasmine | Clerodendron inerme",
  "pdescription":"Heartyculture Nursery",
  "price":299.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Clerodendroninerme_391x391.jpg?v=1614168534"
},
{
  "pid":31,
  "pname":"Graptophyllum pictum",
  "pdescription":"Heartyculture Nursery",
  "price":299.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/graptophyllumpictum_256x256.jpg?v=1614142971"
},
{
  "pid":32,
  "pname":"Eranthimum Black Magic",
  "pdescription":"Heartyculture Nursery",
  "price":349.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_4fd686cd-3185-4e45-938e-fd7eeabcf795_256x256.png?v=1632566706"
},
{
  "pid":33,
  "pname":"Vitex trifolia",
  "pdescription":"Heartyculture Nursery",
  "price":210.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Vitex_trifolia_subsp._litoralis__flower_s2_256x227.jpg?v=1648362810"
},
{
  "pid":34,
  "pname":"Eranthemum Variegated",
  "pdescription":"Heartyculture Nursery",
  "price":200.00,
  "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/IMG_7775_256x171.jpg?v=1638355616"
},
];
public getallproDetails(): any {
    const allproObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.productDetail);
      }, 1000);
    });
    return allproObservable;
  }
}
