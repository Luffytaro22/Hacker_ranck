function bonAppetit(bill, k, b) {
    // Write your code here
    var payment = 0;
    var result;
    for(let i = 0; i < bill.length; i++){
        payment = payment + bill[i];
    }
    payment = (payment - bill[k])/2;
    if(payment == b){
        result = "Bon Appetit";
    }
    else{
        result = Math.abs(b - payment);
    }
    return result;
}