<template>
  <div>
    <router-view></router-view>
    <SearchForm/>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
import Footer from './components/Footer.vue'
import SearchForm from './components/SearchForm.vue'
export default {
  components: {
    Footer,
    SearchForm
  }
}
</script>