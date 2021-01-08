<template>
  <div class="display">
      {{value}}
  </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>
.display{
    background-color: #00000A;
    grid-column: span 4;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    font-size: 2.0em;
    overflow: hidden;
}
</style>