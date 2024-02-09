export function removeCommaBeforeAnd(text: string): string {
    // split the text into an array of words
    const words = text.split(" ");

    // iterate through the words to find the pattern ", and"
    for (let i = 0; i < words.length - 2; i++) {
        if (words[i].endsWith(",") && words[i + 1] === "and") {
            // Remove the comma from the word
            words[i] = words[i].slice(0, -1);
        }
    }

    // join the modified words back into a single string
    return words.join(" ");
}
