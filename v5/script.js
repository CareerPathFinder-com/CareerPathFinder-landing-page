body {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
}

header {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

h1 {
  margin: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-bottom: 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  height: auto;
}

.slide.active {
  opacity: 1;
}

.text {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}

h2 {
  margin: 0;
}

#carousel-text {
  color: #666;
}
