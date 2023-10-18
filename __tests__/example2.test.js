// string-utils.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { reverseString, capitalizeString };

// Test for reversing a string
test('reverseString function', () => {
    expect(reverseString('hello')).toBe('olleh');
});

// Test for capitalizing a string
test('capitalizeString function', () => {
    expect(capitalizeString('world')).toBe('World');
});
