-- 查詢所有商品資料
SELECT * FROM `my_product`;

-- 查詢單筆商品資料(id為1)
SELECT * FROM `my_product` 
WHERE id = 1;

-- 單選: 查詢品牌是Apple(查詢字串qs: brand=Apple)
SELECT * FROM `my_product`
WHERE brand = 'Apple';

-- 複選: 查詢品牌是Apple或Google(查詢字串qs: brands=Apple,Google)
SELECT * FROM `my_product`
WHERE brand IN ('Apple', 'Google');

-- 複選: 用OR
SELECT * FROM `my_product`
WHERE brand ='Apple' OR brand = 'Google';

-- 關鍵字: 名稱中有`so`(查詢字串qs: name_like=so)
SELECT * FROM `my_product`
WHERE name LIKE '%so%';

-- 價格: 介於5000到15000(查詢字串qs: price_gte=5000&price_lte=15000)
SELECT * FROM `my_product`
WHERE price BETWEEN 5000 AND 15000;

-- 價格: 用大於+小於組合
SELECT * FROM `my_product`
WHERE price >= 5000 AND price <= 15000;

-- WHERE從句整合測試，每個條件間都是用AND相連
SELECT * FROM `my_product`
WHERE brand IN ('Apple', 'Google')
AND name LIKE '%so%'
AND price >= 5000 AND price <= 15000;

-- 排序: 價格由低到高排序(順向(1234) asc, 逆向(4321) desc) (查詢字串qs: sort=price&order=asc)
SELECT * FROM `my_product`
WHERE brand IN ('Apple', 'Google')
ORDER BY price ASC;

-- 分頁: 目前第page頁，每頁perpage個(查詢字串qs: page=2&perpage=5)
-- 公式: limit = perpage
-- offset 範例: page=1 offset=0, page=2 offset=perpage*1
-- 公式: offset = (page-1)*perpage
SELECT * FROM `my_product`
WHERE brand IN ('Apple', 'Google')
LIMIT 5 OFFSET 5;

-- 額外需要: 計算在此條件(WHERE從句條件)下，總共有多少筆資料結果(回傳到前端，要呈現有多少頁)
SELECT COUNT(*) AS count
FROM `my_product`
WHERE brand IN ('Apple', 'Google');