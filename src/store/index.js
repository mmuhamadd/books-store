import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearch = defineStore("search",{
	state: ()=> ({
		search_query: '',
		search_open: false
	}),
	actions: {
		toggleSearchForm(){
			this.search_open = !this.search_open
		},
		async search(){
			const query = this.search_query;
			window.location.replace(`/search/${query}`)
		}
	}
})