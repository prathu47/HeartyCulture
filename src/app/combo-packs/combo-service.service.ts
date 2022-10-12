import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combo } from './combo';

@Injectable({
  providedIn: 'root'
})
export class ComboServiceService {

  constructor() { }

  combo_details: Combo[] = [
    {
      combo_id:1,
      combo_image:"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/delightcombonew_381x381.jpg?v=1633842400",
      combo_name: "Destined To Delight | Dragon fruit, Guava, Mulberry",
      combo_price: 899.00
    },
    {
      combo_id: 2,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Pretty_396x396.jpg?v=1615296065",
      combo_name: "Pretty hanging basket | Callisia 'Itsy Bitsy Inch' green, Creeping inch plant, Tangled Hearts",
      combo_price: 599.00
    },
    {
      combo_id: 3,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Hibiscus_Parijat_Jasmine_396x396.jpg?v=1620469310",
      combo_name: "Hibiscuss | Parijatha | Jasmine Combo",
      combo_price:650.00
    },
    {
      combo_id: 4,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_1_1171822f-22ee-443d-b5be-97c5e7915880_396x396.png?v=1633608608",
      combo_name: "Miracle leaf/ Bryophyllum , Insulin, Aloe vera",
      combo_price: 599.00
    },
    {
      combo_id: 5,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_2_7669ad9d-2814-403a-94f8-7d814b364137_396x396.png?v=1633609044",
      combo_name: "Tranquil Trio | Jasmine, Lemon grass, Henna",
      combo_price: 799.00
    },
    {
      combo_id: 6,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/Attractive1_397x396.jpg?v=1615292295",
      combo_name: "Hanging basket | Callisia 'Itsy Bitsy Inch' green, Creeping Inch Plant, Wandering jew, Tangled Hearts",
      combo_price: 1249.00
    },
    {
      combo_id: 7,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/comboo_396x396.jpg?v=1635769360",
      combo_name: "Gift of Love Combo / Angel Wing Begonia, / ZZ Plant, / Sansevieria Trifasciata 'Twister'",
      combo_price: 1255.00
    },
    {
      combo_id: 8,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/SansevieriaTornado_SedumDonkeytail_EchiveriaPink_396x396.jpg?v=1620472151",
      combo_name: "Sanseveria trifasciata 'Tornado'| Sedum burrito 'Baby donkey tail'| Echeveria Red Prince",
      combo_price: 1000.00
    },
    {
      combo_id: 9,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/combo_72a56dd0-e3bd-49fb-ae30-fe47af37ee5b_396x396.jpg?v=1635775910",
      combo_name: "Interior Combo / Aloe Vera 'Tiger tooth', / Spider Plant, / Philodendron Green, Philodendron Golden",
      combo_price: 1360.00
    },
    {
      combo_id: 10,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/combo_902c78be-54e5-4ee4-b8be-7031caa3050a_396x397.jpg?v=1635775913",
      combo_name: "Aloe Vera 'Tiger tooth, / Echeveria 'Ghost Plant' /Kalanchoe Desert Cabbage / Kalanchoe",
      combo_price: 1140.00
    },
    {
      combo_id: 11,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/combo_f4b905cd-b6e4-4489-95f8-87241e7e723c_396x396.jpg?v=1635774654",
      combo_name: "Cutie-patootie Indoors Combo/ Coppertone Sedum, Sedum Adolphii 'Firestorm', Sedum Silver",
      combo_price: 760.00
    },
    {
      combo_id: 12,
      combo_image: "https://cdn.shopify.com/s/files/1/0487/7598/7354/products/combo_e8b3ff68-3be3-4144-b40f-61417168012c_396x396.jpg?v=1635776445",
      combo_name: "Blessings of Laxmi-ji / Money plant 'N-Joy' / Money plant 'Green'/ Money plant / Money plant 'Golden'Queen'",
      combo_price: 980.00
    }
  ];

  public getcombodetails():any{
    const comboObservable=new Observable(observe=>{
      setTimeout(()=> {
        observe.next(this.combo_details);
      },300);
    });
    return comboObservable;
  }
}
