/*
 Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Note:

Your output is the whole Person table after executing your sql. Use delete statement. 
*/


// # Write your MySQL query statement below
/** 
 * Runtime: 738 ms, faster than 44.82% of MySQL online submissions for Delete Duplicate Emails.
 * Memory Usage: N/A
 */
`
DELETE
A
FROM
    Person as A, Person as B
where A.Email = B.Email AND A.Id > B.Id
`

/**
 * Runtime: 525 ms, faster than 98.97% of MySQL online submissions for Delete Duplicate Emails.
 * Memory Usage: N/A
 */
`
delete from Person where id not in
(select minid from 
((select min(id) as minid
from Person
group By Person.email) as sub));
`