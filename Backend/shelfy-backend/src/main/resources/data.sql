INSERT INTO category(id, name, image_url) VALUES (1, 'Makeup', '/category-images/makeup.png');
INSERT INTO category(id, name, image_url) VALUES (2, 'Skincare', '/category-images/skincare.png');
INSERT INTO category(id, name, image_url) VALUES (3, 'Hair care', '/category-images/haircare.png');
INSERT INTO category(id, name, image_url) VALUES (4, 'Medicine', '/category-images/medicine.png');
INSERT INTO category(id, name, image_url) VALUES (5, 'Towels', '/category-images/towels.png');
INSERT INTO category(id, name, image_url) VALUES (6, 'Miscellaneous', '/category-images/miscellaneous.png');

INSERT INTO users(user_id, user_name) VALUES ('999', 'fake-user');
INSERT INTO users(user_id, user_name) VALUES ('888', 'fake-wizard');
INSERT INTO users(user_id, user_name) VALUES ('google-oauth2|112693144342926124708', 'fake-niclas');
INSERT INTO users(user_id, user_name) VALUES ('google-oauth2|110696447515674967588', 'fake-celine');

INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (12345, 'Sunscreen', 'Use daily','2022-01-03', '2023-01-03', 12, 2, 'google-oauth2|112693144342926124708');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (12342, 'Cleansing gel', 'Use daily','2023-03-03', '2024-01-03', 9, 2, 'google-oauth2|112693144342926124708');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (1234, 'Mascara', 'From the brand Benefit, black, lengthening.','2023-01-01', '2023-06-01', 6, 1, 'google-oauth2|110696447515674967588');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (1239, 'Hair gel', 'Styling product from this famous brand.','2023-01-01', '2023-09-06', 9, 3, 'google-oauth2|112693144342926124708');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (1238, 'Toothbrush', 'Bamboo toothbrush, soft bristles.','2023-02-01', '2023-05-01', 3, 6, 'google-oauth2|110696447515674967588');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (1232, 'Shower towel', 'Big one in the bathroom downstairs.','2023-03-29', '2023-04-05', 1, 5, 'google-oauth2|112693144342926124708');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (123456, 'Cold medicine', 'In the medicine cabinet behind the towels.','2022-03-21', '2024-03-21', 24, 4, 'google-oauth2|112693144342926124708');
INSERT INTO product(product_id, name, description, date_opened, expiry_date, period_after_opening, category_id, user_id) VALUES (123, 'Shower towel 2', 'Big one in the bathroom upstairs.','2023-02-27', '2023-03-05', 1, 5, '999');