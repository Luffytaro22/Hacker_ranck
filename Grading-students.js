function gradingStudents(grades) {
    // Write your code here
    let grades_fixed = [];
    if(num < 38){
        grades_fixed.push(num);
    }else{
        Math.ceil(num/5)*5-num < 3 ? grades_fixed.push(Math.ceil(num/5)*5) : grades_fixed.push(num);
    }
    
    return grades_fixed;
}
