<template>
<div>
  <div id="app">
    <el-container>
          <el-header class="head">
            <ul>
            <li>
                <span class="el-icon-user-solid title">网易云音乐</span>
            </li>
            <li>
              <router-link to="/">发现音乐</router-link>
            </li>
            <li><router-link to="/myMusic">我的音乐</router-link></li>
            <li><router-link to="/frends">朋友</router-link></li>
            <li><router-link to="/shop">商城</router-link></li>
            <li><router-link to="/musicer">音乐人</router-link></li>
            <li><router-link to="/down">下载客户端</router-link></li>
            <!-- <li class="search "><router-link to="/search" >
            <span class="el-icon-user-solid"></span>
              <input type="text"    placeholder="音乐/视频/电台/用户">
            </router-link></li> -->
            <li class="active">
            <div class="search" @mouseleave="leaveHandler" @mouseenter="enterHandler">
            <span class="el-icon-user-solid"></span>
              <input type="text"  style="border:none" @keyup.enter="enterHandler"  @input="inputHandler" v-model="searchKey" autocomplete="on" placeholder="音乐/视频/电台/用户">
                <div class="search_hidden" ref="search_hidden" >
                  <ul>
                    <li v-for="(item,index) in searchList" :key="index">
                      {{item.songname}}{{item.singer[0].name}}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="work"><router-link to="/creater">创作者中心</router-link></li>
            <li><router-link to="/login">登录</router-link></li>
          </ul>
          </el-header>
          <el-main class="main">
            <router-view/>
          </el-main>
          <el-footer class="foot"><div class="footer"> 
              <p>仅供本人娱乐，不喜勿喷，有事请致电10086.<br />违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
            </div></el-footer>
        </el-container>
  </div>
  <!-- {{count}}
  {{msg}}
  {{countAlisa}}
  {{countLocalState}} -->
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      num:10,
      searchKey:'',
      song:{},
      searchList:[],
    }
  },
  methods:{
    enterHandler(){
            if(this.searchKey!='')
            {
               this.inputHandler();
            }else{
              return false
            }
        },
        inputHandler(){
         
           if(this.searchKey!=''){
            let hiddenDom = this.$refs.search_hidden;
             hiddenDom.style.display = 'block';
            //  hiddenDom.innerHTML = this.searchKey;
            let urls = '/api//soso/fcgi-bin/client_search_cp?aggr=1&cr=1&format=json&flag_qc=0&p=1&n=30&w='+this.searchKey;
                
                this.$axios.get(urls).then(res=>{
                  let data = res.data.data;
                  this.searchList = data.song.list;
                }).catch(err=>{
                  console.log("获取数据失败" + err)
                })
           }else{
             return false;
           }
        
        },
        leaveHandler(){
            let hiddenDom = this.$refs.search_hidden;
            hiddenDom.style.display = 'none';
        },
        enterHandler(){
          if(this.searchKey!==''){
            let hiddenDom = this.$refs.search_hidden;
          hiddenDom.style.display = 'block';
          this.inputHandler();
          }else{
            return false;
          }
        }
  },
  mounted(){
    let nav = this.$refs.nav;

    console.log(nav)
  },
  /*普通方法获取store中的状态
  computed:{
    count(){
      return this.$store.state.count
    },
    msg(){
      return this.$store.state.msg
    }
  }*/

  //使用mapState辅助函数获取store中的状态
 /*
 computed:mapState({
    //使用箭头函数传值
    count:state=>state.count,
    msg:state=>state.msg,
    //使用字符串参数'count' 等同于state=>state.count    countAlisa为count的别名
    countAlisa:'count',
    //使用函数传值
    countLocalState(state){
      return state.count + this.num
    }
  })
  */

 //对象的展开运算符
 computed:{
   ...mapState({
     countAlisa:'count',
     countLocalState(state){
      return state.count + this.num
    },
    count:state=>state.count,

   })
 }
 
    /*
    //当前组件的计算属性的方法和store中state中的key一样，可以使用下面的简便方式
    computed:{
      ...mapState([
        'count',
        'msg'
      ])
    }*/
}
</script>

<style>
#app{
  min-width: 1180px;
  overflow: hidden;
}
.head{
  width: 1480px;
  background-color:grey;
  
}
.head .title{
  font-size: 2rem;
}

.head ul li{
  list-style: none;
  display: inline-block;
  margin-right: 2%;
}

.head ul li a{
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}
/* .logo{
  font:20px
} */
.head ul li a:hover{
  
  color: #fff;
}
.search{
  border-radius: 20px;
  border: 1px solid white;
  padding: 5px 5px;
  display: inline-block;
  background-color: #fff;
  position: relative;
}
.search_hidden{
  position: absolute;
  width: 100%;
  height: auto;
  background-color: #fff;
  border: #ddd 1px solid;
  display: none;
  z-index: 99;

}
.search_hidden>ul{
  padding: 0;
  height: 213px;
  overflow:auto;
}
.search_hidden>ul>li:hover{
  background-color: aquamarine;
}
.work{
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 5px;
}
/* .main{
  background-color: aqua;
} */
.foot{
  background-color: blueviolet;
}
.footer{
  margin-left: 30%;
}
 input{outline:none;}
</style>
