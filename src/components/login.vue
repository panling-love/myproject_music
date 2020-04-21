<template>
    <div class="login">
        <div>
            <span>用户名:</span>
            <div class="right">
            <input type="text" v-model="username" />
            <span class="hide"></span>
            </div>
        </div>
        <div>
            <span>密码:</span>
            <div class="right">
            <input type="password" v-model="password" />
            <span class="hide"></span>
            </div>
        </div>
        <div>
            <span>验证码:</span>
            <div class="right">
            <input type="text" v-model="code" />
            <span class="hide"></span>
            </div>
        </div>
        <div class="button">
        <button @click="login">登录</button>
        <button @click="regiester">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        var validatename = (rule,value,callback)=>{
            if(value=="")
            {
                callback(new error('请输入用户名'));
            }else{
                callback();
            }
        };
        var validatepass = (rule,value,callback)=>{
            if(value=="")
            {
                callback(new Error('请输入用户名'));
            }else if(value.length<='6'){
                callback(new Error('密码必须大于六位'));
            }else{
                callback();
            }
        };
        var validatecode=(rule,value,callback)=>{
            if(value=='')
            {
                callback(new Error('请输入验证码'));
            }else{
                callback();
            }
        }
        return {
            username:'',
            password:'',
            code:'',
            rules:{
                        username:[{validator:validatename,trigger:'blur'}],
                        password:[{validator:validatepass,trigger:'blur'}],
                        code:[{validator:validatecode,trigger:'blur'}]
                    },
        }
    },
    methods:{
        login(){

        },
        regiester(){

        }
    }
    
}
</script>

<style scoped>
.login{
    width: 500px;
    height: 400px;
    margin: 5% auto;
}
.login span{
    width: 100px;
    float: left;
}
.login div{
    display: inline-block;
}
.login .right{
    width: 380px;
}
.login .right input{
    float: left;
}
.button{
    float: right;
    margin-right: 250px;
}
button{
    margin-top: 20px;
    margin-right: 20px;
}
.hide{
    background-color: aqua;
    float: right;
}
</style>