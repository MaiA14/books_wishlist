export class BookModel{
    constructor(
        public title: string,
        public author: string,
        public description: string,
        public rating: number,
        public price: number
    ) {}
}