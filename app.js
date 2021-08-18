const minusBtn = document.getElementById('case-minus');
const iphoneMinusBtn = document.getElementById('iphone-minus');
const plusBtn = document.getElementById('case-plus');
const iphonePlusBtn = document.getElementById('iphone-plus');
const productNumber = document.getElementById('totalCase');
const totalIphone = document.getElementById('totalIphone');
const productValue = document.getElementById('case-price');
const iphonePrice = document.getElementById('iphonePrice');
const removeBtn = document.getElementById('removeCase')

const sum = document.getElementById('sum')
const taxTotal = document.getElementById('tax')
const totalPrice = document.getElementById('totalSum')

// const Initialprice= parseInt(productValue.innerText);
let casePrice=parseInt(productValue.innerText);
let iphoneInitialValue=parseInt(iphonePrice.innerText);



    function cart(products, value, isAdd, desireProduct){ //productNumber, phonePrice 
       
        if(isAdd){
            products.value++;
            // phonePrice +=Initialprice;
            // value.innerText=phonePrice;

        }
        else{
            products.value--;
            // phonePrice -=Initialprice;
            // value.innerText=phonePrice;
            // value.innerText = products.value * iphoneInitialValue;

        }
        value.innerText = products.value * desireProduct;
       console.log( calculateTotal());
       let totalsum =  calculateTotal();
        sum.innerText= totalsum;
        taxTotal.innerText = ( totalsum * 10/100 );
        totalPrice.innerText = totalsum + parseInt(taxTotal.innerText)
    }


    // plusBtn.forEach(function(btn){
    //     btn.addEventListener('click', ()=>{
          
    //             productNumber.value++;
    //            phonePrice +=Initialprice;
    //            productValue.innerText=phonePrice;
        
    //         // cart(productNumber, productValue, true)
    //         console.log("HI");
                
            
    //     })
    // })

    minusBtn.addEventListener('click', function(){

        // console.log(parseInt(productNumber++));
    //     if(parseInt(productNumber.value) > 0 && parseInt(productNumber.value)   ){
    //     productNumber.value--;
    //     phonePrice -=Initialprice;
    //     productValue.innerText=phonePrice;
       
    // }
    cart(productNumber, productValue, false, casePrice)
    })
   plusBtn.addEventListener('click', function(){

        // console.log(parseInt(productNumber++));
    //     if(parseInt(productNumber.value) > 0 && parseInt(productNumber.value)   ){
    //     productNumber.value--;
    //     phonePrice -=Initialprice;
    //     productValue.innerText=phonePrice;
       
    // }
    cart(productNumber, productValue, true, casePrice)
    })


  iphonePlusBtn.addEventListener('click', function(){
    cart(totalIphone, iphonePrice, true, iphoneInitialValue)
    })
    
  iphoneMinusBtn.addEventListener('click', function(){
    cart(totalIphone, iphonePrice, false, iphoneInitialValue)
    })


function getInputValue(productInput){
const productsNumber = parseInt(productInput.value)
return productsNumber;
}

function calculateTotal(){
    const caseTotal = getInputValue(productNumber)*casePrice;
    const phoneTotal = getInputValue(totalIphone)*iphoneInitialValue;
    
    return caseTotal + phoneTotal;
}

console.log();