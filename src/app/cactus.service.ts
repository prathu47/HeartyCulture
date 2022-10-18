import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cactus } from './cactus';

@Injectable({
  providedIn: 'root'
})
export class CactusService {

  constructor(private client:HttpClient) { }

  cactus_details: Cactus[] = [
    {
      cactus_id:1,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_97054d94-f5a7-48e3-acee-4aefa950304f_938x938.png?v=1631529612",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_60e587dd-a7fa-406e-9a49-c48681407054_902x902.png?v=1631529627",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_39492c9a-9575-440c-a21f-7060e3908952_902x902.png?v=1631529647",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_55dd1830-2226-4d41-a3a9-6268d4c8172a_902x902.png?v=1631529663",
      cactus_name:"Sansevieria trifasciata 'Flame' With Pot",
      cactus_price:429.00
    },
    {
      cactus_id:2,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_10_902x902.jpg?v=1633236420",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_11_684x684.jpg?v=1633236420",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_10_684x684.jpg?v=1633236420",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_11_902x902.jpg?v=1633236420",
      cactus_name:"Sanseveria trifasciata 'Stars and Stripes'",
      cactus_price:450.00
    },
    {
      cactus_id:3,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_f5eba41a-5ce0-49b3-900b-2d33bd4894a5_902x902.png?v=1631531130",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_10454d49-0411-4d57-a643-6fe3e2e3da85_902x902.png?v=1631531148",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_52513fe3-b0ad-4413-a77b-5c3660b0283e_902x902.png?v=1631531172",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_034b5faf-5692-408f-999e-8708ba65bcdd_902x902.png?v=1631531209",
      cactus_name:"Frozen Snake Plant | Sansevieria Trifasciata",
      cactus_price:399.00
    },
    {
      cactus_id:4,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_6_396x396.jpg?v=1633177562",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_7_902x902.jpg?v=1633177562",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_6_902x902.jpg?v=1633177562",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_7_902x902.jpg?v=1633177562",
      cactus_name:"Sedum rubrotinctum 'Aurora' (Redish)",
      cactus_price:400.00
    },
    {
      cactus_id: 5,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_7ef68a26-2777-49f1-a2db-376ae96db59a_396x396.png?v=1631528935",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_afde2a65-6cd7-4165-8bdd-a21208e42160_902x902.png?v=1631528935",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_9e848d9b-01e7-41a2-90c6-3bf44906c672_902x902.png?v=1631528917",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_e93830ef-f084-4bee-8c14-33fac31ec7ba_902x902.png?v=1631528931",
      cactus_name:"Sanseveria trifasciata 'Black Gold Compacta' (Black Jack)",
      cactus_price:500.00
    },
    {
      cactus_id:6,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_4_396x396.jpg?v=1633175546",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_4_902x902.jpg?v=1633175545",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_3_902x902.jpg?v=1633175546",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_3_902x902.jpg?v=1633175546",
      cactus_name:"Sanseveria trifasciata 'Tornado'",
      cactus_price:448.00
    },{
      cactus_id:7,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06223_396x396.jpg?v=1632486754",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06222_902x902.jpg?v=1632486754",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06219_1_902x902.jpg?v=1632486754",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06220_902x902.jpg?v=1632486753",
      cactus_name:"Fairies Washboard | Haworthia limifolia 'Jewel'",
      cactus_price:320.00
    },
    {
      cactus_id:8,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_cd78752f-c570-4aa4-998f-2600fcf3f96e_396x396.png?v=1631531404",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_d6b0d74a-6888-4b48-9a79-1fd5dc77906f_902x902.png?v=1631531475",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_9bce608c-75c0-4954-b0c3-d0dc3b58a0f3_902x902.png?v=1631531511",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_3bb994d1-e1d7-4fe6-87a2-6fd932753dc7_902x902.png?v=1631531615",
      cactus_name:"Redish-Golden Sedum adolphi 'Firestorm'",
      cactus_price:450.00
    },
    {
      cactus_id:9,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_8_396x396.jpg?v=1633235627",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/003_8_902x902.jpg?v=1633235627",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_9_902x902.jpg?v=1633235626",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_9_902x902.jpg?v=1633235627",
      cactus_name:"Echeveria Green Spoons",
      cactus_price:560.00
    },
    {
      cactus_id:10,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/sedumgoldglow_396x396.jpg?v=1613970046",
      cactus_image1:"",
      cactus_image2:"",
      cactus_image3:"",
      cactus_name:"Sedum Golden Glow",
      cactus_price:349.00
    },
    {
      cactus_id:11,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06113_396x396.jpg?v=1630321732",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06114_902x902.jpg?v=1630321770",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06115_902x902.jpg?v=1630321778",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06116_902x902.jpg?v=1630321786",
      cactus_name:"Devil’s Backbone",
      cactus_price:500.00
    },{
      cactus_id:12,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06229_396x396.jpg?v=1630127723",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06230_902x902.jpg?v=1630127735",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06231_902x902.jpg?v=1630127786",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06232_902x902.jpg?v=1630127799",
      cactus_name:"Haworthia limifolia Shine",
      cactus_price:345.00
    },{
      cactus_id:13,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06352_396x396.jpg?v=1630061124",
      cactus_image1:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06356_902x902.jpg?v=1630061135",
      cactus_image2:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06357_902x902.jpg?v=1630061161",
      cactus_image3:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06359_902x902.jpg?v=1630061170",
      cactus_name:"Agave Isthmensis Mediopicta",
      cactus_price:430.00
    },{
      cactus_id:14,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Kalanchoe-laxiflora-Milky-Widows-Thrill3_396x528.jpg?v=1637389575",
      cactus_image1:"",
      cactus_image2:"",
      cactus_image3:"",
      cactus_name:"Milky Widow's Thrill | Kalanchoe laxiflora baker",
      cactus_price:410.00
    }
  ];

  /*
  getCactusById(id:number): Observable<Cactus>{
    return this.client.get<Cactus>("http://localhost:4200/"+"cactus?id="+id);
  }
*/
  public getcactusdetails():any{
    const cactusObservable=new Observable(observe=>{
      setTimeout(()=> {
        observe.next(this.cactus_details);
      },300);
    });
    return cactusObservable;
  }
}
