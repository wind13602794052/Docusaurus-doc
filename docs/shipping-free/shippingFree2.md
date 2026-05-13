---
sidebar_position: 1
---

# 2.0

## 商品详情接口
- 新增返回以下数据
```jsx title="/api/product/getProductInfo"
{
    "ship_type_desc": {
        "ship_note": "",//免费标签
        "ship_note_url": "",//标签文章url
        "ship_type": "STANDARD DELIVERY",
        "ship_desc": "In Stock and Ready for Delivery to",
        "ship_type_url": "http://local.yitashop.com/article/shipping-methods.html?aid=77"
    }
}
```
- 每个类型的sku参考

| 类型 | sku_id | product_id 
| -------- | -------- | -------- | 
| 1-sp设置免费商品   | [`4197`](https://beta.yitashop.com/products/magnus-39-inch-lift-top-solid-wood-coffee-table-p-4197.html)   | [3034](https://beta.yitashop.com/sg_os/product/detail?pid=3034&type=update)
| 2-ltl设置为强制免费   | [`7630`](https://beta.yitashop.com/products/himmel-60-inch-desk-p-7630.html)    | [5641](https://beta.yitashop.com/sg_os/product/detail?pid=5641&type=update)  
| 3-ltl设置为LTL可升级（可以选择Room）     | [`7909`](https://beta.yitashop.com/products/5-piece-thursen-chevron-bedroom-set-p-7909.html)    | [5863](https://beta.yitashop.com/sg_os/product/detail?pid=5863&type=update)  
| 4-ltl设置为in-home   | [`7910`](https://beta.yitashop.com/products/5-piece-thursen-chevron-bedroom-set-p-7910.html)    | [5863](https://beta.yitashop.com/sg_os/product/detail?pid=5863&type=update)  
| 5-ltl in-home（超重强制）    | [`7725`](https://beta.yitashop.com/products/thursen-63-inch-double-bathroom-vanity-p-7725.html)    | [5712](https://beta.yitashop.com/sg_os/product/detail?pid=5712&type=update)  
| 6-闪购商品    | [`7934`](https://beta.yitashop.com/products/dorian-cotton-linen-dining-chairs-set-p-7934.html)    | [944](https://beta.yitashop.com/sg_os/activity/productGroup/detail?group_id=944)  
| 7-清仓商品    | [`7934`](https://beta.yitashop.com/products/modern-leather-upholstered-dining-chairs-with-carbon-steel-frame-set-of-2-p-4474.html)    | [862](https://beta.yitashop.com/sg_os/activity/productGroup/detail?group_id=862)
| 8-满减商品    | [`4022`](https://beta.yitashop.com/products/mid-century-modern-solid-wood-dining-table-with-pedestal-base-512-inch-p-4022.html)    | [922](https://beta.yitashop.com/sg_os/activity/productGroup/detail?group_id=922)
## 购物车接口
- 新增返回以下数据，新增参数show_group_shipping
```jsx title="/api/shopcart/getCart"
{
  "product_group": [
    {
      "sort": 1,
      "title": "STANDARD SHIPPING",
      "desc": "Delivered to the front door of your home or building.",
      "group_key": "SP",
      "group_desc": "STANDARD SHIPPING"
    },
    {
      "sort": 2,
      "title": "DOORSTEP DELIVERY",
      "sub_title": "DOORSTEP DELIVERY",
      "desc": "Delivered to your doorstep, assembly and unpacking not included.",
      "group_key": "LTL",
      "is_insert": true,
      "group_desc": "DOORSTEP DELIVERY",
      "delivery_option": //升级选项
        [
          {
              "is_select": false,//是否选中
              "is_cancel": true,
              "service_code": "in_room",
              "service_cost": "$99",
              "service_cost_activity": "$49",
              "title": "ROOM OF CHOICE",
              "title_list": [
                  "Placement in the room of your choice.",
                  "Delivery time scheduled, signature required."
              ]
          },
          {
              "is_select": true,
              "is_cancel": true,
              "service_code": "in_home",
              "service_cost": "$199",
              "service_cost_activity": "$149",
              "title": "WHITE GLOVE DELIVERY",
              "title_list": [
                  "Everything in Room of Choice.",
                  "Professional unpacking and assembly.",
                  "Hassel-free removal and recycling of all packaging."
              ]
          }
        ]
    }
  ]
}
```
- 核心方法setDeliveryProduct
### 前台核心改动
- 删除shipping_free_list显示运费列表明细
- 删除ship_note 字段显示Free标签
- 购物车分组商品数据新增delivery_option 勾选服务交互，具体字段逻辑根checkoutv2 接口逻辑一致
- 勾选服务接口为/api/shopcart/setAppendServie
- 修改运费计算方式，是否勾选in_home/in_room服务收费核心方法为getTotalShipCostV2，保留旧逻辑arb站使用
- 根据逻辑新增记录订单商品标记，核心方法为getZipLimit
- 创建订单后根据setProductShipping异步进行计算标签
- 计算运费核心方法getTotalShipCostV2
- 各种数据记录维持不变
- 计算标签去除非收运费限制
```mermaid
kanban
  运费记录
    [orders_total表ot_shipping 
    总运费]
    [ws_transactions表shipping_amount 
    实收运费]
  运费折扣
    [orders_total表ot_shipping_discount 
    运费折扣]
  运费活动
    [ws_shipping_activities表]
  商品运输方式
    [ws_products_attributes表
    logistics_type]
  订单商品推送到erp的备注标记
    [ws_orders_product表
    is_zip_limit]
```
## 后台订单显示逻辑

- 推送标签逻辑
```mermaid
flowchart TD
R11[
is_zip_limit:11
商品标签：
SP
客服备注：
]
R12[
is_zip_limit:12
商品标签：
LTL_IDD_NO_CEVA
客服备注：
]
R13[
is_zip_limit:13
商品标签：
LTL_IDD
客服备注：
]
R14[
is_zip_limit:14
商品标签：
LTL_ROC_NO_CEVA
客服备注：
]
R15[
is_zip_limit:15
商品标签：
LTL_ROC
客服备注：
]
R16[
is_zip_limit:16
商品标签：
LTL_WGD_NO_CEVA
客服备注：SKU+IN-HOME Delivery+Ceva不可选
]
R17[
is_zip_limit:17
商品标签：
LTL_WGD_THIRD
客服备注：SKU+IN-HOME Delivery+Need a Third Man Quote
]
R18[
is_zip_limit:18
商品标签：
LTL_WWA
客服备注：SKU+IN-HOME Delivery+WWA-$199
]
R19[
is_zip_limit:19
商品标签：
LTL_WGD
客服备注：SKU+IN-HOME Delivery+WGD-$99
]
R20[
is_zip_limit:20
商品标签：
LTL_WGD_NO_CEVA
客服备注：SKU+IN-HOME Delivery+Ceva不可选
]
P1{包裹>=400}

P2{命中Ceva不可选邮编，数据表pb_inhome_need_install_zipcode}

P3{需要组装}
P5{
  分类
  1034 -Bathroom Vanities，
  62 - Dining Tables，
  99 - Kitchen Islands, 
}
P6{
  分类
  1034 -Bathroom Vanities，
  62 - Dining Tables，
  99 - Kitchen Islands, 
}

P7{
  分类
  1034 -Bathroom Vanities，
  62 - Dining Tables，
  99 - Kitchen Islands
}



D1(IN-HOME Delivery)
D2(IN-ROOM Delivery)
D3(SP-FREE Delivery)
D4(LTL-FREE Delivery)

D3 -->R11
D4 -->P5
P5 -->|yes|R12
P5 -->|no|R13
D2 -->P6
P6 -->|yes|R14
P6 -->|no|R15

D1 -->P7
P7 -->|yes|R16
P7 -->|no|P1
P1 -->|yes|R17
P1 -->|no|P2
P2 -->|yes|R20
P2 -->|no|P3
P3 -->|yes|R18
P3 -->|yes|R19
```

## 测试订单
3530111333300000
YT10001291350
YT10001291349
