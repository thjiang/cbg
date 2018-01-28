<style lang="less">
    
</style>

<template>
<div>rolelist</div>
</template>

<script>
// import bus from '../eventBus.js';
export default {
    data() {
        return {
            roles: [],
            total: 0,
            cur_page: 1
        };
    },
    mounted: function() {

    },
    methods: {
        currentChange(nextPage) {
            // bus.$emit("changePage", nextPage);
        }
    }
};
</script>
