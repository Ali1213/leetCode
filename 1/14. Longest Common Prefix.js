/*
Write a function to find the longest common prefix string amongst an array of strings.*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length === 0){
        return '';
    }

    if(strs.length === 1){
        return strs[0];
    }

    let results = strs[0].split(''),
        result = '';

    for(let i = 0,len=results.length;i<len;i++){
        result += results[i];
        for(let j = 1,jlen = strs.length;j<jlen;j++ ){
            if(! strs[j].startsWith(result)){
                return result.slice(0,-1);
            }
        }
    }
    return result;
};

/*
Write a function to find the longest common prefix string amongst an array of strings.*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length === 0){
        return '';
    }

    if(strs.length === 1){
        return strs[0];
    }

    let compare = strs[0],pos = 0;
    for(let i = 1,len=strs.length;i<len;i++){
        if(strs[i].length < compare.length){
            compare = strs[i];
            pos = i;
        }
    }
    [strs[pos],strs[0]] = [strs[0], strs[pos]];

    let results = compare.split(''),
        result = '';

    for(let i = 0,len=results.length;i<len;i++){
        result += results[i];
        for(let j = 1,jlen = strs.length;j<jlen;j++ ){
            if(! strs[j].startsWith(result)){
                return result.slice(0,-1);
            }
        }
    }
    return result;
};

