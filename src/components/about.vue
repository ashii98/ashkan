<template>
  <div id="about">
    <div class="max-width" style="width: 50%; float: left; position: relative; left: 35%">
      <div class="uk-card uk-card-body uk-text-center" uk-scrollspy="target: > .anime; cls:uk-animation-slide-bottom; delay: 100 ">
        <img  src="http://res.cloudinary.com/ashi98/image/upload/v1504257242/ashkan_ppcnsv.jpg" class="profile-image anime" />
        <h2 class="name anime">ashkan dehbashi</h2>
        <h5 class="anime"><label>dhs.ashkan@gmail.com |</label><label> Tehran |</label><label> Front-end Developer</label></h5>
        <a class="anime" href="https://github.com/ashii98" target="_blank"><span class="view-icons git" href="" uk-icon="icon: github; ratio:1.5"></span></a>
        <a class="anime" href="https://twitter.com/ashii77?lang=en" target="_blank"><span class="view-icons tweet" href="" uk-icon="icon: twitter; ratio:1.5"></span></a>
        <a class="anime" href="https://www.instagram.com/ashi_77/?hl=en" target="_blank"><span class="view-icons insta" href="" uk-icon="icon: instagram; ratio:1.5"></span></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        project_name: 'archiver',
        project_info: 'archiver is a online arvhiver for student documents, this is the first online arvhiver in iranian collages, and it will launch soon...',
        project_name2: 'pre selected unit',
        project_info2: 'pre selected unit, its a program for managing students selected units for reports.',
        project_name3: 'shams messenger',
        project_info3: 'shams messenger, its a cross platform messenger for iranian collages, this program has been cancelled.'
      }
    }
  }
</script>
<!-- styling for the component -->
<style>
  .profile-image{
    width: 200px;
    border: 5px solid #333;
    border-radius: 50%;
  }
  .uk-card{
    border-radius: 6px;
    margin-top: 5%;
  }
  .name{
    font-family: 'Ubuntu', sans-serif !important;
    color: #000;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 10px;
    text-transform: capitalize;
  }
  h5{
    font-family: 'Ubuntu', sans-serif !important;
    color: #000;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 20px;
  }
  h3{
    font-family: 'Ubuntu', sans-serif !important;
    color: #333;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 20px;
    text-transform: capitalize;
    display: inline-block;
    float: left;
  }
  .view-icons{
    padding: 10px;
    color: #333;
  }
  .git:hover{
    color: #6e5494 !important;
  }
  .insta:hover{
    color: #e1306c !important;
  }
  .tweet:hover{
    color: #1da1f2 !important;
  }
  @media screen and (max-width: 699px) {
    .max-width{
      width: 100% !important;
      left: 0 !important;
    }
  }
</style>
