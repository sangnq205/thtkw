
function countWordOccurrences(text) {
    text = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "");
    let words = text.split(/\s+/);
    let wordCount = {};
    words.forEach(word => {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    return wordCount;
}
function displayWordCount() {
    let text = prompt("Nhập đoạn văn bản:");
    if (text) {
        let result = countWordOccurrences(text);
        console.log("Số lần xuất hiện của các từ:");
        console.table(result);
    } else {
        console.log("Bạn chưa nhập văn bản!");
    }
}
displayWordCount();
