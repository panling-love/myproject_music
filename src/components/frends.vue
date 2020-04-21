<template>
<div>
    <div class="root">
        <div class="root_middle">
            <div class="left"><img src=""/>我是图片</div>
            <div class="right">
                <h1>登录网易云音乐</h1>
                <p>查看并管理你收藏的私房音乐</p>
                <img alt="我也是图片"/>
                <div>
                <button @click="clickHandler">立即登录</button></div>
            </div>
        </div>
    </div>
    {{count}}
    {{msg}}
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        clickHandler(){
            this.$router.push("/login");
        }
    },
    computed:{
        count(){
            //return this.$store.state.count
            console.log(this.$store.state.a.count)
            return this.$store.state.a.count
        },
        msg(){
            //return this.$store.state.msg
            console.log(this.$store.state.a.msg)
            return this.$store.state.a.msg

        }
    }
}
</script>

<style scoped>
.root{
    width: 980px;
    height: 500px;
    margin: 0 auto;
    position: relative;
}
.root_middle{
    width: 800px;
    height: 240px;
    position: absolute;
    margin-top:50px;
    margin-left: 100px;
}
.left,.right{
    margin-top: 80px;
}
.left{
    float: left;
    margin-left: 100px;
}
.right{
    float: right;
    margin-right: 100px;
}
</style>