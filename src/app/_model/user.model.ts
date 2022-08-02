// export interface UserModel {
//     id: number,
//     name: string,
//     site: string,
//     description: string,
//     price : number
// }


export class UserModel {
    id: number = 0;
    name: string = '';
    site: string = '';
    description: string = '';
    price : number = 0;
  
    constructor(data?: any) {
      this.id = data?.id;
      this.name = data?.name;
      this.site = data?.site;
      this.description = data?.description;
      this.price = data?.price;
    }
  }
  