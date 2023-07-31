package com.diyishaoshuai.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.api.R;
import com.diyishaoshuai.entity.Product;
import com.diyishaoshuai.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    /**
     * 查询轮播商品
     */
    @GetMapping("/findSwiper")
    public R findwiper(){
        List<Product> swiperProductList = productService.list(new QueryWrapper<Product>().eq("isSwiper", true).orderByAsc("swiperSort"));
        Map<String,Object> map = new HashMap<>();
        map.put("message",swiperProductList);
        return R.ok(map);
    }
}
