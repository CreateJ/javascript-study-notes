// 第一章
// 1.如何实现方法的链式调用
// 只需要在方法结束的时候将this返回出去即可
const countObj = function () {
}
countObj.count = 0
countObj.add1 = function () {
  this.count += 1
  console.log(this.count, '链式调用1')
  return this
}
countObj.add2 = function () {
  this.count += 2
  console.log(this.count, '链式调用2')
  return this
}
countObj.add1().add2().add1().add2()


// 2.定义一个可以给函数添加多个方法的addMethod方法
Function.prototype.addMethods = function (methodsArr = []) {
  // methods = {name, fn}
  if (methodsArr.length) {
    methodsArr.forEach(item => {
      this[item.name] = item.fn
    })
  }
}

const methodsArr = [
  {
    name: 'multi2',
    fn () {
      this.num *= 2
      console.log(this.num, '乘以2')
      return this
    }
  },
  {
    name: 'multi3',
    fn () {
      this.num *= 3
      console.log(this.num, '乘以3')
      return this
    }
  }
]

const numObj = function () {}
console.log(numObj)
numObj.num = 1

console.log(numObj)

numObj.addMethods(methodsArr)
numObj.multi2().multi3().multi2().multi3()
console.log(numObj)


// 3.定义一个既可以给函数原型添加方法又可以为其自身添加方法的addMethod方法
