var recipes ={
  
};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}// it is destructive because it adds a state //of the object
function updateObjectWithKeyAndValue(object, key, value){
  var object2 = Object.assign({prop2:value},object);
  return object2;
  //need {}, as an argument to assign //function
}