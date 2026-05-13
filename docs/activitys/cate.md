---
sidebar_position: 6
---

# 分类组合活动

- 活动参考

| 分类a | 分类b | 活动 
| -------- | -------- | -------- | 
| [`Kitchen Islands`](https://beta.yitashop.com/category/kitchen-islands-c-99.html)    | [` Dining Tables`](https://beta.yitashop.com/category/dining-tables-c-62.html)    | [1042](https://beta.yitashop.com/sg_os/activity/productGroup/detail?group_id=1042)  
| [`Kitchen Islands`](https://beta.yitashop.com/category/kitchen-islands-c-99.html)    | [`Bar Cabinets & Credenzas`](https://beta.yitashop.com/category/bar-cabinets-and-credenzas-c-1029.html)    | [1043](https://beta.yitashop.com/sg_os/activity/productGroup/detail?group_id=1043) 

# 活动逻辑
- 显示逻辑
- 商品详情：活动标签 方法 getActivityTag,取数逻辑是当前活动配置的 优惠组标签：优惠组文案
- 购物车：满足分类组合 方法 getSaveList 显示优惠组标签
- 订单详情，邮件，发票，商品小记 显示优惠组标签

- 计算逻辑
- 获取当前活动 方法getCateDiscount，获取购物车满足活动组合的商品并记录到session：'cate_discounts'
- coupon 根活动可以配置叠加或者互斥，互斥时可以强制使用，核心方法syscoupon->getProducts
- coupon 计算购物车金额使用分类组合折扣后的金额，getProductsTotal

- 记录逻辑
- 订单折扣记录到 orders_total ot_cate
- 订单商品 折扣记录到 ws_orders_products_extend cate_discount
- 活动数据记录到活动表 ws_promtion_activities_group match_categories,main_categories,grads_sub_categories