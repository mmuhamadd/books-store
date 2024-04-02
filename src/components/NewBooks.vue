<template>
    <div class="container flex items-center justify-center flex-col">
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div class="grid place-content-center rounded p-6 sm:p-8">
                        <div class="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Newest</h2>
                                <p class="mt-4 text-gray-500">
                                    Newest Book Usually Exported With a Discount , Check it out now.
                                </p>
                            </header>
                            <a href="#" class="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black border-transparent border-2 hover:border-black focus:outline-none focus:ring focus:ring-yellow-400">
                                See All
                            </a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 lg:py-8">
                        <ul class="grid grid-cols-2 gap-4">
                            <li v-for="book in newBooks">
                                <Book :title="book.title" :price="book.price" :isbn="book.isbn13" :image="book.image" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import Book from './Book.vue'
export default {
    components: {
        Book
    },
    data() {
        return {
            newBooks: []
        }
    },
    methods: {
        // fetch the new books
        async getNewBooks() {
            const result = await axios.get('https://api.itbook.store/1.0/new');
            const books = result.data.books;
            console.log(books)
            this.newBooks = books.splice(2, 2);
        }
    },
    mounted() {
        this.getNewBooks()
    }
}
</script>