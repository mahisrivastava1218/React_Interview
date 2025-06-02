
// Use indexOf() to get the index of the first occurrence of the substring.

// Use lastIndexOf() to get the index of the last occurrence of the substring.
//Q1-> difference of primitive and non-primitive data type

function checkForSubstr(str,substr){
  let indexing = str.indexOf(substr);
  console.log(indexing);
  let secindexing = str.lastIndexOf(substr);
   console.log(secindexing);
  if(secindexing ===  indexing){
    return true;
  }
  return false;
}
console.log(checkForSubstr("Next time there won’t be a next time","time"));
  // return(str.substring(startInd, endInd));
  //variables are pointing to the  memory address of values
  function removeFalsyValues(arr){
    let falsyvalue= [];
    for(var i=0; i< arr.length; i++){
        if(arr[i]){
            falsyvalue.push(arr[i]);
        }
    }
    return falsyvalue;
}
// A prime number is a number larger than 1
// shift is used for remove first ele ,pop is used for last ele
// Here, [...str] safely handles Unicode characters like emojis (which .split("") doesn’t always handle correctly)
// return  [...str].reverse().join("");
  //  obj.propName = str;  // Incorrect: propName is treated as a literal property name
  // return obj.propName; // incorrect Returns the value of the property named "propName"

  // dotnotation is ues in update property when we know the exact value    else use bracket;
  // obj[propName] = str;
  // return (obj[propName]);
      //  return obj.hasOwnProperty(propName);
      //  return obj["age"];
  // age is a property not a variable use as a string;
  // return obj.age;
  // here we known the value of age can use dot notation
