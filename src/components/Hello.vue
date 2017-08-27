<template>
  <div class="hello">
    <div class="padding">
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-card-media-left uk-cover-container">
          <img src="../assets/ac/ac-index.png" alt="" uk-cover>
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.padding{
  padding-top: 50px;
}
</style>
