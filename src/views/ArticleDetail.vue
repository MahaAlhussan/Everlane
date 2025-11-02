<template>
  <NavBar2/>
  <div class="article-page" v-if="article">
    <div class="article-hero">
      <img :src="article.main_image" :alt="article.title" class="article-img" />
      <div class="article-overlay">
        <h1 class="title " style="color:white;">{{ article.title }}</h1>
        <p class="subhead">{{ article.subhead }}</p>
      </div>
    </div>

    <div class="article-content">
      <hr class="big-line"> 
      <div class="social-icons">
        <i class="fab fa-linkedin-in btn"></i>
        <i class="fab fa-instagram btn"></i>
        <i class="fab fa-twitter btn"></i>
      </div>
      
      <p>{{ getContentPart(0) }}</p>
      <img v-if="article.images && article.images[0]" :src="article.images[0]" :alt="``" class="content-image"/>
      
      <div v-if="article.headings && article.headings.length > 0">
        <div v-for="(heading, index) in article.headings" :key="index">
          <h2 class="content-heading">{{ heading }}</h2>
          <h4 v-if="article.paragraphs && article.paragraphs[index]" 
          class="content-paragraph">{{ article.paragraphs[index] }}</h4>
        </div>
        
        <img v-if="article.images && article.images[1]" :src="article.images[1]" :alt="`${article.title} - Image 2`" class="content-image middle-image"/>
      </div>
      
    </div>

   <WhiteProduct/>
  </div>


     <div class="related-articles">
      <div class="articles-grid">
        <div v-for="relatedArticle in relatedArticles" :key="relatedArticle.id" class="related-article-card">
          <router-link :to="`/articles/${relatedArticle.id}`" class="article-link">
            <img :src="relatedArticle.image" :alt="relatedArticle.title" class="related-article-img" />
            <h3 class="article-title">{{ relatedArticle.title }}</h3>
          </router-link>
        </div>
      </div>
     </div>
     
  <Footer2/>
</template>

<script>
import NavBar2 from '../components/NavBar2.vue'
import Footer2 from '../components/Footer.vue'
import WhiteProduct from '../components/WhiteProduct.vue'


export default {
  components: {
    NavBar2,
    Footer2,
    WhiteProduct
  },
  data() {
    return {
      article: null,
      allArticles: [
          {
          title: "How To Style Winter Whites",
          id: 1,
          image: "/assets/winterArticle.png",
          button: "style"
        },
        {
          title: "We Won A Glossy Award",
          id: 2,
          image: "/assets/awardArticle.png",
          button: "Transparency"
        },
        {
          title: "Coordinate Your Style: Matching Outfits for Everyone",
          id: 3,
          image: "/assets/outfits.png",
          button: "style"
        },
      ]
    }
  },
   
  mounted() {
    const id = this.$route.params.id;

    const articles = [
      {
        id: "1",
        title: "How To Style Winter Whites",
        main_image: "/assets/winterArticle2.png",
        subhead: "Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide.",
        content: "In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.||Continue with the rest of your article content here. This part will appear after the first image. You can add more content sections as needed.",
        headings: ["Nail the Classics", "Monochromatic Magic", "Keep Warm in White", "Textures and Layers", "Accessorize with Neutrals"],
        images: [
          "/assets/winterArticle1.png",
          "/assets/winterArticle3.png", 
          "/assets/winterArticle4.png"
        ] ,
        paragraphs: [
            "Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.",
            "Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic corduroy pants in a modern wide-legged silhouette with a relaxed Oxford style white shirt for a mix-and-match texture play. Extra points if you add a white blazer, cardigan, or sweater. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.",
       "Stay warm all winter long with a white puffer jacket puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.",
       "Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. Start with your white turtleneck and experiment with different fabrics like wool, cashmere, and silk to add depth and interest to your look. A white silk blouse layered under a chunky knit sweater or a white wool skirt paired with a turtleneck creates a textural look that's both cozy and chic.",
       "When working with a predominantly white palette, neutrals become your best friends. From white leather Chelsea boots to off-white beanies mix in plenty of winter-ready accessories and shoes for those finishing outfit tonal touches.",
       "So, step into the season with confidence, and let your winter whites make a bold and beautiful statement. Shop our winter white edit here."
       ]
      },
      {
        id: "2",
        title: "Sustainability in Style",
        main_image: "/assets/sustainable-fashion.jpg",
        subhead: "Exploring eco-friendly fashion choices",
        content: "First part of sustainability content...||Second part of sustainability content after the first image...",
        headings: ["Ethical Sourcing", "Circular Fashion", "Green Materials"],
        images: [ ],
        paragraphs: [

            ""
        ]

      },
    ];
    this.article = articles.find(a => a.id === id);
  },
  computed: {
  relatedArticles() {
    return this.allArticles
      .filter(article => [1, 2, 3].includes(article.id))
      .slice(0, 3);
  }
},
  methods: {
    getContentPart(index) {
      if (!this.article || !this.article.content) return '';
      const parts = this.article.content.split('||');
      return parts[index] || parts[0];
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Michroma&family=Poller+One&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

.big-line {
  height: 12px; 
  width: 1200px;
  background-color: #000000; 
  border: none; 
  margin-top: 50px;
  margin-bottom: 20px;
}

.article-hero {
  position: relative;
  width: 100%;
  height: 691px; 
  overflow: hidden;
}

.article-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  text-align: left;
  justify-content: left;
}

.article-overlay {
  position: absolute;
  top: 20%;
  transform: none;  
  text-align: left;
  color: white;
  min-width: 100%;
  min-height: 465px;
  background: linear-gradient(
    to top,
    rgba(42, 42, 42, 0.85),
    transparent
  );
}

.title {
  font-size: 55px;
  font-weight: 600;
  margin-top: 200px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.182);
  margin-left: 20px;
  max-width: 600px;
}

.subhead {
  font-size: 20px;
  line-height: 1.5;
  margin-left: 20px;
}

.article-content p{
    max-width:900px;
    margin: 0 auto;
    font-weight: 800;
    font-size: 25px;
  font-family: "Roboto", sans-serif ;
  text-align: left;
  margin-left: 18rem;
  color: #000000;

}
i {
    background-color: #000000;
    height:40px;
    width: 40px;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 20px;
      display: inline-block;   
      float: left;
  margin-left: 40px;
margin-top: 19px;
}

.article-content p {
  font-weight: 800;
  font-size: 29px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2rem;
}

.content-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 2rem auto;
  display: block;
  margin-top: 150px;
}

.middle-image {
  margin: 3rem auto;
  border: 3px solid #f0f0f0;
}

.social-icons {
  margin-bottom: 2rem;
}

/* i {
  background-color: #000000;
  height: 40px;
  width: 40px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  cursor: pointer;
} */

.back-link {
  display: inline-block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #333;
  color: white;
}
.content-heading{
text-align: left;
margin-left: 250px;
color: #000000;
font-weight: 700;
font-family: "Roboto";
line-height: 5rem;
margin-top: 40px;
}
h4{
margin: 0 auto;
text-align: left;
font-size: 18px;
font-weight: 400;
margin-left: 250px;
line-height: 2rem;
max-width: 800px;
}
.related-articles {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.related-title {
  font-size: 47px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #000;
  font-family: "Roboto", sans-serif;

}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  

}

.related-article-card {
  background: white;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.related-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.article-link {
  text-decoration: none;
  display: block;
  
}

.related-article-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.article-title {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  color: #000;
  margin: 0;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  text-align: left;
    font-size: 24px;

}


</style>