<template>
    <div>
        <div class="container">
            <Navbar />
            <section class="p-4" v-if="books.length > 0">
                <h1 class="text-4xl font-bold text-center mb-5">Search Results For Book '{{ this.$route.params.query }}'</h1>
                <div class="flex gap-4">
                    <div class="space-y-2">
                        <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                                <span class="text-sm font-medium"> Filter By Price </span>
                                <span class="transition group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div class="border-t border-gray-200 bg-white">
                                <div class="border-t border-gray-200 p-4">
                                    <div class="flex justify-between gap-4">
                                        <label for="FilterPriceTo" class="flex items-center gap-2">
                                            <span class="text-sm text-gray-600">$</span>
                                            <input type="number" id="FilterPriceTo" placeholder="max" class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm" v-model="maxPrice" />
                                        </label>
                                    </div>
                                        <button @click="filterBooks">Filter</button>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div>
                        <div class="lg:col-span-2 lg:py-8">
                            <ul class="grid grid-cols-2 gap-4">
                                <li v-for="book in books">
                                    <Book :title="book.title" :price="book.price" :isbn="book.isbn13" :image="book.image" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <h1 class="text-center font-bold text-4xl" v-else>No Books Matches for '{{ this.$route.params.query }}'.</h1>
        </div>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Book from '../components/Book.vue'
export default {
    data() {
        return {
            books: [],
            maxPrice: ''
        }
    },
    components: {
        Navbar,
        Book
    },
    methods: {
        async getBooks() {
            const query = this.$route.params.query // get the search query
            // send the request to get the result of books
            const result = await axios.get(`https://api.itbook.store/1.0/search/${query}`);
            // Extract books from the result
            let books = result.data.books;
            // Iterate through each book and update its price
            books.forEach(book => {
                book.price = book.price.replace(/\$/g, ''); // Replace '$' with an empty string
                this.books.push(book);
            });
        },
filterBooks: function() {
const minPrice = parseFloat(this.minPrice);
const maxPrice = parseFloat(this.maxPrice);
if (isNaN(minPrice) && isNaN(maxPrice)) {
// If both minPrice and maxPrice are not valid numbers, return all books
return this.books;
}
this.books = this.books.filter(book => {
const bookPrice = parseFloat(book.price);
if (isNaN(minPrice) && !isNaN(maxPrice)) {
// If only maxPrice is valid, filter books with price less than or equal to maxPrice
return bookPrice <= maxPrice; } else if (!isNaN(minPrice) && isNaN(maxPrice)) { // If only minPrice is valid, filter books with price greater than or equal to minPrice return bookPrice>= minPrice;
    } else {
    // If both minPrice and maxPrice are valid, filter books within the price range
    return bookPrice >= minPrice && bookPrice <= maxPrice; } }); }


    },
    mounted() {
        this.getBooks()
    }
}
</script>