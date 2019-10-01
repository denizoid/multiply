module.exports = function multiply(first, second) {
  let size1 = first.length;
  let size2 = second.length;
  let result = [];
  let inter_result = '';
  let final_sum = '';
  let i = first.length-1;
  let k = second.length-1;
  let multi = 0;
  let rest = 0;
  let decade = 0;
  if (Math.min(size1, size2) == size1) {
    var first_int = first;
    var second_int = second;
  } else {
    var first_int = second;
    var second_int = first;
  }
  for (let i = first_int.length-1; i >= 0; i--) {
    for (let k = second_int.length-1; k >= 0; k--) {
      multi = first_int[i]*second_int[k];
      rest = (decade + multi % 10)%10;
      decade = Math.floor((decade + multi % 10)/10)  + Math.floor(multi/10);
        inter_result += rest.toString();
      if (k == 0) {
        inter_result += decade.toString();
        decade = 0;
        rest = 0;
      }
    }    
    result.push(inter_result);
    inter_result='';
    for (let j = 0; j<=first_int.length-1-i; j++) {
      inter_result+='0';
    }
  }
  console.log(result);
  let sum = 0;        
    for (let i = 0; i< result[result.length-1].length; i++) {
      for(let res of result) {
        if (res[i] == undefined) {
          continue;
        }
        sum += Number(res[i]);
      }
      final_sum += (sum%10).toString();
      sum = Math.floor(sum/10);
    }
    if (final_sum[final_sum.length-1] == 0) {
      final_sum = final_sum.slice(0,-1);
    }
  return final_sum.split("").reverse().join("");
}