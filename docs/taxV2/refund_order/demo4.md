---
sidebar_position: 6
---

# 多商品收税没运费


1.使用地址为WA（Washington）邮编98001不选择运费创建的订单（**HEFTPB-8022**，**HEFTBC-8009**，**HEFTET-8019**）
- 测试订单 **YT10001198632** 
2.退款场景
- 部分金额退款（含税/不含税）
- 全部金额退款（含税/不含税）
3.请求参数代码
```jsx title="退款参数"
{
    "is_send": 1,
    "sku_list": [
        {
            "sku": "HEFTPB-8022",
            "refund_amount": 1000
        },
        {
            "sku": "HEFTBC-8009",
            "refund_amount": 1000
        }
        ,{
            "sku": "HEFTET-8019",
            "refund_amount": 290.59
        }
    ],
    "product_amount": 2290.59,
    "shipping_amount": 0,
    "amount_type":0,
    "sg_order_id": "YT10001198632"
}
```