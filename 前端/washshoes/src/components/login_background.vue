<template>
  <div class="container">
    <div class="slide sticky" id="slide1">
      <h1>Welcome To ~</h1>
    </div>
    <section class="slide sticky" id="slide2">
      <h1>第 一 少 帅</h1>
    </section>
    <div class="slide sticky" id="slide3">
      <h1>毕 业 设 计</h1>
    </div>
    <div class="slide sticky" id="slide4">
      <h1>智 慧 洗 鞋 系 统</h1>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

body {
  margin: 0;
  padding: 0;
}

.container {
  height: 98vh;
  font-family: Lora, serif;
  overflow-x: hidden;
}

.slide {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 0.2em;
  color: white;
  background-size: cover;
  background-position: center;
}

h1 {
    font-size: 300%;
    text-shadow: 0 2px 2px black;
    margin-top: 15vh;
  }

#slide1 {
  background-image: url("https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg");
}

#slide2 {
  background-image: url("https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg");
}

#slide3 {
  background-image: url("https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg");
}

#slide4 {
  background-image: url("https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg");
}
</style>