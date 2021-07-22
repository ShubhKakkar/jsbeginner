const obj = {
    prop: 42,
    id : 1
  };
  
  Object.freeze(obj);
  obj.prop = 2;
  obj.id = 4;
  console.log(obj.prop);
  console.log(obj.id);