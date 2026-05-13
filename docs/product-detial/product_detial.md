---
sidebar_position: 1
---

# event落地页
- 后台新增event活动，活动限制，不限时，只能配置无力度活动
- ws_promtion_activities 数据表新增activities_type = 2进行区分
- 新增路由 /event/dining-table-a-1296.html

# detail落地页

- 新增数据表
ws_promtion_landing_collection
ws_promtion_landing_product
ws_promtion_landing_tpl

- 前端详情页新增landing_id参数返回数据status_config
```jsx  title="/api/product/getProductInfo"
{
    "status_config": [
            {
                "status": "1",
                "status_key": "product_mach",
                "status_name": "搭配购"
            },
            {
                "status": "1",
                "status_key": "product_love",
                "status_name": "Why You'll Love It"
            },
            {
                "status": "1",
                "status_key": "product_review",
                "status_name": "点评"
            },
            {
                "status": "1",
                "status_key": "product_hot",
                "status_name": "红人墙"
            },
            {
                "status": "1",
                "status_key": "product_collection",
                "status_name": "ALSO IN THIS COLLE",
                "collection_id": "531"
            }
        ]
}
```