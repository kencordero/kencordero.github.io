export function shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;   
}

export function sampleSize(array: any[], size: number): any[] {
    const shuffled = shuffle(array.slice());
    return shuffled.slice(0, size);
}

export function find(array: any[], predicate: (value: any) => boolean): any | undefined {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return undefined;
}