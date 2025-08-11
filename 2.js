function maximumDistanc(arr){
    var store ={};
    var result =0;
    for(var  i=0;i<arr.length; i++){
        if(store[arr[i]]>=0){
            result = Math.max(i-store[arr[i]], result);
        }else{
             store[arr[i]] = i;
        }
    }
    return result;
}
 
console.log(maximumDistanc([1,2,3,2,1,4,1]))