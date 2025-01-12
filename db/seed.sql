USE todo_app;

INSERT INTO tasks (title, description, datetime, status)
VALUES
('Buy groceries', 'Buy milk, eggs, bread, and cheese.', '2025-01-13 10:00:00', FALSE),
('Morning workout', '30 minutes of running and 15 minutes of stretching.', '2025-01-13 07:30:00', TRUE),

('Prepare presentation', 'Complete slides for the meeting with the team.', '2025-01-14 09:00:00', FALSE),
('Call mom', 'Check in with mom about her doctor\'s appointment.', '2025-01-13 18:00:00', TRUE),
('Fix bug in app', 'Resolve the login issue reported by the QA team.', '2025-01-12 16:00:00', FALSE),

('Read a book', 'Start reading the new sci-fi novel.', '2025-01-15 20:00:00', FALSE),
('Plan weekend trip', 'Choose destination and book tickets.', '2025-01-14 12:00:00', FALSE),
('Water plants', '', '2025-01-12 08:00:00', TRUE),

-- Будущие задачи
('Doctor\'s appointment', 'Annual check-up at the clinic.', '2025-01-20 09:30:00', FALSE),
('Team meeting', 'Discuss project deadlines and assignments.', '2025-01-16 14:00:00', FALSE),
('Clean the house', 'Vacuum, dust, and mop all rooms.', '2025-01-18 11:00:00', FALSE),

-- Задачи без описания или с длинным текстом
('Update resume', '', '2025-01-13 17:00:00', FALSE),
('Learn SQL', 'Take an online course and practice creating queries, tables, and handling databases.', '2025-01-15 15:00:00', FALSE),

-- Смешанные примеры
('Family dinner', 'Dinner with family at 7 PM at mom\'s house.', '2025-01-14 19:00:00', TRUE),
('Submit report', 'Submit the monthly progress report to the manager.', '2025-01-15 10:00:00', FALSE),
('Visit museum', 'Go to the art exhibition at the city museum.', '2025-01-19 15:00:00', FALSE);
