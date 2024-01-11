function addToArrayForm(num: number[], k: number): number[] {
    const number: BigInt = BigInt(num.join("")) + BigInt(k);
    
    return Array.from(number.toString(), digit => Number(digit));
};