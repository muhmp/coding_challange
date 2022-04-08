/* Select the table above 25 age*/

SELECT * FROM maintable_DD50
/*Get the FirstName, LastName, Age above 25 by ID Ascending but did not print the ID*/
WHERE Age > 25
ORDER BY ID ASC
LIMIT 1
/*Get the FirstName, LastName, Age above 25 by ID Descending but did not print the ID*/
WHERE Age > 25
ORDER BY ID DESC
LIMIT 1
/*Get the FirstName, LastName, Age above 25 by Age Descending*/
WHERE Age > 25
