function reversestring(str) {
    if (str != null && str != undefined) {
        str = String(str);
        if (str.length <= 1) {
            return str;
        }

        return reversestring(str.substring(1, str.length)) + str.substring(0, 1);
    }
    return undefined;
}

module.exports = reversestring;