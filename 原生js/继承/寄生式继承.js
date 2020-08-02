//寄生式继承

function ExtendsClass(org){
  const clone = Object.create(org)
  clone.sayHi = function(){
    console.log('sayHi')
  }
  return clone
}

var org = {
  name: 'org',
  colors: ['red','yellow']
}

var sub = new ExtendsClass(org)
sub.sayHi()