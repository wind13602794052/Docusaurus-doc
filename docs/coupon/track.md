---
sidebar_position: 6
---

# 后台接口修改

## 商品物流列表
- 编辑新增时获取下拉列表
```jsx title="/_os/index.php?com=product&t=getLogisticsList"
{
    "ship_type" : "",//运输方式
    "install_service" : "",//是否需要安装
    "weight":""//最大的包裹重量
}
```
