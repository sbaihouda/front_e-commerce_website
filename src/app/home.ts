export interface Home {
    
    books: {
        [key : string]: [
            {title:string , author:string}
        ]
    },
    devices: {
        [key : string]: [
            {name:string, color:string}
        ]
    }
}

export interface Home2 {
    order1 : String,
    order2 : String
}