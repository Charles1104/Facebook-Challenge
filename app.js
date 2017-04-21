/*jshint esversion: 6 */

function facebook(array, number) {

  dataValidation(array, number);

  for(let i = 0; i < array.length; i++){

    let sumCumulated = 0;

    for(let j = i; j < array.length ; j++){

      if(sumCumulated + array[j] === number ){
        return true;
      }
      else if(sumCumulated + array[j] < number){
        sumCumulated += array[j];
      }
      else{
        sumCumulated = array[j];
      }
    }
  }
  return false;
}

function dataValidation(array, number){
  if(!Array.isArray(array)){
    throw new Error("Only array as first argument");
  }
  for (let i = 0; i < array.length; i++){
    if(typeof array[i] !== "number"){
      throw new Error("Only numbers in the array");
    }
  }
  if(typeof number !== "number"){
    throw new Error("Only number as second argument");
  }
}

module.exports = facebook;