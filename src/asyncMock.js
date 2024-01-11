const products = [
    {
        id : '1',
        name : 'Monkey D Luffy',
        price : 50000,
        category : 'figura',
        img : '../luffy.webp',
        stock : 3,
        description : 'Figura articulada de Monkey de Luffy de la saga de wano.'
    }
    ,
    {
        id : '2',
        name : 'Roronoa Zoro',
        price : 47000,
        category : 'figura',
        img : '../zoro.jpg',
        stock : 2,
        description : 'Figura estatica de Roronoa Zoro Santoryu.'
    }
    ,
    {
        id : '3',
        name : 'Ace - Sabo - Luffy',
        price : 100000,
        category : 'figura',
        img : '../ace-sabo-luffy.webp',
        stock : 1,
        description : 'Diorama de los 3 Hermanos Ace, Sabo Y Luffy'
    }
    ,
    {
        id : '4',
        name : 'Funko Luffy Gear 4',
        price : 36000,
        category : 'funko',
        img : '../funko-luffy-gear-4.webp',
        stock : 3,
        description : 'Funko pop de Luffy Gear 4'
    }
    ,
    {
        id : '5',
        name : 'Funko Sanji',
        price : 32000,
        category : 'funko',
        img : '../luffy.webp',
        stock : 3,
        description : 'Funko pop de vinsmoke Sanji.'
    }
    ,
    {
        id : '1',
        name : 'Taza barril de One Piece',
        price : 50000,
        category : 'taza',
        img : "../luffy.webp",
        stock : 3,
        description : 'Taza barril con la calabera de los sombreros de paja.'
    }


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}