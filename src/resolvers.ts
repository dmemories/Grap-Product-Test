import { Book, bookStore } from "./data/BookStore";

const bookList = bookStore.getBookList();

export const resolvers = {
    Query: {
        books: () => bookList
    },
    Mutation: {
        addBook (
            parent: any,
            args: Omit<Book, "id">,
            ctx: any,
            info: any
        ) {
            const newBook = bookStore.addBook(args.name, args.price);
            return newBook;
        }
    }
}