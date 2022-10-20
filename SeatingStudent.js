function SeatingStudents(arr){
    let desk=arr[0];
    let occupied=[];
    
       for(let i=1;i<arr.length;i++){
        occupied.push(arr[i])
    }
    
    let probability=[];

    for(let j=1;j<desk; j++){
    let checkWithFirstDesk=j;
    for(let k=0;k<=desk;k++){
        if(!occupied.includes(k) && !occupied.includes(checkWithFirstDesk)){
            let isEven=j%2 ===0;
            let isOdd=k%2 ===0;
            if(isEven && !isOdd){
                continue;
            }
            let checkForSeating=k;
            let diff=checkForSeating-checkWithFirstDesk;
            if(diff ===1 || diff === 2){
                probability.push([checkWithFirstDesk,checkForSeating])
            }else{
                continue
            }
            
        }
    }
}
return probability.length
}

SeatingStudents([8,1,8]);