package com.diyishaoshuai.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/boot")
public class ControllerDemo {
    @GetMapping("Demo")
    public String demo(){
        return "张森威就是个大帅逼";
    }
}
