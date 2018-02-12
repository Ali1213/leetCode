// Table: Person

// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | PersonId    | int     |
// | FirstName   | varchar |
// | LastName    | varchar |
// +-------------+---------+
// PersonId is the primary key column for this table.
// Table: Address

// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | AddressId   | int     |
// | PersonId    | int     |
// | City        | varchar |
// | State       | varchar |
// +-------------+---------+
// AddressId is the primary key column for this table.

// Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

// FirstName, LastName, City, State


// beats 15.52%
`select 
p.FirstName,p.LastName,a.City,a.State
From Person as p 
left join Address as a 
on p.PersonId = a.PersonId`

// beats 68.41
`select 
Person.FirstName,Person.LastName,Address.City,Address.State 
From Person left join Address 
on Person.PersonId = Address.PersonId`