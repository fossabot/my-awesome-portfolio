<template>
<div>
  <form method="post"
  data-netlify="true"
  data-netlify-honeypot="true">

    <input type="text" 
      name="name"
      placeholder="Seu nome" />
      <textarea name="body"></textarea>

    <input type="button" value="Enviar" />
  </form>

  <!-- <div class="typeform typeform--fix">
    <lazy-load tag="iframe" :data="{ src: 'https://MY_TYPEFORM_URL', height: 1000 }" />
  </div> -->

</div>
</template>

<script>
export default {
  created () {
    console.log('Contato loaded')
  }
}
</script>

<style>
</style>
