<template>
    <Navbar />
    <div class="container mx-auto p-4">
        <section class="bg-gray-100 rounded-lg p-6 md:flex" v-if="book">
            <img :src="book.image" :alt="book.title" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6">
            <div class="md:w-2/3">
                <div class="flex justify-between items-center h-16">
                    <h2 class="text-xl font-semibold mb-2"><ion-icon name="pricetag-outline"></ion-icon> {{ book.title }}</h2>
                    <button class="bg-black hover:bg-transparent border border-transparent hover:border-black hover:text-black text-white font-semibold py-2 px-4 rounded">
                        Buy Now
                    </button>
                </div>
                <p class="text-gray-700 mb-4">- {{ book.desc }}</p>
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-4">
                        <p class="text-gray-600"><ion-icon name="person-outline"></ion-icon> Author: {{ book.authors }}</p>
                        <p class="text-gray-600"><ion-icon name="cash-outline"></ion-icon> Price: {{ book.price }}</p>
                        <p class="text-gray-600"><ion-icon name="book-outline"></ion-icon> Pages: {{ book.pages }}</p>
                        <p class="text-gray-600"><ion-icon name="calendar-outline"></ion-icon> Year Publish: {{ book.year }}</p>
                        <p class="text-gray-600"><ion-icon name="language-outline"></ion-icon> Language: {{ book.language }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    data() {
        return {
            book: {}
        }
    },
    methods: {
        async getBook() {
            const bookId = this.$route.params.id
            const result = await axios.get(`https://api.itbook.store/1.0/books/${bookId}`)
            this.book = result.data
        }
    },
    mounted() {
        this.getBook()
    },
    components: {
        Navbar
    }
}
</script>