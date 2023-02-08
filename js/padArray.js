// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    if (array.length >= minSize) {
        return array
    }
    while (array.length < minSize) {
        array.push(value)
    }
    return array
    
}

exports.pad = pad;
