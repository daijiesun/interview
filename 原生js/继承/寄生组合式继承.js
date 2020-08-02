function inheritPrototype(supType,subType){
  var prototype = Object.create(supType.prototype) //复制父类原型
  prototype.constructor = subType //修改构造器
  subType.prototype = prototype //修改子类原型
}

//父类
function SuperClass(name){
  this.name = name;
  this.sayName = function(){
    console.log(this.name)
  }
}
SuperClass.prototype.sayHi = function(){
  console.log("Hi,",this.name)
}
//子类
function SubClass(name,age){
  SuperClass.call(this,name) 
  this.age = age
}

inheritPrototype(SuperClass,SubClass)

var sub = new SubClass('name',30)
sub.sayHi()
sub.sayName()

//寄生组合继承相对于组合继承来说，只调用了一次父类构造函数，目前最理想的继承方式