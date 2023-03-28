/* Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.

Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.

 

Example 1:

Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
Example 2:

Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
Example 3:

Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
Example 4:

Input: "/a/./b/../../c/"
Output: "/c"
Example 5:

Input: "/a/../../b/../c//.//"
Output: "/c"
Example 6:

Input: "/a//b////c/d//././/.."
Output: "/a/b/c" 
*/

/**
 * Runtime: 84 ms, faster than 59.52% of JavaScript online submissions for Simplify Path.
 * Memory Usage: 38.4 MB, less than 39.13% of JavaScript online submissions for Simplify Path.
 * @param {string} path
 * @return {string}
 */
var simplifyPath = (path) => {
    const paths = path.split('/')

    const arr = []

    for (let i = 0; i < paths.length; i++) {
        switch (paths[i]) {
            case "":
                break
            case "..":
                arr.pop();
                break
            case ".":
                break
            default:
                arr.push(paths[i])
        }
    }
    return "/" + arr.join("/")
};



const { normalTest } = require('../test')

const tests = [
    {
        params: ["/home/"],
        result: "/home",
    },
    {
        params: ["/../"],
        result: "/",
    },
    {
        params: ["/home//foo/"],
        result: "/home/foo",
    },
    {
        params: ["/a/./b/../../c/"],
        result: "/c",
    },
    {
        params: ["/a/../../b/../c//.//"],
        result: "/c",
    },
    {
        params: ["/a//b////c/d//././/.."],
        result: "/a/b/c",
    },
]

normalTest(tests, simplifyPath)