function ErrorDigitRange(n){
    //define
    const min = int.MaxValue;
    const max = int.MinValue;
    //loop
    for(var i=0;i<=9;i++){
        //for j to 9
        for(var j=0;j<=9;j++){
             s = temp(n,i,j);
                if(s.charAt(0) == '0'){
                    continue;
                // if parseInt(s) > max
                }else if(parseInt(s) > max){
                    max = parseInt(s);
                // if parseInt(s) < min       
            }   else if(parseInt(s) < min){
                min = parseInt(s);
            }
        }
    }
    return max-min;
}

function temp(n,i,j){
    s = n.toString();
    ii= (char) (i+'0');
    jj = (char) (j+'0');
    s = s.replace(ii,jj);
    return s;
}

