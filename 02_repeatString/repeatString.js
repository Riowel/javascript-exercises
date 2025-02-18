const repeatString = function(word, times) {
string=""
if (times<0)
{
    string="ERROR"
}
    for (i=1; i<=times; i++){
        string+=word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
