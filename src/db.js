const db = [
    // это типо БД. Пи***ец как сложно с этим массивом работать, но я не хочу делать серверную часть :)
    {
        categories: [
            {
                id: 1,
                name: "😀 3D Mockups",
                db_name: "3d-mockups",
                cover: "https://images.unsplash.com/photo-1642167714894-1c22e231c5de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xYU3pES3J6dmNiWXx8ZW58MHx8fHw%3D&w=1000&q=80",
            },
            {
                id: 2,
                name: "🎨 2D Mockups",
                db_name: "2d-mockups",
                cover: "https://images.hdqwalls.com/wallpapers/desktop-abstract-2020-4k-mm.jpg"
            },
            {
                id: 3,
                name: "📸 Photo Mockups",
                db_name: "photo-mockups",
            }
        ],
        sellers: [
            {
                id: 1,
                name: "John Doe",
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                rating: 4,
                sales: 100,
            },
            {
                id: 2,
                name: "John Doe 2",
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                rating: 3,
                sales: 111,
            }
        ],
        items: [
            {
                id: 1,
                name: "Soda Can Mockup",
                category: "3d-mockups",
                seller: 1,
                price: '14.00',
                is_sale: false,
                sale_amount: 0,
                image: "https://images.creativemarket.com/0.1.0/ps/8755428/1820/1214/m1/fpnw/wm0/sc-1-.png?1595318615&s=3b471159cd3ba1ccbff4494e31468e8e",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            }, 
            {
                id: 2,
                name: "Soda Can Mockup 2",
                category: "3d-mockups",
                seller: 2,
                price: '7.00',
                is_sale: true,
                sale_amount: 0.5,
                image: "https://imockups.com/storage/product/39/2ovVpFH8kH3LXcUeNClQ.png",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            },
            {
                id: 3,
                name: "Soda Can Mockup 2",
                category: "3d-mockups",
                seller: 2,
                price: '7.00',
                is_sale: true,
                sale_amount: 0.5,
                image: "https://images.creativemarket.com/0.1.0/ps/8755428/1820/1214/m1/fpnw/wm0/sc-1-.png?1595318615&s=3b471159cd3ba1ccbff4494e31468e8e",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            },
            {
                id: 4,
                name: "Soda Can Mockup 2",
                category: "3d-mockups",
                seller: 2,
                price: '7.00',
                is_sale: true,
                sale_amount: 0.5,
                image: "https://images.creativemarket.com/0.1.0/ps/8755428/1820/1214/m1/fpnw/wm0/sc-1-.png?1595318615&s=3b471159cd3ba1ccbff4494e31468e8e",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            },
            {
                id: 5,
                name: "2 Floating iPhones Mockup",
                category: "2d-mockups",
                seller: 2,
                price: '5.00',
                is_sale: false,
                sale_amount: 0.5,
                image: "http://unblast.com/wp-content/uploads/2020/04/Floating-iPhones-Mockup-1.jpg",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            },
            {
                id: 6,
                name: "2 Floating iPhones Mockup",
                category: "3d-mockups",
                seller: 2,
                price: '5.00',
                is_sale: false,
                sale_amount: 0.5,
                image: "http://unblast.com/wp-content/uploads/2020/04/Floating-iPhones-Mockup-1.jpg",
                description: " This mockup consists of 6 high quality pre-made PSD scenes. All objects and shadows are fully separated so you can easily play with them and create your own original custom scene. Also, you can easily increase or decrease the size, change color, background, etc.",
            }
        ],
        reviews: [
            {
                id: 1,
                item: 1,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 2,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 2,
                item: 1,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 2,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 3,
                item: 1,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 5,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 4,
                item: 1,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },{
                id: 5,
                item: 2,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 6,
                item: 2,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",   
                date: "09.03.2022"
            },
            {
                id: 7,
                item: 2,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 8,
                item: 2,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            },
            {
                id: 9,
                item: 2,
                avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                name: "John Doe",
                rating: 4,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                date: "09.03.2022"
            }
        ]
    }
]

export default db