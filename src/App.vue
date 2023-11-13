<template>

    <h1>Parameter 1: {{ myClass.parameter1 }}</h1>
    <h1>Parameter 2: {{ myClass.parameter2 }}</h1>
    <h1>Double parameter 1: {{ myClass.doubleParam1 }}</h1>
    <h1>Double parameter 2: {{ myClass.doubleParam2() }}</h1>

    <div>
        <label for="parameter1Input">Parameter1: </label>
        <input id="parameter1Input" type="text" v-model="myClass.parameter1">
    </div>

    <div>
        <label for="parameter2Input">Parameter2: </label>
        <input id="parameter2Input" type="text" v-model="myClass.parameter2">
    </div>

  
</template>


<script setup>
import MyClass from './components/MyClass';
import { reactive, onBeforeMount } from 'vue';

const myClass = reactive(new MyClass())

</script>

<style scoped>

</style>
