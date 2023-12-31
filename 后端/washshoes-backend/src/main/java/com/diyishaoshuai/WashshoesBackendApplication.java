package com.diyishaoshuai;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


// Generated by https://start.springboot.io
// 优质的 spring/boot/data/security/cloud 框架中文文档尽在 => https://springdoc.cn

@SpringBootApplication //此注解声明该类是springboot的引导类
@MapperScan("com.diyishaoshuai.mapper ")
public class WashshoesBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(WashshoesBackendApplication.class, args);
    }

}
