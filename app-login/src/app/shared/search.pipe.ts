import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:"search"
})

//ürün aramalarında kullanılan pipe işlemi
export class SearchPipe implements PipeTransform{
  transform(value : any[], searchString: string, prop:string): any[] {
    const result:any =[];
    if(!value || searchString==='' || prop ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[prop].trim().toLowerCase().includes(searchString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }
}
