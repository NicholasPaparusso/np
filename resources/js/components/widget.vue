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
    @import '../../scss/_variables.scss';

    .widget{
        position: absolute;
        left: 50%;
        top: 150%;
        padding: 5px 10px;
        width: 120px;
        border-radius: 20px;
        background-color: $bg-dropdown;
        opacity: 0;
        text-align: center;
        transition: all .3s;
        transform: translate(-50%);
        font-size: .85em;
        font-weight: 500;
    }

</style>
