INSERT INTO category(category_id, category_name) VALUES (001, 'Renewables');
INSERT INTO category(category_id, category_name) VALUES (002, 'SPF');
INSERT INTO category(category_id, category_name) VALUES (003, 'Makeup');

INSERT INTO product(id, name, description, date_opened, expiry_date, category_id) VALUES (123456, 'Toothbrush', 'This is my toothbrush','2023-03-21', '2024-03-21', 001);
INSERT INTO product(id, name, description, date_opened, expiry_date, category_id) VALUES (12345, 'Sunscreen', 'Use daily','2023-03-21', '2023-07-21', 002);
INSERT INTO product(id, name, description, date_opened, expiry_date, category_id) VALUES (1234, 'Mascara', 'This is my mascara','2023-03-21', '2023-03-25', 003);