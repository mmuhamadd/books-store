<template>
    <div v-if="search_open"
    class="bg-[#00000080] fixed w-full p-4 h-screen top-0 left-0">
    	<button @click="toggleSearchForm"
    	class="text-white 
        mb-5 rounded-full text-4xl">
    		<ion-icon name="arrow-back-outline"></ion-icon>
    	</button>
        <form @submit.prevent="search">
            <div>
            	<input 
            	type="search" class="outline-black p-4 
            	rounded-xl w-full" 
            	v-model="search_query" placeholder="Search for a book">
            </div>
        </form>
    </div>
</template>

<script setup>
import { useSearch } from '../store/index.js'
import { storeToRefs } from 'pinia'
const searchStore = useSearch()
const { toggleSearchForm,search } = useSearch();
const { search_query,search_open } = storeToRefs(searchStore);
</script>