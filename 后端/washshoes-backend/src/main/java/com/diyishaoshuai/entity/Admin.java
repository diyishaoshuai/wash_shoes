package com.diyishaoshuai.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * Created with IntelliJ IDEA.
 *
 * @author：
 * @date： 2023/8/2
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@TableName("t_admin")
@Data
public class Admin {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String userName;
    private String password;

    @TableField(select = false)
    private String newPassword;

}
