---
sidebar_position: 6
---

# 系列页

## 后台接口

- 详情链接下拉
```jsx  title="/_os/index.php?com=collection&t=list"
{
    "is_all":1,
    "add_series_filter":"1"
}
```
- 系列分类
```jsx  title="/_os/index.php?com=series&t=cateList"


```
- 系列列表
```jsx  title="/_os/index.php?com=series&t=seriesList"


```
- 新增分类
```jsx  title="/_os/index.php?com=series&t=addCate"
{
    "cate_name_list": [
        {
            "cate_name": "Living Room",
            "cate_sort": "7"
        }
    ]
}
```
- 删除分类
```jsx  title="/_os/index.php?com=series&t=deleteCate"
{
    "series_cate_id": 1
}
```
- 系列详情
```jsx  title="/_os/index.php?com=series&t=seriesInfo"
{
    "series_cate_id": 1
}
```
- 删除系列
```jsx  title="/_os/index.php?com=series&t=deleteSeries"
{
    "series_cate_id": 1
}
```
- 修改系列状态
```jsx  title="/_os/index.php?com=series&t=setSeriesStatus"
{
    "series_info_id": 2,
    "series_status":1
}
```
- 新增系列页
```jsx  title="/_os/index.php?com=series&t=addSeries"
{
    "series_name": "demo",
    "series_cate_id": "1",
    "series_title":"副标题",
    "collection_id": "1",
    "series_link": "demo111",
    "series_sort": "0",
    "series_status": "1",
    "series_image": [
        {
            "url": "https://img.yitashop.com/10001/banners/original/202508/1285031F-5325-43F4-8EE6-40DE78F95E5C.jpg"
        }
    ],
    "series_image_material": [
        {
            "url": "https://img.yitashop.com/10001/banners/original/202508/1285031F-5325-43F4-8EE6-40DE78F95E5C.jpg"
        }
    ],
    "series_desc": [
        {
            "text": "Your careful choice of furniture deserves to be matched with a little ongoing love. With the right care, these pieces will continue to enrich your home for years.",
            "type": "1"
        },
        {
            "text": "Avoid damp environments to prevent water absorption and swelling.\nGently wipe with a cloth, prevent moisture seepage into joints.\nAvoid overloading to prevent structural damage.",
            "type": "2"
        }
    ]
}
```