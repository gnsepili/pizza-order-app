import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter= document.querySelector('#cartCounter');


function updateCart(pizza){
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
        cartCounter.innerText=res.data.totalQty;
        new Noty({
            type: 'success',
            text: 'item added to cart',
            killer : true,
            timeout: 3000,
            layout: 'bottomRight'
            
        }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            text: 'Something went wrong'+ err,
            killer : true,
            timeout: 3000,
            layout: 'bottomRight'
            
        }).show();
    })
}



addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})