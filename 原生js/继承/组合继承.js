//组合继承(伪经典继承)

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
var sup = new SuperClass('sup')
console.log(sup.name) //sup
sup.sayName() //sup
sup.sayHi() //Hi, sup

console.log('=====分割线=====')
//子类
function SubClass(name,age){
  SuperClass.call(this,name) // 第二次掉用，实例属性和方法覆盖原型链上同名的属性和方法（这里覆盖的是name、sayName）
  this.age = age
}

SubClass.prototype = new SuperClass()  //第一次调用     子类原型指向父类的一个实例,此时子类的原型上会有父类实例的熟悉和方法
SubClass.prototype.constructor = SubClass //将子类构造器指向子类构造函数 
SubClass.prototype.sayAge = function(){ //新增子类原型方法
  console.log(this.age)
}
var sub = new SubClass('sub',20)
sub.sayName() //sub
sub.sayHi() // Hi, sub
sub.sayAge() //20

console.log(SuperClass.prototype.isPrototypeOf(sub)) //true sub在SuperClass的原型链上
console.log(SubClass.prototype.isPrototypeOf(sub)) // true sub在SubClass的原型链上
console.log(sub.hasOwnProperty('name')) //true  实例属性
console.log(sub.hasOwnProperty('sayName')) //true  实例方法
console.log(sub.hasOwnProperty('sayHi')) //false  属于原型上的方法

/**
 * 改方式既能继承父类实例属性，又能继承原型方法
*/