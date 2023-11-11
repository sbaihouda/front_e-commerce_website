export interface productslist {
    id: number;
    name: string;
    description: string;
    state: number;
    orderdate: string;
    image: string;
  }

export interface orderslist {
    id: number;
    name: string;
    description: string;
    mail: string;
    price: number;
    category: string;
}

export interface userslist {
        id: number,
        name: string,
        email: string,
        phoneNumber: string,
        commandsCount: string,
        address: string,
        points: number
}

export interface books {
    book1: 
    {title:string , author:string},
    book2: 
    {title:string , author:string}
}
export interface devices {
    device1: 
    {name:string , color:string},
    device2: 
    {name:string , color:string}
}