/*
 Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase. 
*/

// # Write your MySQL query statement below

/**
 * Runtime: 187 ms, faster than 82.61% of MySQL online submissions for Duplicate Emails.
 * Memory Usage: N/A
 */
`
SELECT
    Email
FROM
(SELECT 
    count(*) as count,
    Email
FROM
    Person
GROUP BY
    Email
) as a
WHERE count > 1

`