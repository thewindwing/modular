/*
* 第一种暴露方式：modules.exports = value
* */
module.exports = {
  data:'atguigu,前端课程',

  test () {
    console.log(this.data)
  }
}