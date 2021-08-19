const minusBtnPhn = document.getElementById("phn-btn-minus");
const plusBtnPhn = document.getElementById("phn-btn-plus")
const phnInputInfo = document.getElementById("phn-input");
let totalPhnPrice = document.getElementById("phn-price");
const deleteItemPhn = document.getElementById("delete-node-phn");
const subtotalCount = document.getElementById("subtotal-price");
let tax = document.getElementById("tax-price");
let finalTotalAmount = document.getElementById("all-price");
let caseMinusBtn = document.getElementById("case-minus-btn");
const caseInputData = document.getElementById("case-input-info");
const casePrice = document.getElementById("case-price");
const casePlusBtn = document.getElementById("case-plus-btn");
const caseRemoveBtn = document.getElementById("case-remove-btn");





//////// For Phone //////////////////////////


//// For Minus Operator /////////////////////

minusBtnPhn.addEventListener("click", function (e) {
    e.preventDefault();
    phnInputInfo.value--;
    if (phnInputInfo.value == 0) {

        totalPhnPrice.innerText = phnInputInfo.value;
        tax.innerText = phnInputInfo.value;
        
    } else {
        totalPhnPrice.innerText -= 1259 ;
    }

    

    subtotalCount.innerText = parseFloat(+totalPhnPrice.innerText + +casePrice.innerText);
    
    const percentTax = subtotalCount.innerText / 10;
    
    const finalTax = percentTax.toString();
    
    tax.innerText = finalTax;


    finalTotalAmount.innerText = parseFloat(+subtotalCount.innerText + +tax.innerText);
    
    
});


//// For Minus Plus Operator /////////////////////


plusBtnPhn.addEventListener("click", function (e) {
    e.preventDefault();
    phnInputInfo.value++;
    if (phnInputInfo.value == 0) {

        totalPhnPrice.innerText = phnInputInfo.value;
        
    } else {
        totalPhnPrice.innerText = phnInputInfo.value * 1259;
    }

    

    subtotalCount.innerText = parseFloat(+totalPhnPrice.innerText + +casePrice.innerText);

    const percentTax = subtotalCount.innerText / 10;
    const finalTax = percentTax.toString();
    
    tax.innerText = finalTax;
   
    // const percentTax = subtotalCount.innerText / 10;
    // const finalTax = percentTax.toString();
    
    // tax.innerText = finalTax;

    finalTotalAmount.innerText = parseFloat(+subtotalCount.innerText + +tax.innerText);

});


///// Delete button /////////////////////

deleteItemPhn.addEventListener("click", function (e) {
    e.preventDefault();
    // deleteItemPhn.remove(e);
    let deleteThePhnItem = document.getElementById("for-phn");
    console.log(deleteThePhnItem);
    deleteThePhnItem.remove();
    phnInputInfo.value = 0;
    totalPhnPrice.innerText = 0;
    subtotalCount.innerText = casePrice.innerText;
    console.log(subtotalCount.innerText);
    tax.innerText = subtotalCount.innerText / 10;

    finalTotalAmount.innerText = parseFloat(+subtotalCount.innerText + +tax.innerText);

})


//////// For Casing //////////////////////////


caseMinusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    caseInputData.value--;
    
    if (caseInputData.value == 0) {
        casePrice.innerText = caseInputData.value;
    } else {
        casePrice.innerText -= 59;
    }

    

    subtotalCount.innerText = parseFloat(+totalPhnPrice.innerText + +casePrice.innerText);


    const percentTax = subtotalCount.innerText / 10;
    const finalTax = percentTax.toString();
    
    tax.innerText = finalTax;


    finalTotalAmount.innerText = parseFloat(+subtotalCount.innerText + +tax.innerText);


});




casePlusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    caseInputData.value++;
    if (caseInputData.value == 0) {
        casePrice.innerText = caseInputData.value;
    } else {
        casePrice.innerText = caseInputData.value * 59;
    }


    subtotalCount.innerText = parseFloat(+totalPhnPrice.innerText + +casePrice.innerText);

    const percentTax = subtotalCount.innerText / 10;
    const finalTax = percentTax.toString();
    
    tax.innerText = finalTax;


    finalTotalAmount.innerText = parseFloat(+subtotalCount.innerText + +tax.innerText);
    
});



caseRemoveBtn.addEventListener( "click", function ( e )
{
    const removeCase = document.getElementById( "for-case" );
    removeCase.remove();
    caseInputData.value = 0;
    casePrice.innerText = caseInputData.value;
    console.log( totalPhnPrice );
    subtotalCount.innerText = totalPhnPrice.innerText;
    console.log( subtotalCount.innerText );
    tax.innerText = subtotalCount.innerText / 10;

    finalTotalAmount.innerText = parseFloat( +subtotalCount.innerText + +tax.innerText );
} );
