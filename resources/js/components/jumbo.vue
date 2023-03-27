<script>
export default {
    name: 'jumbo',
}
</script>

<template>
    <div class="jumbo">
        <h1>NICHOLAS PAPARUSSO</h1>
        <h3>FRONT END DEVELOPER</h3>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.jumbo{

    color: $white;

    h1, h3{
        text-align: center;
    }

    h1{
        font-size: 75px;
        font-weight: 600;
    }

    h3{
        font-size: 25px;
        margin-top: 25px;
    }
}

</style>
