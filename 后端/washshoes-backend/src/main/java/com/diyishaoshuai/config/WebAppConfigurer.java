package com.diyishaoshuai.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebAppConfigurer implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/image/swiper/**").addResourceLocations("file:D:\\wash_Shoes\\swiperImgs\\");
//        registry.addResourceHandler("/image/swiper/**").addResourceLocations("https://washshoes-1313021748.cos.ap-nanjing.myqcloud.com\\");

    }
}
