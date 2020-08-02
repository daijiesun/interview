//借用构造函数（经典继承）

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
  SuperClass.call(this,name)
  this.age = age
}

var sub = new SubClass('sub',20)
console.log(sub.name,sub.age) //sub 20
sub.sayName() //sub
sub.sayHi() // error: sub.sayHi is not a function
/**
 * 借用构造函数实现继承，子类只能继承父类构造函数里面的属性和方法
 * 无法继承父类原型上的方法
*/


