function dayOfProgrammer(year) {
    // Write your code here
    let y = year.toString();
    if(year == 1918){
        return '26.09.' + y;
    }
    
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 || year % 100 == 0 && year < 1918){
        return '12.09.' + y;
    }else{
        return '13.09.' + y;
    }
    
}
