import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cactus } from './cactus';
@Injectable({
  providedIn: 'root'
})
export class CactusService {

  constructor() { }

  cactus_details: Cactus[] = [
    {
      cactus_id:1,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_97054d94-f5a7-48e3-acee-4aefa950304f_938x938.png?v=1631529612",
      cactus_name:"Sansevieria trifasciata 'Flame' With Pot",
      cactus_price:429.00
    },
    {
      cactus_id:2,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_10_902x902.jpg?v=1633236420",
      cactus_name:"Sanseveria trifasciata 'Stars and Stripes'",
      cactus_price:450.00
    },
    {
      cactus_id:3,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_f5eba41a-5ce0-49b3-900b-2d33bd4894a5_902x902.png?v=1631531130",
      cactus_name:"Frozen Snake Plant | Sansevieria Trifasciata",
      cactus_price:399.00
    },
    {
      cactus_id:4,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_6_396x396.jpg?v=1633177562",
      cactus_name:"Sedum rubrotinctum 'Aurora' (Redish)",
      cactus_price:400.00
    },
    {
      cactus_id: 5,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_7ef68a26-2777-49f1-a2db-376ae96db59a_396x396.png?v=1631528935",
      cactus_name:"Sanseveria trifasciata 'Black Gold Compacta' (Black Jack)",
      cactus_price:500.00
    },
    {
      cactus_id:6,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/004_4_396x396.jpg?v=1633175546",
      cactus_name:"Sanseveria trifasciata 'Tornado'",
      cactus_price:448.00
    },{
      cactus_id:7,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06223_396x396.jpg?v=1632486754",
      cactus_name:"Fairies Washboard | Haworthia limifolia 'Jewel'",
      cactus_price:320.00
    },
    {
      cactus_id:8,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_cd78752f-c570-4aa4-998f-2600fcf3f96e_396x396.png?v=1631531404",
      cactus_name:"Redish-Golden Sedum adolphi 'Firestorm'",
      cactus_price:450.00
    },
    {
      cactus_id:9,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/002_8_396x396.jpg?v=1633235627",
      cactus_name:"Echeveria Green Spoons",
      cactus_price:560.00
    },
    {
      cactus_id:10,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/sedumgoldglow_396x396.jpg?v=1613970046",
      cactus_name:"Sedum Golden Glow",
      cactus_price:349.00
    },
    {
      cactus_id:11,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06113_396x396.jpg?v=1630321732",
      cactus_name:"Devil’s Backbone",
      cactus_price:500.00
    },{
      cactus_id:12,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06229_396x396.jpg?v=1630127723",
      cactus_name:"Haworthia limifolia Shine",
      cactus_price:345.00
    },{
      cactus_id:13,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/KAV06352_396x396.jpg?v=1630061124",
      cactus_name:"Agave Isthmensis Mediopicta",
      cactus_price:430.00
    },{
      cactus_id:14,
      cactus_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Kalanchoe-laxiflora-Milky-Widows-Thrill3_396x528.jpg?v=1637389575",
      cactus_name:"Milky Widow's Thrill | Kalanchoe laxiflora baker",
      cactus_price:410.00
    }
  ];

  public getcactusdetails():any{
    const cactusObservable=new Observable(observe=>{
      setTimeout(()=> {
        observe.next(this.cactus_details);
      },1000);
    });
    return cactusObservable;
  }
}
