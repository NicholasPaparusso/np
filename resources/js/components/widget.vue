<script>
export default {
    name: 'widget',
    props:{
        content: String,
    }
}
</script>

<template>
    <div class="widget">
        {{content}}
    </div>
</template>

<style scoped lang="scss">
@import url('../../scss/_variables.scss');
</style>
