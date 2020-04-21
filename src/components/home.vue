<template>
<div class="root">
     <!-- 轮播图 -->
    <div class="block">
        <el-carousel  height="250px">
        <el-carousel-item v-for="(item,index) in getimages" :key="index">
            <img :src="item.imageUrl" style="width:100%"/>
            <h3 class="small">{{ item.name }}</h3>
        </el-carousel-item>
        </el-carousel>

        <!-- 播放列表
        <audio :src="getCurrentSongsSrc" autoplay controls loop></audio>
            <ul>
                通过getCurrentIndex==index来判断点击元素的高亮 
                <li v-for="(item,index) in musicData" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                    <h2>{{item.id}}--{{item.name}}</h2>
                    <p>歌手：{{item.author}}</p>
                </li>
            </ul> -->
  </div>
  <!-- 播放器位置 -->
    <!-- <div class="palyPosition"> 
        <audio :src="getCurrentSongsSrc" autoplay controls loop></audio>
    </div> -->
    <audio :src="getCurrentSongsSrc"  controls></audio>
   <!-- 面包屑导航栏 -->
   <!-- 热门推荐 -->
    <div class="hot_root">
       <div class="hot">

        <el-breadcrumb separator="|" class="bottom">
        <el-breadcrumb-item :to="{ path: '/' }"><span class="el-icon-user-solid"></span>热门推荐</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">华语</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">流行</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">摇滚</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">民谣</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">电子</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        </el-breadcrumb>

       </div>
       <div class="line"></div>
       <div class="hot_music" ref="hot_music">
        <ul>
            <!--通过getCurrentIndex==index来判断点击元素的高亮 -->
            <li v-for="(item,index) in randList" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><div class="img"><img :src="item.imgUrl"></div></a>
                
               <p> 歌名：{{item.data.songname}}</p>
               <p>歌手:{{item.data.singer[0].name}}</p>
            </li>
        </ul>
        <div class="hotMore" @click="hotMoreHandler">点击加载更多</div>
       </div>
    </div>
    <div class="clearFloat"></div>
    <!-- 新碟上架 -->
    <div class="new_root">
       <div class="new">
        <span class="el-icon-user-solid"></span>新碟上架
       </div>
       <div class="line"></div>
       <div class="new_music" ref="new_music" >
         <ul>
            <!--通过getCurrentIndex==index来判断点击元素的高亮 -->
            <li v-for="(item,index) in randList" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
               
                <a> <div class="img"><img :src="item.imgUrl">  </div></a>
                
               <p> 歌名：{{item.data.songname}}</p>
               <p>歌手:{{item.data.singer[0].name}}</p>
             
            </li>
        </ul>
        <div class="newMore" @click="newMoreHandler">点击加载更多</div>
       </div>
    </div>
    <div class="clearFloat"></div>
    <!-- 榜单 -->
     <div class="list_root">
       <div class="list">
        <span class="el-icon-user-solid"></span>榜单

       </div>
       <div class="line"></div>
       <!-- <div class="list_music">
           <ul>
               <h2>音乐一榜单</h2>
               <a>
               <li v-for="(item,index) in musicData" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <span>{{item.name}}</span>
                </li>
               </a>
           </ul>
           <ul>
               <h2>音乐二榜单</h2>
               <li v-for="(item,index) in musicData" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><span>{{item.name}}</span></a>
               </li>
           </ul>
           <ul>
               <h2>音乐三榜单</h2>
               <li v-for="(item,index) in musicData" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><span>{{item.name}}</span></a>
               </li>
           </ul>
       </div> -->
       <div class="list_music" :key="index">
           <div class="music_list" ref="more">
            <ul>
               <h2>音乐一榜单</h2>
               
               <li v-for="(item,index) in musicDataList" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><span>{{item.data.songname}}</span></a>
                </li>
               
           </ul>
           <ul>
               <h2>音乐二榜单</h2>
               <li v-for="(item,index) in musicDataList" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><span>{{item.data.songname}}</span></a>
               </li>
           </ul>
           <ul>
               <h2>音乐三榜单</h2>
               <li v-for="(item,index) in musicDataList" :key="index" :class="[{active:getCurrentIndex==index}]" @click="clickHandler(index)">
                <a><span>{{item.data.songname}}</span></a>
               </li>
           </ul>
           
           </div>
           <div class="topMore" @click="topMoreHandler">点击加载更多</div>
       </div>
       <!-- <p>
           {{this.musicDataList | musicFilter(index)}}
       </p> -->
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            musicDataList:[],
            getCurrentIndex: 0,
            getimages:[
                {
                    id:1,
                    imageUrl:'./static/images/1.jpg'
                },
                {
                    id:2,
                    imageUrl:'./static/images/2.jpg'
                },
                {
                    id:3,
                    imageUrl:'./static/images/处处吻.jpg'
                },
                {
                    id:4,
                    imageUrl:'./static/images/芒种.jpg'
                },
                {
                    id:5,
                    imageUrl:'./static/images/逆流成河.jpg'
                },
                {
                    id:6,
                    imageUrl:'./static/images/少年英雄.jpeg'
                },
                {
                    id:7,
                    imageUrl:'./static/images/武汉不孤单.jpg'
                },
                {
                    id:8,
                    imageUrl:'./static/images/下山.jpg'
                }

                
            ],
            index:'',
            songmid:'',
            topHeight:'',
            hotHeight:'',
            newHeight:'',
            randList:{},
            tokenUrl:[],
            songmid:[],
            filaname:[],
            getCurrentSongsSrc:''
        }
    },
    created(){
        let topUrl = '/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923';
        this.$axios.get(topUrl).then(res=>{
            this.index = res.data.code;
            this.musicDataList = res.data.songlist;
            this.imageList = this.musicDataList.data
            // console.log(this.musicDataList)
        }).catch(err=>{
            console.log("获取数据失败"+err)
        });
        let randUrl = '/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472'
        this.$axios.get(randUrl).then(res=>{
            this.randList = res.data.songlist;
           for(let i=0;i<this.randList.length;i++){
            //   this.imageUrlList.push(this.randList[i].data.albumid);
               
               this.randList[i].imgUrl = "http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_"+this.randList[i].data.albumid+"_0.jpg";
            //    console.log(this.randList[i].data.songmid)
                //获取token
               this.songmid.push(this.randList[i].data.songmid)
               this.filaname.push('C400'+this.songmid[i]+'.m4a')
               this.tokenUrl.push('/api/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid='+this.songmid[i]+'&filename='+this.filaname[i]+'&guid=126548448')
               
           }
           console.log(this.tokenUrl[this.tokenUrl.length-1])
             //拼接播放地址
       //http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?vkey=859C187AF22A6E2BBD24532719B999B1135586B8FE1A9E1B1E7A0D08A9EB750AF16006981B84BC1DE4496CA4E8BA2BEC98F385739C65E585&guid=9101546040&uin=0&fromtag=66
        // let play = "http://ws.stream.qqmusic.qq.com/"+this.filaname[0]+"?fromtag=0&guid=126548448&vkey=BF8533902CC0E141464ABE8C23812E49D3A63C226A73848E50244F1B6821923D41B248E99408FAFF38A73F7BC07677535658040E181DFB77"
        let play = "http://111.6.166.24/amobile.music.tc.qq.com/"+this.filaname[0]+"?vkey=4B1896AF07F621B88865B49F8E094AB5CEC2D12F68563C4504CC8C5107019CAB12B11CDC35466988A8CCBEB2083CECEDA6478E8CC62E2B6C&guid=126548448&uin=0&fromtag=66"
        this.getCurrentSongsSrc = play;
        console.log(play)
        }).catch(err=>{
            console.log("获取数据失败"+err)
        });
      
    },
    methods: {
                clickHandler(index) {
                    /* //直接修改的数据属性
                    this.getCurrentIndex = index;
                    */
                    //设置set和get的值
                    this.getCurrentSongsSrc = index
                    
                    
                },
                topMoreHandler(){
                    let moreDom  = this.$refs.more;
                    let curHeight =window.getComputedStyle(this.$refs.more).height;
                    this.topHeight = parseInt(curHeight)+385+'px';
                    moreDom.style.height =this.topHeight;
                },
                hotMoreHandler(){
                    let hotDom = this.$refs.hot_music;
                    let curHeight = window.getComputedStyle(this.$refs.hot_music).height;
                    this.hotHeight = parseInt(curHeight)+515+'px';
             
                    hotDom.style.height = this.hotHeight;
                },
                newMoreHandler(){
                    let newDom = this.$refs.new_music;
                    let curHeight = window.getComputedStyle(this.$refs.new_music).height;
                    this.newHeight = parseInt(curHeight)+515+'px';
              
                    newDom.style.height = this.newHeight;
                }
            },
            filters:{
                    musicFilter:function(val,index){
                        if(index%10==0){
                            return val
                        }else{
                            return false
                        }
                    }
                },
            computed: {
                /*
                 //计算属性默认只有getter 监听的数据属性musicData和getCurrentIndex
                getCurrentSongsSrc: function() {
                    return this.musicData[this.getCurrentIndex].songSrc
                }
                */
                //通过计算属性的set和get方法也可以
                // getCurrentSongsSrc: {
                //     set: function(newV) {       
                //         this.getCurrentIndex = newV
                //     },
                //     get: function() {
                //         return this.musicData[this.getCurrentIndex].songSrc

                //     }
                // },
                //直接在state中获得数据
                // ...mapState({
                //     musicData:state=>state.musicData,
                // })
                //通过getters方法获得数据
                musicData(){
                    return this.$store.getters.musicData  
                }
    },
}
</script>

