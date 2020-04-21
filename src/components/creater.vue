<template>
    <div>
        创作者中心
        <button @click="addCount">点击</button>{{count}}
    </div>
</template>

<script>
//es6中解构赋值 交换变量
// let a = 1,b = 2;
// [a,b]  = [b , a];
// console.log(a,b)
// var a,b;
// ({a,b} = {a:10,b:20});
var {a,b} = {a:10,b:20}
console.log(a,b)
export default {
    methods:{
        addCount(){
            //第一个参数是事件的名称，第二个参数是传递的数据
            //this.$store.commit('addCount',1)
            //以对象的方式提交
            // this.$store.commit({
            //     type:'addCount',
            //     num:1
            // })
            //通过dispatch提交给actions
            this.$store.dispatch('addCount',{num:2})
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        }
    }
}
</script>

<style scoped>

</style>