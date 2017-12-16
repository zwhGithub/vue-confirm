<template>
  <div class="hello">
    <div @click="click" class="deom">点击弹框</div>
    1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 1 <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    click: function() {
      this.$confirm('是否确定删除联系人')
        .then(function() {
          console.log('点击确定');
        })
        .catch(function() {
          console.log('点击取消');
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deom {
  padding: 20px;
  background: green;
  color: #ffffff;
}
</style>
