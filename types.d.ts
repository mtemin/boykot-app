export type Company = {
    id:number,
    name: string,
    category?:string,
    isBoycott: boolean,
    whyBoycott?: string[],
    proofs?:string[],
    alternatives?:string[],
}
