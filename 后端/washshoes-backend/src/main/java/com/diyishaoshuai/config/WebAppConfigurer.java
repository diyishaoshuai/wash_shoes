package com.diyishaoshuai.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
  * Web项目配置类
  * Created with IntelliJ IDEA.
  * @author： 第一少帅
  * @date： 2023-07-20 17:09:03
  * @description： 
  * @modifiedBy：
  * @version: 1.0
*/
@Configuration
public class WebAppConfigurer implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/image/swiper/**").addResourceLocations("file:D:\\wash_Shoes\\swiperImgs\\");
//        registry.addResourceHandler("/image/swiper/**").addResourceLocations("https://washshoes-1313021748.cos.ap-nanjing.myqcloud.com\\");

    }
}
