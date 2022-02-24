

var arr =[0,2,0,6,9];
var left =0;
var right =arr.length-1;
 var target =8;
var count =0;

 for(var i=left;i<(arr.length-1)/2 && (arr[i]<target || arr[right]<8);i++){
     var sum =0;
     sum = arr[i] + arr[right];
     right--;
     if(8==sum){
        console.log(arr[i],arr[j])
      }
 }
   
