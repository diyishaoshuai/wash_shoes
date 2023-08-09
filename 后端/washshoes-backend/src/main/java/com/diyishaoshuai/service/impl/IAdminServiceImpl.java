package com.diyishaoshuai.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.diyishaoshuai.entity.Admin;
import com.diyishaoshuai.mapper.AdminMapper;
import com.diyishaoshuai.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created with IntelliJ IDEA.
 *
 * @author： 第一少帅
 * @date： 2023/8/7
 * @description：管理员Service实现类
 * @modifiedBy：
 * @version: 1.0
 */
@Service("adminService")
public class IAdminServiceImpl extends ServiceImpl<AdminMapper, Admin> implements IAdminService {
    @Autowired
    private AdminMapper adminMapper;
}
