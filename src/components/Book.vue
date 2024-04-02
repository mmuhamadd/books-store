<template>
    <router-link :to="`/book/${isbn}`" class="group block">
        <img :src="image" alt="" class="aspect-square w-full rounded object-cover" />
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                {{ title }}
            </h3>
            <p class="mt-1 text-sm text-gray-700">{{ price }}</p>
        </div>
    </router-link>
</template>

<script type="text/javascript">
export default {
    props: {
        title: String,
        image: String,
        isbn: String,
        price: String
    }
}
</script>