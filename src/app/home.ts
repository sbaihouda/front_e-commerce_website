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

export interface orderslist {
    order1 : String,
    order2 : String
}

export interface userslist {
    user1 : String,
    user2 : String
}