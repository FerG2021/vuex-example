<script>
import { mapState } from 'vuex';
import Button from './managers/primevuemanager/components/Button.vue';
import apiService from './managers/apimanager/api'

export default {
    components: {
        Button
    },
    computed: {
        ...mapState('ProductsStore', ['products']),
        ...mapState('ClientsStore', ['clients']),
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const response = await apiService.getAllProducts();
            console.log(response);
        },
    },
}
</script>

<template>
    <div>
        {{ products }}
        {{ clients }}

        <Button :label="'Submit'" />
    </div>
</template>

<style>

</style>