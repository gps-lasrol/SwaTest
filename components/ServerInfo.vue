<template>
    <div v-if="data">
        <code v-bind="data"></code>
    </div>
</template>

<script setup>

    const {data} = await useFetch("/api/info");
    console.log(data.value);

</script>
