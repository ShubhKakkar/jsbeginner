const obj = {
    prop: 42,
    id : 1
  };
  
  Object.freeze(obj);
  obj.prop = 2;
  obj.id = 4;
  console.log(obj.prop);
  console.log(obj.id);

  // const person3 = person1 , this will not copy data of person 1 but will point on person1 . It means if we change the values of person 3 , the values of person 1 will change too.
  // const person3 = { ...person1 }; => This is the way to create a copy named person3 of the object person1.