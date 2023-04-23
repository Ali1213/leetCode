
// Runtime: 2303 ms, faster than 16.47% of MySQL online submissions for Sales Person.
// Memory Usage: 0B, less than 100.00% of MySQL online submissions for Sales Person.

// select name from SalesPerson where sales_id not in (
//     select O.sales_id as sales_id from Orders as O left join Company as C on  O.com_id = C.com_id where C.name = 'RED'
//     )
