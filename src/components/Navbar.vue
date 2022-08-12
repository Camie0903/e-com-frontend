<template>

<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
        <div id="mainHead">
            <li class="mainHead text-white">
                Alliance Anime 
            </li> 
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="navNames text-white">
                  <router-link to="/" class="nav-link mx-2 text-white">Home</router-link> 
              </li> 
               
                <li>
                    <router-link to="/login" class="nav-link mx-2 text-white">login</router-link>
                </li>
                <li>
                    <router-link to="/register" class="nav-link mx-2 text-white">Register</router-link>
                </li>

               
                <!-- <li>
                    <router-link to="/projects" class="nav-link mx-2 text-white">Projects</router-link> 
                </li>
                <li>
                    <router-link to="/testimonials" class="nav-link mx-2 text-white">Testimonials</router-link> 
                </li>
                <li>
                    <router-link  to="/contact" class="nav-link mx-2 text-white">Contact</router-link> 
                </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
*{
    background-color: black; 
    margin-top:-1%;
    margin-left: -1%; 
    /* width: 100%; */
    
    }
ul{
    /* width:100%; */
    display: flex;
    flex-wrap: wrap;
    gap:5rem;
    align-items:center;
    margin-left: 22%;
    list-style: none;
    margin-top: 1%;
    justify-content: flex-end;
}
#mainHead{
    list-style: none;
    margin-top: 1%;
    font-size: xx-large;
/* font-family: 'Outfit', sans-serif;
font-family: 'Playfair Display', serif;
font-family: 'Poppins', sans-serif; */
}
</style>