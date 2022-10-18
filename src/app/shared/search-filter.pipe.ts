import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {


    
  transform(value : any[], filterString: string, pname:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || pname ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[pname].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }


}
