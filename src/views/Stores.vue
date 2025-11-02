<template>
  <NavBar2/>
  <div class="stores-container">
    <h1 class="title">Stores</h1>
    <p class="subtitle">Find one of our {{ stores.length }} stores nearest you.</p>

    <div class="grid">
      <div v-for="(store, index) in stores" :key="index" class="store-card" >
        <img :src="store.image" :alt="store.city" class="store-img" />
        <h3 class="city">{{ store.city }}</h3>
        <p class="location">{{ store.location }}</p>
      </div>
    </div>
  </div>

  <Footer2/>
</template>

<script>
import NavBar2 from '../components/NavBar2.vue'
import Footer2 from '../components/Footer.vue'

export default {
  name: 'StoreView',
  components: {
    NavBar2,
    Footer2
  },
    data() {
    return {
      stores: [
        {
          city: "Seattle",
          location: "University Village",
          image: "/assets/seattle.png"
        },
        {
          city: "San Francisco",
          location: "Valencia Street, San Francisco",
          image: "/assets/sanFran.webp"
        },
        {
          city: "Palo Alto",
          location: "Stanford",
          image: "/assets/paloalto.png"
        },
        {
          city: "Los Angeles",
          location: "Abbot Kinney",
          image: "/assets/la.webp"
        },
        {
          city: "Boston",
          location: "Seaport",
          image: "/assets/boston.png"
        },
        {
          city: "New York",
          location: "Prince Street, New York",
          image: "/assets/ny.png"
        },
        {
          city: "Brooklyn",
          location: "Williamsburg",
          image: "/assets/brooklyn.png"
        },
        {
          city:"King of Prussia",
          location:"King of Prussia",
          image: "/assets/kop.png"
        },
        {
          city:"Georgetown",
          location:"Georgetown",
          image:"/assets/georgetown.png"
        }
      ]
    };
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

h1 ,.location, .city{
  font-family: "Lato", sans-serif;
}

.stores-container {
  padding: 60px;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 60px;
}

.store-card {
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  width: 340px;
}

.store-card:hover {
  transform: translateY(-4px);
  cursor: pointer;
}
.store-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.city {
  font-weight: bold;
  margin: 0.5rem 0 0;
  text-align: left;
  padding: 5px;
  font-size: 18px;
  text-transform: uppercase;
}
.location {
  color: gray;
  margin: 0.2rem 0 1rem;
  text-align: left;
    padding: 5px;
    font-size: 12px;

}
</style>
