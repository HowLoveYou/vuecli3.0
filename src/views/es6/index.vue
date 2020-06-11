<template>
  <div style="padding:20px">
    <h2 style="text-align:center">es6</h2>
    <el-row>
      1、let const
      <p>
        1、代码块
        2、for循环 循环变量 和循环体内部是不同的作用域
        3、不存在变量提升
        4、暂时性死区
        5、不允许重复性声明
        6、
      </p>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'es6',
  mounted() {
    this.fun1();
    this.fun2();
    this.fun3();
    this.fun4();
    this.fun5();
    this.fun6();
    this.fun7();
    this.fun8();
  },
  methods: {
    //变量的提升
    fun1() {
      function f() {
        console.log(tmp);
        if (false) {
          console.log(123);
          var tmp = 'hello world';
        }
      }
      f(); // undefined
    },
    fun2() {
      let a = 1;
      if (true) {
        let a = 2;
      }
      console.log(a);
    },
    fun3() {
      const obj = new Map();
      obj.set('马晨博', 'hello');
      obj.set('马乾博', 'world');

      for (let [key] of obj) {
        console.log(key);
      }
    },
    fun4() {
      let [a, b] = [3, 5];
      let c = `a + b = ${a + b}`;
      console.log(c);
      // alert`world`;
    },
    fun5() {
      let str = 'machenbo';
      let flag = str.startsWith('m'); //：返回布尔值，表示参数字符串是否在原字符串的头部。
      let flag1 = str.endsWith('0'); //返回布尔值，表示参数字符串是否在原字符串的尾部。
      console.log(flag, flag1);
      let repeatstr = str.repeat(1); //重复多少次 正整数
      console.log(repeatstr);
      console.log(str.trimStart(), str.trimEnd);
    },
    fun6() {
      let arr1 = [
        {
          name: '123',
          sex: 'ss',
          data: { a: 1, b: 2 }
        }
      ];
      let arr2 = [...arr1];
      arr2[0].data.a = 2;
      console.log(arr1, arr2);
    },
    fun7() {
      //entries keys values
      for (let [index, value] of [1, 2, 3].entries()) {
        console.log(index, value);
      }
      for (let index of [1, 2, 3].keys()) {
        console.log(index);
      }

      for (let value of [1, 2, 3].values()) {
        console.log(value);
      }

      //find  findIndex
      let arr = [
        { name: 'machenbo', age: 18 },
        { name: 'manbo', age: 13 },
        { name: 'macbo', age: 12 }
      ];
      let obj = arr.find((item, index) => {
        return item.age == 18;
      });
      let num = arr.findIndex((item, index, arr) => {
        return item.age == 18;
      });
      console.log(obj, num);
    },
    //数组reduce  参考地址：https://www.jianshu.com/p/e375ba1cfc47
    fun8() {
      let arr = [
        {
          name: '1',
          age: '2'
        },
        {
          name: '1',
          age: '2'
        },
        {
          name: '1',
          age: '2'
        },
        {
          name: '1',
          age: '2'
        }
      ];
      let arr1 = [2, 34, 5, 6, 7, 2, 3];
      let newArr = [...new Set(arr1)];

      console.log(newArr);
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background: #000;
}
</style>