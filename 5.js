const createBookCollection = () => {
    let books = new Map()
    let idCounter = 1

    return {
        create(book) {
            let id = idCounter++
            books.set(id, { ...book, id })
            return books.get(id)
        },

        findOne(id) {
            return books.get(id) || "Kitob topilmadi!"
        },

        findAll() {
            return [...books.values()]
        },

        filterByAuthor(author) {
            return [...books.values()].filter(b => b.author === author)
        },

        filterByReaded() {
            return [...books.values()].filter(b => b.read === true)
        },

        deleteOne(id) {
            return books.delete(id)
                ? "Kitob o‘chirildi!"
                : "Kitob topilmadi!"
        },

        deleteMany() {
            books.clear()
            return "Barcha kitoblar o‘chirildi!"
        },

        updateBook(id, newData) {
            if (!books.has(id)) {
                return "Kitob topilmadi!"
            }
            let oldBook = books.get(id)
            let updated = { ...oldBook, ...newData }
            books.set(id, updated)
            return updated
        }
    }
}

const myBooks = createBookCollection()

myBooks.create({ title: "The Hobbit", author: "J.R.R. Tolkien", read: false })
myBooks.create({ title: "1984", author: "George Orwell", read: true })
myBooks.create({ title: "Animal Farm", author: "George Orwell", read: false })
myBooks.create({ title: "The Silmarillion", author: "J.R.R. Tolkien", read: true })

console.log("Barcha kitoblar:", myBooks.findAll())
console.log("ID=2 kitob:", myBooks.findOne(2))
console.log("George Orwell kitoblari:", myBooks.filterByAuthor("George Orwell"))
console.log("O‘qilgan kitoblar:", myBooks.filterByReaded())
console.log(myBooks.deleteOne(3))
console.log("1-kitob yangilandi:", myBooks.updateBook(1, { read: true, title: "The Hobbit (Updated)" }))
console.log("Oxirgi holat:", myBooks.findAll())
console.log(myBooks.deleteMany())
console.log("Yakuniy holat:", myBooks.findAll())
