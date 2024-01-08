function splitNum(num: number): number {
    const originalArray: string[] = num.toString().split("");
    const result: string[] = [];
    
    const rearrangeNumbers = (numbers: string[]): void => {
        if (numbers.length === 0) {
            return;
        }
        
        const minValue: string = Math.min(...numbers.map(Number)).toString();
        result.push(minValue);
        const index: number = numbers.indexOf(minValue);
        const newArray: string[] = numbers.filter((_, idx) => idx !== index);
        rearrangeNumbers(newArray);
    };
    
    rearrangeNumbers(originalArray);
    
    let evenIndex: string = "";
    let oddIndex: string = "";
    
    for (let i = 0; i < result.length; i++) {
        if (i === 0 || i % 2 === 0) {
            evenIndex += result[i];
        } else {
            oddIndex += result[i];
        }
    }
    
    return Number(evenIndex) + Number(oddIndex);
};