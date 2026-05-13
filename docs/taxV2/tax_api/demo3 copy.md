---
sidebar_position: 6
---

# 后台退款计算部分

退款金额计算接口数据（新增参数amount_type金额类型1含税0不含税默认不含税）
```jsx title="/_os/index.php?com=order&t=orderRefund"
{
    "is_send": 1,
    "sku_list": [
        {
            "sku": "HEFTPB-8022",
            "refund_amount": 2868.02
        }
    ],
    "product_amount": 2868.02,
    "shipping_amount": 0,
    "amount_type":1,
    "sg_order_id": "YT10001198609"
}
```
获取退款金额接口（新增参数amount_type金额类型1含税0不含税默认不含税）
```jsx title="/_os/index.php?com=order&t=getRefundAmount"
{
    "code": 200,
    "data": {
        "product_amount": "100",//商品金额
        "product_amount_tax": 10.3,//商品税费
        "product_amount_total": "110.30",//商品总金额（含税）
        "shipping_amount": "0",//运费金额
        "shipping_amount_tax": 0,//运费税费
        "shipping_amount_total": "0",//运费总金额（含税）
        "amount_tax": "10.30",//总税费（商品税费+运费税费）
        "order_amount_total": "110.30",//最终退款金额（实际退款金额）
        "refund_amount_total": "110.30",//最终退款金额（实际退款金额）
        "refund_product_total": "100",//最终退款金额（商品不含税）
        "refund_tax_total": "10.30",//最终退款金额（税费总金额）
        "refund_shipping_total": "0",//最终退款金额（运费不含税）
        "sku_list": [
            {
                "sku": "HEFTPB-8022",
                "refund_amount": 100,
                "product_amount": 100,//不含税退款金额
                "product_amount_tax": 10.3,//退款税费
                "product_amount_total": "110.30"//退款总额
            }
        ]
    },
    "message": "success"
}
```