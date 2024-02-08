export function maskText(text: string): string {
    // mapping of English characters to their Cyrillic counterparts

    const charMapping: Record<string, string> = {
        'A': 'А', 'B': 'В',
        'E': 'Е', 'S': 'Ѕ', 'I': 'І', 'J': 'Ј', 'K': 'K',
        'M': 'М', 'H': 'Н', 'O': 'О', 'C': 'С', 'T': 'Т', 'y': 'у',
        'P': 'Р', 'X': 'Х',
        'a': 'а',
        'e': 'е', 's': 'ѕ', 'i': 'і', 'j': 'ј', 'k': 'k',
        'o': 'о', 'c': 'с', 'p': 'р', 'x': 'х',
    };

    // build the modified text with replacements
    let modifiedText = '';
    for (let char of text) {
        // check if the character needs to be replaced
        const replacement = charMapping[char];
        if (replacement !== undefined) {
            modifiedText += replacement;
        } else {
            modifiedText += char;
        }
    }

    return modifiedText;
}
