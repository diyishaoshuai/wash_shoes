package com.diyishaoshuai.controller.admin;

import com.alibaba.druid.util.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.diyishaoshuai.constant.SystemConstant;
import com.diyishaoshuai.entity.Admin;
import com.diyishaoshuai.entity.R;
import com.diyishaoshuai.service.IAdminService;
import com.diyishaoshuai.util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @author： 第一少帅
 * @date： 2023/8/7
 * @description：管理员Controller
 * @modifiedBy：
 * @version: 1.0
 */
@RestController
public class AdminController {
    @Autowired
    private IAdminService adminService;

    //管理员登录
    @PostMapping("/adminLogin")
    public R adminLogin(@RequestBody Admin admin){
        if (admin==null){
            return R.error();
        }
        if (StringUtils.isEmpty(admin.getUserName())){
            return R.error("用户名不能为空！");

        }
        if(StringUtils.isEmpty(admin.getPassword())){
            return R.error("密码不能为空！");
        }
        Admin resultAdmin = adminService.getOne(new QueryWrapper<Admin>().eq("userName",admin.getUserName()));
        if (resultAdmin==null){
            return R.error("用户名不存在！");
        }
        if (resultAdmin.getNewPassword().trim().equals(admin.getPassword())){
            return R.error("用户名或者密码错误！");
        }
        String token = JwtUtils.createJWT("-1","admin", SystemConstant.JWT_TTL);
        Map<String ,Object> resultMap = new HashMap<>();
        resultMap.put("token",token);
        return R.ok(resultMap);
    }
}
