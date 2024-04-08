/*const ans=(product,tax) => {
    let total=0;
    for(let i=0;i<product.length;i++){
        total+=product[i]+product[i]*tax;   
    }
    return total;
};

console.log(ans([10,20,30],1));*/


const bill=function(product,tax){
    let ans=0;
    for(let i=0;i<product.length;i++){
        ans+=product[i]+product[i]*tax;
    }
    return ans;
}

console.log(bill([10,15,30],0.2));