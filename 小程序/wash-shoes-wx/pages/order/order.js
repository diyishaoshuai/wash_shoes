// pages/order/order.js
Page({
    data: {
        // 订单数据
        toBePickedUp:[
            {
            id:123456789,
            send: "张森威",
            receive: "XXX自助洗鞋店",
            departure: "湖南信息学院XX栋XX层XXXX",
        },
        {
            id:123456789,
            send: "张森威",
            receive: "XXX自助洗鞋店",
            departure: "湖南信息学院XX栋XX层XXXX",
        },
        {
            id:123456789,
            send: "张森威",
            receive: "XXX自助洗鞋店",
            departure: "湖南信息学院XX栋XX层XXXX",
        },
    
    
    ],
        inStorage:[],
        Cleaning:[],
        inTransit:[],
        Completed:[],


        // 导航颜色切换
        toBePickedUp_color:"#99ddcc",
        inStorage_color:"black",
        Cleaning_color:"black",
        inTransit_color:"black",
        Completed_color:"black",

        // 下划线
        toBePickedUp_Line:"4rpx solid",
        inStorage_Line:"none",
        Cleaning_Line:"none",
        inTransit_Line:"none",
        Completed_Line:"none",

        // 展示列表
        // toBePickedUp_content_view:"false",
        inStorage_content_view:"true",
        Cleaning_content_view:"true",
        inTransit_content_view:"true",
        Completed_content_view:"true",
    },


    // 点击跳转功能
    toBePickedUp_view:function(){
        this.setData({
            toBePickedUp_color:"#99ddcc",
            inStorage_color:"black",
            Cleaning_color:"black",
            inTransit_color:"black",
            Completed_color:"black",

            toBePickedUp_Line:"4rpx solid",
            inStorage_Line:"none",
            Cleaning_Line:"none",
            inTransit_Line:"none",
            Completed_Line:"none",

            toBePickedUp_content_view:"false",
            inStorage_content_view:"true",
            Cleaning_content_view:"true",
            inTransit_content_view:"true",
            Completed_content_view:"true",
        })
    },

    inStorage_view:function(){
        this.setData({
            toBePickedUp_color:"black",
            inStorage_color:"#99ddcc",
            Cleaning_color:"black",
            inTransit_color:"black",
            Completed_color:"black",

            toBePickedUp_Line:"none",
            inStorage_Line:"4rpx solid",
            Cleaning_Line:"none",
            inTransit_Line:"none",
            Completed_Line:"none",

            toBePickedUp_content_view:"true",
            inStorage_content_view:"false",
            Cleaning_content_view:"true",
            inTransit_content_view:"true",
            Completed_content_view:"true",
        })
    },

    Cleaning_view:function(){
        this.setData({
            toBePickedUp_color:"black",
            inStorage_color:"black",
            Cleaning_color:"#99ddcc",
            inTransit_color:"black",
            Completed_color:"black",

            toBePickedUp_Line:"none",
            inStorage_Line:"none",
            Cleaning_Line:"4rpx solid",
            inTransit_Line:"none",
            Completed_Line:"none",

            toBePickedUp_content_view:"true",
            inStorage_content_view:"true",
            Cleaning_content_view:"false",
            inTransit_content_view:"true",
            Completed_content_view:"true",
        })
    },

    inTransit_view:function(){
        this.setData({
            toBePickedUp_color:"black",
            inStorage_color:"black",
            Cleaning_color:"black",
            inTransit_color:"#99ddcc",
            Completed_color:"black",

            toBePickedUp_Line:"none",
            inStorage_Line:"none",
            Cleaning_Line:"none",
            inTransit_Line:"4rpx solid",
            Completed_Line:"none",

            toBePickedUp_content_view:"true",
            inStorage_content_view:"true",
            Cleaning_content_view:"true",
            inTransit_content_view:"false",
            Completed_content_view:"true", 
        })
    },

    Completed_view:function() {
        this.setData({
            toBePickedUp_color:"black",
            inStorage_color:"black",
            Cleaning_color:"black",
            inTransit_color:"black",
            Completed_color:"#99ddcc",

            toBePickedUp_Line:"none",
            inStorage_Line:"none",
            Cleaning_Line:"none",
            inTransit_Line:"none",
            Completed_Line:"4rpx solid",

            toBePickedUp_content_view:"true",
            inStorage_content_view:"true",
            Cleaning_content_view:"true",
            inTransit_content_view:"true",
            Completed_content_view:"false", 
        })
    }
})