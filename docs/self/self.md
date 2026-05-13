---
sidebar_position: 6
---

# 商详页、item页新增自提选项
- 1现有的配送eta样式、文案修改：

    后台->主题->自定义文案 筛选详情页也可以动态修改eta显示的样式

- 2详情页新增FREE PICKUP，FREE DOORSTEP DELIVERY选项
```jsx title="/api/shopcart/checkoutv2"
{
    "ship_type_list": [
        {
            "ship_type": "FREE STANDARD SHIPPING",
            "ship_desc": "In Stock and Ready for Delivery to",
            "ship_type_url": "http://www.hernest.com/article/shipping-methods.html?aid=77",
            "deliveryTime": "<div>\n        <p style=\"color: #160302; font-family:DM Sans-Light;font-size:14px; letter-spacing: 1px;\">Estimated Delivery Between Oct 20-Oct 22 </p>\n      </div>",
            "ship_type_value": "shipping"
        },
        {
            "ship_type": "FREE PICKUP",
            "ship_desc": "at ",
            "ship_type_value": "pickup",//选项值选择时候需要带到购物车接口
            "delivery_time": "Pickup Oct 14 - Oct 23"
        }
    ]
}
```