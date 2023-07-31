package com.diyishaoshuai.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.diyishaoshuai.entity.Product;
import com.diyishaoshuai.mapper.ProductMapper;
import com.diyishaoshuai.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * 商品Service实现类
 * */

@Service("productService")
public class IProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements IProductService {
    @Autowired
    private ProductMapper productMapper;
}
