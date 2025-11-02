<template>
 <ol class="carousel-indicators  ">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
 <div class="card carousel-inner " style="max-width: 540px;">
 
  <div class="row g-0">
    <div class="carousel-item"></div>
    <div class="col-md-3 ">
        <p class="head-text">Before you go</p>

      <img 
        src="/assets/jeans.png"
        alt="Trendy Pants"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-sm-8">
      <div class="card-body">
        <h5 class="card-title">The Good Merino Wool Beanie</h5>
        <p class="card-text">
        One Size | Chambray Blue
        </p>
        <p class="card-text">
          <small class="text-muted">35$</small>
        </p>

        <button class="btn add-btn">Add</button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.card{
    display: grid;
    text-align: left;
    padding: 10px;
    max-height: fit-content;

}
.card-body{
    font-size: 12px;
    text-align: left;
}
.card-title {
        font-size: 12px;

}
.head-text  {
  font-weight: 700;
  color: black;
  font-size: 14px;
  width: 100px;
}
.carousel-indicators li{
  background-color: rgb(0, 0, 0);
  border-radius:50% ;
  width: 7px;
  height: 7px;
  
}
.carousel-indicators{
  border: none;
  margin-bottom: 210px;
  margin-left: 60px;
}
.add-btn{
  background: black;
  color: azure;
  font-weight: bold;
  float: right;
  width: 50px;
  height: 20px;
  font-size: 10px;
  text-align: center;
  justify-content: center;
}
</style>