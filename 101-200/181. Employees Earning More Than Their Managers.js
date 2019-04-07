/* SQL Schema
The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

+----------+
| Employee |
+----------+
| Joe      |
+----------+
 */

/** 
 * Runtime: 300 ms, faster than 71.77% of MySQL online submissions for Employees Earning More Than Their Managers.
 * Memory Usage: N/A
 */
 `
 SELECT 
Name AS Employee
FROM (
    SELECT 
    A.Name,A.Salary AS asy, B.Salary AS bsy 
    FROM 
    Employee AS a 
    LEFT JOIN 
    Employee as b 
    ON 
    a.ManagerId = b.Id 
) AS e WHERE asy > bsy
 `

 /** 
  * Runtime: 336 ms, faster than 17.87% of MySQL online submissions for Employees Earning More Than Their Managers.
  * Memory Usage: N/A
  */
 `
 SELECT 
 a.Name AS Employee
 FROM 
 Employee AS a 
 LEFT JOIN 
 Employee as b 
 ON 
 a.ManagerId = b.Id  WHERE a.Salary > b.Salary
 `