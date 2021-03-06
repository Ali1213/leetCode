/* 
Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.

Table: Customers.

+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Table: Orders.

+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Using the above tables as example, return the following:

+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
*/

/** 
 * Runtime: 252 ms, faster than 78.03% of MySQL online submissions for Customers Who Never Order.
 * Memory Usage: N/A
 */
`
# Write your MySQL query statement below
SELECT 
    Name AS Customers
FROM
    Customers
WHERE Id not in (
    SELECT
        CustomerId
    FROM
        Orders
)
`

/* 
 * Runtime: 269 ms, faster than 43.18% of MySQL online submissions for Customers Who Never Order.
 */

`
SELECT
    Customers.Name AS Customers
FROM
    Customers
LEFT JOIN
    Orders
ON
    Orders.CustomerId = Customers.Id
WHERE Orders.CustomerId IS NULL
`