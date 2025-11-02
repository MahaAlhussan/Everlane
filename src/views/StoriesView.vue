<template>
    <NavBar/>

  <div>
              <hr class="big-line">
    <div class="container ">
      <h1>everworld</h1>
      <p>We’re on a mission to clean up a dirty industry.<br>
These are the people, stories, and ideas that will help us get there.</p>
    </div>
  </div>

  <div class="articles-container">
<h1 class="section-title">The Latest</h1>
 <div class="grid">
      <div v-for="(article, index) in articles" :key="index" class="article-card" >
          <router-link
        :to="{ name: 'ArticleDetail', params: { id: article.id } }"
        class="article-link">
        <img :src="article.image" :alt="article.title" class="article-img" />
        <h3 class="title text-dark" style="font-size: 16px">{{ article.title }}</h3>
        <button class="article-button">{{ article.button }}</button>
              </router-link>
      </div>
              <button class="load">Load More Articles</button>

    </div>
  </div>

      <div class="text-animation">
        <div class="text-content">
            <span>Keep it Clean. </span>
            <img src="/assets/recycle.png" alt="" class="animation-img">  
            <span> Do Right By People. </span> 
           <img src="/assets/recycle.png" alt="" class="animation-img"> 
      <span >Keep it Clean.</span>
             <img src="/assets/recycle.png" alt="" class="animation-img"> 
            <span > Do Right By People. </span> 


        </div>
    </div>

    <div class="progress-container">
      <h1 class="section-title">Our Progress</h1>

<div class="progress-card">
    <div class="card">
<img src="/assets/carbon.png" alt="">
<h2>Carbon Commitment</h2>
    </div>
    <div class="card">
      <img src="/assets/envinit.png" alt="">
      <h2>Environmental Initiatives</h2>
    </div>
    <div class="card">
            <img src="/assets/factories.png" alt="">
            <h2>Better Factories</h2>
    </div>
</div>
    </div>

<div class="social-container">
  <h1>Follow us on social for more</h1>
<i class="fab fa-facebook-f"></i>

<i class="fab fa-twitter"></i>

<i class="fab fa-instagram"></i>

<i class="fab fa-linkedin-in"></i>

</div>

<Footer2/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer2 from '../components/Footer.vue'
import BaseCarousel from '../components/ui/BaseCarousel.vue'

export default {
  name: 'StoriesView',
  components: {
    NavBar,
    Footer2,
    BaseCarousel
  },
  data() {
    return {
      articles: [
        {
          title: "How To Style Winter Whites",
          id: 1,
          image: "/assets/winterArticle.png",
          button:"style"
        },
             {
          title: "We Won A Glossy Award",
          id:2,
          image: "/assets/awardArticle.png",
          button:"Transparency"
        },
             {
          title: "Coordinate Your Style: Matching Outfits for Everyone",
          id:3,
          image: "/assets/outfits.png",
          button:"style"
        },
             {
          title: "Black Friday Fund 2023",
          id:4,
          image: "/assets/blackfriday.png",
          button:"Transparency"
        },
             {
          title: "What to Wear this Season: Holiday Outfits & Ideas",
          id:5,
          image: "/assets/holidayArticle.png",
          button:"style"
        },
              {
          title: "Thanksgiving Outfit Ideas",
          id:6,
          image: "/assets/thanksgivingArticle.png",
          button:"style"
        },
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.big-line {
  height: 14px; 
  width: 1200px;
  background-color: #000000; 
  border: none; 
  margin: 0 auto;
  margin-top: 50px;
}
.container h1{
  color: #000000;
  font-weight: 600;
  text-align: left;
  font-size: 160px;
  margin-top: 20px;
}
.container p {
  text-align: left;
  font-size: 24px;
  font-weight: 300;
}


.articles-container {
  padding: 60px;
  text-align: center;
  margin-top: 160px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 60px;
}

.article-card {
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  width: 340px;
  text-align: left;
}

.article-card:hover {
  transform: translateY(-4px);
  cursor: pointer;
}
.article-img {
  width: 100%;
  height: 340px;
  object-fit: cover;
}

.section-title{
   font-weight: bold;
  /* margin: 0.5rem 0 0; */
  margin-bottom: 20px;
  text-align: left;
  padding: 5px;
  font-size: 48px;
  color: #000000;
}
.title {
  font-weight: bold;
  margin: 0.5rem 0 0;
  text-align: left;
  padding: 5px;
  font-size: 18px;
  text-transform: uppercase;
}
.article-button {
  color: #000000;
  text-align: center;
    margin-left: 10px;
    font-size: 12px;
    justify-content: left;
    background-color: white;
    border: none;
    width: 50px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

}
.load {
  text-align: center;
  background-color: #000000;
  color: white;
  height: 50px;
  width: 250px;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  grid-column: 1 / -1;
  justify-self: center;
  margin-top: 10px;
}
.load:hover{
background-color: #ffffff;
color: #000000;
border: 1px rgba(189, 189, 189, 0.531) solid;
}
.text-animation {
  width: 100%;
  font-size:60px;
  color: #000;
  padding: 20px 0;
  font-weight: 800;
  margin-top: 80px;

  overflow-x: hidden;  
  white-space: nowrap; 
}

.text-content {
  display: inline-block;
  animation: text-scroll 25s linear infinite;
}

    

@keyframes text-scroll {
  from {
    transform: translateX(100%); 
  }
  to {
    transform: translateX(-100%); 
  }
}
    .animation-img{
      width: 50px;
    }

.progress-container{
  margin-top: 180px;
  padding: 60px;
  text-align: left;

}
.progress-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 12px;
    
}
.card{
      border: none;
color: #000;
}
.card h2{
  font-size: 26px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin-top: 10px;

}
.social-container{
  background-color: #000;
  color: white;
  height: 300px;
  text-align: left;
  padding-left: 60px;
  margin-top: 70px;
}

.social-container h1{
  padding-top: 60px;
  font-weight: 800;
}
i {
  display: inline-block;   
  color: #676767;
  font-size: 34px;
  cursor: pointer;
  margin-right: 20px;   
  margin-top: 50px;

}
i:hover{
  color: #ffffff;
}
</style>