<template>
<div class="container-fluid">
  <kt-header />
  <main id="main" class="main-page" itemscope itemtype="https://schema.org/Blog">
    <slot name="view"></slot>
  </main>
</div>
</template>

<script>
export default {
  created () {
    console.log('main loaded')
  }
}
</script>