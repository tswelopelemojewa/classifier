-- DELETE FROM images

select * from images 

CREATE TABLE images (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT,
    PredictedValue REAL
);


INSERT INTO images (filename, PredictedValue) VALUES ('photo.jpeg', 4)


SELECT filename, PredictedValue FROM images


UPDATE images SET PredictedValue = 5 WHERE ID = (
    SELECT 
        MAX(ID)
    FROM images
);

