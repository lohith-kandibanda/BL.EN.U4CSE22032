function updateWindow(currentWindow, newNumbers, maxSize) {
    const uniqueSet = new Set(currentWindow);
    const updated = [...currentWindow];

    for (const num of newNumbers) {
        if (!uniqueSet.has(num)) {
            updated.push(num);
            uniqueSet.add(num);
        }
        if (updated.length > maxSize) updated.shift();
    }
    return updated;
}

module.exports = { updateWindow };
