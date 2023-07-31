// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        imagesSrc: [
            // 'https://typroa-image-1313021748.cos.ap-nanjing.myqcloud.com/image/image-20230405195958421.png',
            // 'https://typroa-image-1313021748.cos.ap-nanjing.myqcloud.com/image/3LO_%5BHPK6G%7DXCTFC1U%60%7DBB2.png',
            // 'https://s2.loli.net/2022/01/27/9H14zgxc8JskSLq.jpg',
        ],


        indexListcontent: [{
                imgUrl: "../../img/icon_index_children_shoes.png",
                shoesName: "儿童鞋",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            },
            {
                imgUrl: "../../img/icon_index_whiteShoes.png",
                shoesName: "小白鞋",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            }, {
                imgUrl: "../../img/icon_index_Leathershoes.png",
                shoesName: "皮鞋",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            },
            {
                imgUrl: "../../img/icon_index_Footballshoes.png",
                shoesName: "足球鞋",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            },
            {
                imgUrl: "../../img/icon_index_Boots.png",
                shoesName: "长靴",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            },
            {
                imgUrl: "../../img/icon_index_Basketballshoes.png",
                shoesName: "篮球鞋",
                priceForFarmer: "19.9",
                priceForVip: "9.9",
                num: 0,
            },
        ],
    },
    onInput(event) {
        this.setData({
            num: event.detail.value
        })
    },

    // 加减数字按钮
    numSub: function (e) {
        const index = e.currentTarget.dataset.index
        const indexListcontent = this.data.indexListcontent;
        indexListcontent[index].num -= 1
        this.setData({
            indexListcontent: indexListcontent
        })
    },
    numAdd: function (e) {
        const index = e.currentTarget.dataset.index
        const indexListcontent = this.data.indexListcontent;
        indexListcontent[index].num += 1
        this.setData({
            indexListcontent: indexListcontent
        })
    },
    //生命周期函数--监听页面加载 
    onLoad: function (options) {
        // 发送异步请求，获取后端数据
        wx.request({
            url: 'http://localhost:8888/product/findSwiper',
            method: "GET",
            success: (result) => {
                console.log(result)
                console.log(result.data.data.message)
                this.setData(
                    {
                    imagesSrc:result.data.data.message
                })
            },
        })
    }
})