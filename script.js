
let shop = document.getElementsByClassName("shop")[0];
// create an array of items with the four objects
let shopitemsdata=[{
    
    id:"aa",
    img:"./images/img-1.jpg",
    name:"Casual Shirt",
    price:"45",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
},
{ id:"bb",
    img:"./images/img-2.jpg",
    name:"office shirt ",
    price:"40",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    { id:"cc",
        img:"./images/img-3.jpg",
        name:"T Shirt",
        price:"50",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        { id:"dd",
            img:"./images/img-4.jpg",
            name:"Mens Shirt",
            price:"55",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }]
let generateShop = () => {
    shop.innerHTML =shopitemsdata.map((x)=>{
        let { id, name, price, desc, img } = x;
       return  `
        <div id=product-id-${id} class="items">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>`;
    }).join("")
};

generateShop();

