---
sidebar_position: 6
---

# 后台退款部分

退款界面接口数据
```jsx title="/_os/index.php?com=order&t=getOrderRefund"
{
    "refundable_value": "1484.01",//不含税可退金额
    "refundable_tax_value": "1636.86",//含税可退金额
    "refundable_shipping_value": "10.00",//不含税运费可退金额
    "refundable_shipping_tax_value": "0.00",//含税运费可退金额
    "refundable_product_value": "1484.01",//不含税商品可退金额
    "refundable_product_tax_value": "1636.86",//含税商品可退金额
    "refundable_format": "$1,484.01",
    "refundable_tax_format": "$1,636.86",
    "refundable_product_format": "$1,484.01",
    "refundable_product_tax_format": "$1,636.86",
    "refundable_shipping_format": "$10",//不含税运费可退金额
    "refundable_shipping_tax_format": "$0",//含税运费可退金额
    "products": [
        {
            "price_tax":"1584.01",//含税单商品实际收（用于填写数量时候回填输入框）
            "price":"1484.01",//不含税单商品实际收（用于填写数量时候回填输入框）
            "product_refundable_value": "1484.01",//不含税可退金额（用于限制金额填写上限）
            "product_refundable_tax_value": "1584.01",//含税可退款商品金额（用于限制金额填写上限）
            "format_sub_total" : "$100",//不含税实收（用于显示实付(不含税):）
            "format_sub_total_tax":"",//含税实收(用于显示实付(含税):)
            "products_tax_total" : "$10",//商品销售税（用于显示销售税:）
        }
    ]
}
```

退款接口（新增参数amount_type金额类型1含税0不含税默认不含税）
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
        "product_amount": "100",
        "product_amount_tax": 10.3,
        "product_amount_total": "110.30",
        "shipping_amount": "0",
        "shipping_amount_tax": 0,
        "shipping_amount_total": "0",
        "amount_tax": "10.30",
        "order_amount_total": "110.30",
        "refund_amount_total": "110.30",
        "refund_product_total": "100",
        "refund_tax_total": "10.30",
        "refund_shipping_total": "0",
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