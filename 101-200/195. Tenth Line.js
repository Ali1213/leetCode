/* 
Given a text file file.txt, print just the 10th line of the file.

Example:

Assume that file.txt has the following content:

Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
Your script should output the tenth line, which is:

Line 10
Note:
1. If the file contains less than 10 lines, what should you output?
2. There's at least three different solutions. Try to explore all possibilities. 
*/


// solve1
`
sed -n '10,10p' file.txt
`

/* 
 * Runtime: 4 ms, faster than 77.17% of Bash online submissions for Tenth Line.
 * Memory Usage: 3.7 MB, less than 49.69% of Bash online submissions for Tenth Line.
 */
`
sed -n '10p' file.txt
`

/**
 * Runtime: 4 ms, faster than 77.17% of Bash online submissions for Tenth Line.
 * Memory Usage: 3.7 MB, less than 49.69% of Bash online submissions for Tenth Line.
 */
`
sed -n '10p;11q' file.txt
`
/* 
 * Runtime: 0 ms, faster than 100.00% of Bash online submissions for Tenth Line.
 * Memory Usage: 3.8 MB, less than 5.59% of Bash online submissions for Tenth Line.
 */
`
awk 'NR==10' file.txt
`

/** 
 * Runtime: 4 ms, faster than 77.17% of Bash online submissions for Tenth Line.
 * Memory Usage: 3.7 MB, less than 54.35% of Bash online submissions for Tenth Line.
 */
`
tail -n+10 file.txt | head -1
`