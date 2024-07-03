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

-- 用OR
SELECT * FROM `my_product`
WHERE brand ='Apple' OR brand = 'Google';

-- 關鍵字: 名稱中有`so`(查詢字串qs: name_like=so)
SELECT * FROM `my_product`
WHERE name LIKE '%so%';

-- 價格: 介於5000到15000(查詢字串qs: price_gte=5000&price_lte=15000)
SELECT * FROM `my_product`
WHERE price BETWEEN 5000 AND 15000;

-- 用大於小於組合
SELECT * FROM `my_product`
WHERE price >= 5000 AND price <= 15000;

