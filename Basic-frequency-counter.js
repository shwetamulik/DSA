/**
 * Count the appearances of alphanumeric characters in a string.
 * @param {string} str - The input string to analyze.
 * @returns {object} - An object where keys are alphanumeric characters, and values are their counts.
 */
const countAppearence = (str) => {
    let result = {}
    for(let char of str){
        char = char.toLowerCase();
     if (/[a-z0-9]+$/.test(char)) {
             if(!result[char]){
           result[char]=1;
       }
        else{
            result[char] ++;
        }
        }
        }
        
    return result;
}
countAppearence("Hello There!");