<style scoped>
* {
            padding: 0;
            margin: 0;
        }

    .clearFloat{
        clear: both;
    }
 input{outline:none;}
.hot_root,.new_root{
    width: 729px;
    margin-left: 25%;
    margin-bottom: 20px;
}
.list_root{
     width: 729px;
    margin-left: 25%;
}
.hot,.new,.list{
    height: 35px;
    width: 689px;
    background-color: blanchedalmond;
    padding-top: 25px;
}
.hot span{
    margin-right: 5px;
}
ul {
            list-style: none;
        
        }
.hot_music,.new_music{
    width: 100%;
    height: 550px;
    overflow: hidden;
    transition: height 1s linear 0s;
    position: relative;
}
/* .hotMore{
    width: 689px;
    height: 50px;
    background-color: #66ffee;
    position: absolute;
    bottom: -7px;
    left: 0px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
} */
 .hot_music ul li,.new_music ul li {
           margin-bottom: 10px;
            padding: 10px 5px;
            border-radius: 3px;
            float: left;
            width: 25%;
            font-size: 14px;
        }
/* .new_music{
    width: 100%;
    height: 550px;
    overflow: hidden;
    transition: height 1s linear 0s;
    position: relative;
} */
/* .newMore{
    width: 689px;
    height: 50px;
    background-color: #66ffee;
    position: absolute;
    bottom: -7px;
    left: 0px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
} */
.img>img{
    width: 100px;
    height: 100px;

}
        ul li.active {
            background-color: #66ffee;
        }
.line{
    width: 689px;
    height: 1px;
    background: red
}
.list_music{
    position: relative;

}
.music_list{
    width: 100%;
    height:418px;
    overflow: hidden;
    transition:height 1s linear 0s;
    margin-bottom: 10px;  

}
.music_list ul{
    width: 25%;
    margin-right: 40px;
    height: 300px;
    float: left; 
}
.music_list>ul>li{
    margin-top: 5px;
}
.topMore,.hotMore,.newMore{
    width: 689px;
    height: 50px;
    background-color: #66ffee;
    position: absolute;
    bottom: -7px;
    left: 0px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
}


audio{
    position: absolute;
    margin-top: 1%;
    margin-right: 10%;
    background-color: red;
}

</style>