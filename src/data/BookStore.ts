import { getRandomNumber, getUUID } from "../utils/functions";

export type Book = {
    id: string,
    name: string,
    price: number
}

export interface IBookStore {
    getBookList(): Book[];
    addBook(name: string, price: number): Book;
}

class MockBookStore implements IBookStore {

    private static readonly mockBookNameList = [
        "Data Structure",
        "Programming",
        "Database",
        "Design Pattern",
        "OOP",
        "English",
        "Tools"
    ];

    private static getBookId = () => getUUID();

    private static getMockBook(): Book {
        const bookName = MockBookStore.mockBookNameList[
            getRandomNumber(0, MockBookStore.mockBookNameList.length - 1)
        ];
        const bookCode = getRandomNumber(100, 200);
        const price = getRandomNumber(20, 100) * 10;

        return {
            id: MockBookStore.getBookId(),
            name: `${bookName} #${bookCode}`,
            price
        };
    }

    private static bookList: Book[] = (function() {
        const maxBooks = getRandomNumber(5, 10);
        const bookList: Book[] = [];

        for (let i = 0; i < maxBooks; i++) {
            bookList.push(MockBookStore.getMockBook());
        }
        return bookList;
    })()

    public getBookList(): Book[] {
        return MockBookStore.bookList;
    }

    public addBook(name: string, price: number): Book {
        const newBook: Book = {
            id: MockBookStore.getBookId(),
            name,
            price
        }
        MockBookStore.bookList.push(newBook);
        return newBook;
    }

}
export const bookStore = new MockBookStore();