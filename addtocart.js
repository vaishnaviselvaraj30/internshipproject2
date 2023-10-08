const product = [
    {
        id: 0,
        image: 'pictures/w5.jpg',
        title: 'DRESSBERRY:Women Stylish Black Printed Romantic Florals Jumpsuit',
        price: 945,
        pd: 'Add style to your everyday look by donning this chic and versatile jumpsuit. It is crafted with a beautiful printed pattern and attractive shirt collar to elevate your appeal.Symbols of freshness and beauty, romantic florals in vibrant hues and prints have been a mainstay in fashion for decades.The model (height 5,8) is wearing a size S.'
    },
    {
        id: 1,
        image: 'pictures/m1.jpg',
        title: 'KETCH:Men Black & White Slim Fit Checked Casual Shirt',
        price: 450,
        pd: 'Black & white checked opaque casual shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem.A Well Designed 100% Cotton Formal Shirt With Structured Cuts And Regular Fitting, FULL Sleeves And Classic Collar With A Pointed Patch Pocket On Chest. ②Don This Shirt With A Pair Of Well Fitted Pants And You Are All Set To Make An Impression.'
    },
    {
        id: 3,
        image: 'pictures/w3.jpg',
        title: 'MITERA: pink solid saree',
        price: 600,
        pd: 'Zari work is known for the art of weaving threads in golden and silver colours. It involves the process of twisting a flattened metallic strip, which sometimes is made from pure gold and silver.The saree comes with an unstitched blouse piece.The blouse worn by the model might be for modeling purpose only. material is purely chiffon.'
    },
    {
        id: 4,
        image: 'pictures/earphone.jpg',
        title: 'Boat Rockerz 370 On Ear Bluetooth Headphones',
        price: 1099,
        pd: 'Dynamic sound with super extra bass and clear, natural vocals with the responsive 40mm Neodymium drivers for a complete listening experience.The on-ear headphones with swivel earcups offer flexible wearing and a comfortable fit for hours of listening pleasure and snuggly fit for passive noise isolation'
        
    },
    {
        id: 5,
        image: 'pictures/kitchen.jpg',
        title: 'Milton Pro Cook Kitchen Jewel Set Of 3',
        price: 2775,
        pd: 'Product Design: Set Content: 1 Kadhai, 1 Fry pan, 1 Tawa, 1 Pressure Cooker and 1 Laddle and 1 Spatula Color: Maroon Type: Cookware set Material: Aluminium Features: Induction compatible Flame safe Hot plate safe 3 Layer non-stick coating Food grade Dishwasher safe'
    },
    {
        id: 6,
        image: 'pictures/watch.jpg',
        title: 'Noise Pulse 2 Max 1.85',
        price: 1198,
        pd: 'Brand: Noise <br> Model Name: ColorFit Pulse 2 Max<br> Style: Modern <br> Colour:Black <br> Screen Size:1.85 Inches <br>Massive 1.85" display: See everyday data clearly under the brightest sun on the 1.85 TFT LCD that sports 550 nits of brightness and the highest screen-to-body ratio.'
        
    },
];
const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price, pd}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <h1 style='position: relative; bottom: 160%;'>${title}</h1>
        <p style='position: relative; bottom:150%; width: 65%; text-align: justify;'>${pd}</p>
        
        <h2>${price}.00/-</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )

}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a)
{
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j=0;
    let total=0; 
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML = "RS "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RS "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:15px;'>${title}</p>
               
                <h2 style='font-size:15px;'>RS ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}