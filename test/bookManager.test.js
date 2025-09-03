const Book = require('../book');
const BookManager = require('../bookManager');

describe('BookManager', () => {
    let bookManager;

    beforeEach(() => {
        bookManager = new BookManager();
    });

    test('Test menambahkan buku', () => {
        const book = new Book("Test Book", "Test Author", 2023);
        bookManager.addBook(book);
        expect(bookManager.getBookCount()).toBe(1);
    });

    test('Test menghapus buku yang ada', () => {
        const book = new Book("To Remove", "Author", 2023);
        bookManager.addBook(book);
        const removed = bookManager.removeBook("To Remove");
        expect(removed).toBe(true);
        expect(bookManager.getBookCount()).toBe(0);
    });

    test('Test menghapus buku yang tidak ada', () => {
        const removed = bookManager.removeBook("Tidak Ada");
        expect(removed).toBe(false); // harus false
        expect(bookManager.getBookCount()).toBe(0); // list tetap kosong
    });

    test('Test mencari buku berdasarkan author', () => {
        const book1 = new Book("Python Dasar", "Andi", 2020);
        const book2 = new Book("Pemrograman Lanjut", "Andi", 2021);
        const book3 = new Book("Jaringan Komputer", "Budi", 2019);

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const booksByAndi = bookManager.findBooksByAuthor("Andi");
        expect(booksByAndi.length).toBe(2);
        expect(booksByAndi).toContain(book1);
        expect(booksByAndi).toContain(book2);
    });

    test('Test mendapatkan semua buku', () => {
        const book1 = new Book("Sistem Operasi", "Citra", 2018);
        const book2 = new Book("Machine Learning", "Dodi", 2022);

        bookManager.addBook(book1);
        bookManager.addBook(book2);

        const allBooks = bookManager.getAllBooks();
        expect(allBooks.length).toBe(2);
        expect(allBooks).toContain(book1);
        expect(allBooks).toContain(book2);
    });
});
