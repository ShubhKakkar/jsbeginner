const sluggify = (text,lower) => {
    if(lower){
        return text.toLowerCase();
    }
    else{
        return text;
    }
}

sluggify("I am Shubham Kakkar",true);

consoe.log(typeof(1000));
console.log(typeof("name"));