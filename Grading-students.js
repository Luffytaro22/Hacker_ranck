function gradingStudents(grades) {
    // Write your code here
    let grades_fixed = [];
    for(let num of grades){
        if(num < 38){
            grades_fixed.push(num);
        }else{
            let dig = num % 10;
            if(dig == 0 || dig == 5){
                grades_fixed.push(num);
            }else{
                if(dig < 5){
                    let rest1 = 5 - dig;
                    if(rest1 < 3){
                        num = num + rest1;
                        grades_fixed.push(num);
                    }else{
                        grades_fixed.push(num);
                    }
                }else{
                    let rest2 = 10 - dig;
                    if(rest2 < 3){
                        num = num + rest2;
                        grades_fixed.push(num);
                    }else{
                        grades_fixed.push(num);
                    }
                }
            }
        }
    }
    return grades_fixed;
}
