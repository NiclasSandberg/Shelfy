INSERT INTO category(id, name, image_url) VALUES (1, 'Makeup', '/category-images/makeup.png');
INSERT INTO category(id, name, image_url) VALUES (2, 'Skincare', '/category-images/skincare.png');
INSERT INTO category(id, name, image_url) VALUES (3, 'Hair care', '/category-images/hair-care.jpg');
INSERT INTO category(id, name, image_url) VALUES (4, 'Medicine', '/category-images/medicine.jpg');
INSERT INTO category(id, name, image_url) VALUES (5, 'Towels', '/category-images/towels.jpg');
INSERT INTO category(id, name, image_url) VALUES (6, 'Miscellaneous', '/category-images/miscellaneous.jpg');


INSERT INTO product(id, name, description, date_opened, expiry_date, period_after_opening, category_id) VALUES (123456, 'Toothbrush', 'This is my toothbrush','2023-03-21', '2024-03-21', 1, 001);
INSERT INTO product(id, name, description, date_opened, expiry_date, period_after_opening, category_id) VALUES (12345, 'Sunscreen', 'Use daily','2022-12-31', '2023-07-21', 2, 002);
INSERT INTO product(id, name, description, date_opened, expiry_date, period_after_opening, category_id) VALUES (1234, 'Mascara', 'This is my mascara','2023-01-01', '2023-06-14', 3, 003);
INSERT INTO product(id, name, description, date_opened, expiry_date, period_after_opening, category_id) VALUES (123, 'Brush', 'This is my brush','2022-01-01', '2023-03-26', 2, 004);