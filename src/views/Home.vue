<template>
	<div>
		<Header/>
		<NewBooks/>
	</div>
</template>

<script type="text/javascript">
import Header from '../components/Header.vue'
import NewBooks from '../components/NewBooks.vue'
export default {
	components: {
		Header,
		NewBooks
	}
}
</script>