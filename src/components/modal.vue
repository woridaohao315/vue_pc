<template>
    <div id="modal">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style >
    #modal{
        min-width: 200px;
        max-width: 500px;
        min-height: 100px;
        background-color: #fff;
        border: 1px solid #f00;
        margin:200px auto;
    }

</style>
