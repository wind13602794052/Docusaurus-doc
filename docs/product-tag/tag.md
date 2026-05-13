---
sidebar_position: 6
---

# 商品标签

## 固定标签

- 闪购标签，商品时闪购商品时固定显示
```jsx  title="product_tag"
[
    "background_color" => "",
    "font_color" => '#a80000',
    "promo_type" => '1',
    "tag_name" => 'Sale',
    "show_index" => ["1","2","3","4"],
];
```
- b2b标签，商品使用了b2b折扣显示
```jsx  title="product_tag"
[
    "background_color" => "",
    "font_color" => '#a80000',
    "promo_type" => '0.1',
    "tag_name" => 'B2B DISCOUNT APPLIED',
    "show_index" => ["1","2","3","4"],
];
```
- 清仓标签，商品编辑勾选了清仓标签
```jsx  title="product_tag"
[
                    "background_color" => "",
                    "font_color" => '#a80000',
                    "promo_type" => '3',
                    "tag_name" => 'Clearance',
                    "show_index" => ["1","2","3","4"],
                    "redirect_url" => $this->getCollectionUrl(91)
]];
```
