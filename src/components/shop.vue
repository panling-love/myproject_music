<template>
    <div class="shop">
        <!-- title栏 -->
        <div class="title">
            <div class="logo">
                <strong>
                <span class="el-icon-user-solid"></span>
                <span>网易云音乐>商城</span>
                </strong>
            </div>
            <div class="logo_right">
                <span class="el-icon-user-solid"></span>
                <input type="text"  style="border:none;" @keyup.enter="enterHandler" placeholder="网易云买你所买">
            </div>
            <span class="el-icon-user-solid cart"></span>
            <span class="login">
                <el-dropdown>
                    <el-button >
                        登录<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><router-link to="/login">手机号登录</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/login">微信登录</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/login">QQ登录</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/login">新浪微博登录</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/login">网易邮箱账号登录</router-link></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
        <!-- 清除浮动 -->
        <div class="clearFloat"></div>
         <!--轮播图  -->
        <div class="block">
            <el-carousel height="250px">
            <el-carousel-item v-for="item in getimages" :key="item.id">
                <h3 class="small"><img :src='item.imageUrl'  style="width:100%;height:300px" /></h3>
            </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 编辑推荐 -->
        <div class="editChoose" v-for="it in 2" :key="it">
            <h2>编辑推荐</h2>
            <div class="line"></div>
            <ul>
                <li v-for="(item,index) in musicData" :key="index" :class="[{active:getmusicIndex==index}]" @click="ClickHeadler(item,index)">
                    <a><img :src='item.imageUrl' alt="我是图片" />
                    <p>{{item.author}}</p>
                    <p>￥{{item.id}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 清除浮动 -->
        <div class="clearFloat"></div>
        <audio :src="getCurrentSongsSrc" autoplay loop controls></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getmusicIndex:0,
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
             musicData: [

            {
                id: 1,
                name: '于荣光 - 少林英雄',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: '于荣光',
                songSrc: './static/music/于荣光 - 少林英雄.mp3'
            },

            {
                id: 2,
                name: 'Joel Adams - Please Dont Go',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'Joel Adams',
                songSrc: './static/music/Joel Adams - Please Dont Go.mp3'
            },

            {
                id: 3,
                name: 'MKJ - Time',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'MKJ',
                songSrc: './static/music/MKJ - Time.mp3'
            },

            {
                id: 4,
                name: 'Russ - Psycho (Pt. 2)',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'Russ',
                songSrc: './static/music/Russ - Psycho (Pt. 2).mp3'
            },
            {
                id: 1,
                name: '于荣光 - 少林英雄',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: '于荣光',
                songSrc: './static/music/于荣光 - 少林英雄.mp3'
            },

            {
                id: 2,
                name: 'Joel Adams - Please Dont Go',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'Joel Adams',
                songSrc: './static/music/Joel Adams - Please Dont Go.mp3'
            },

            {
                id: 3,
                name: 'MKJ - Time',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'MKJ',
                songSrc: './static/music/MKJ - Time.mp3'
            },

            {
                id: 4,
                name: 'Russ - Psycho (Pt. 2)',
                imageUrl:'./static/iamges/少年英雄.jpeg',
                author: 'Russ',
                songSrc: './static/music/Russ - Psycho (Pt. 2).mp3'
            }

        ],
    }
    },
    methods:{
        enterHandler(){
            alert('搜索成功！')
        },
        ClickHeadler(item,index){
            this.getmusicIndex = index;
        }
    },
    computed:{
        getCurrentSongsSrc:{
            //通过计算属性默认getter方式获得index
            //return this.musicData[this.getmusicIndex].songSrc;
            // //通过set和get方法获得index   先将新值传给getmusicIndex 再获得对象songSrc
             set:function(newV){
                this.getmusicIndex = newV;
            },
            get:function(){
                return this.musicData[this.getmusicIndex].songSrc
            }
        }
            
    }
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
 input{outline:none;}
.title,.logo{
    display: inline-block;
}
.logo{
    font-size: 30px;
    margin-left: 20px;
}
.shop{
    width: 1100px;
    margin-left: 15%;
}
.title{
    width: 100%;
    font-size: 20px;
    float: left;
}
.logo_right{
    width: 300px;
    height: 30px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    margin-left: 300px;
}
a{
    text-decoration: none;
    color: black;
}
.cart,.login{
    margin-right: 50px;
}
.cart{
    margin-left: 20px;
}
.clearFloat{
    clear: both;
}
.block{
    margin-bottom: 100px;
    height: 300px;
    margin-top: 20px;
}
.line{
    border: 1px solid black;
    width: 100%;
    height: 0px;
}
ul li{
    list-style: none;
}
.editChoose ul li{
    width: 25%;
    float: left;
}
.editChoose{
    margin-bottom: 200px;
}
.active{
    background-color: aqua;
}
</style>