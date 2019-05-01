/* Mary is a teacher in a middle school and she has a table seat storing students' names and their corresponding seat ids.

The column id is continuous increment.
 

Mary wants to change seats for the adjacent students.
 

Can you write a SQL query to output the result for Mary?
 

+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+
For the sample input, the output is:
 

+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+
 */


 /**
  * Runtime: 156 ms, faster than 87.75% of MySQL online submissions for Exchange Seats.
  * Memory Usage: N/A
  */

`
# Write your MySQL query statement below
SELECT
    (CASE WHEN MOD(seat.id,2) = 1 AND seat.id != d.count  THEN id + 1 
        WHEN MOD(seat.id,2) = 0 THEN id - 1
     ELSE id END) as id,
    student
FROM
    seat, (SELECT count(1) as count FROM seat) as d
ORDER BY id ASC
`