<template lang="pug">
  .dashboard-container
    nav-bar
    .book-detail-container
      img.book-detail-image
      .description-container.flex-column
        .title-container
          h1.book-detail-title
            | Título del libro
          h3.genre
            | género
        .info-container.flex-column
          .detail-container
            p.info-detail-name
              | Book author: 
            p.info-detail
              | Nombre del autor del libro
          .detail-container
            p.info-detail-name
              | Publisher:
            p.info-detail
              | Nombre de la editorial
          .detail-container
            p.info-detail-name
              | Year of publication:
            p.info-detail
              | Año de la publicación
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "bookDetail",
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/commons/colors";

.dashboard-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: $light-grey;
  height: 100%;
  width: 100vw;
}

.book-detail-container {
  background-color: $white;
  box-shadow: 2px 3px 5px $shadow;
  display: flex;
  height: 100%;
  margin-top: 75px;
  max-height: 400px;
  max-width: 1140px;
  padding: 40px 50px 40px 30px;
  width: 100%;
}

.book-detail-image {
  height: 100%;
  margin-right: 40px;
  max-height: 325px;
  max-width: 310px;
  width: 100%;
}

.description-container {
  width: 100%;
}

.title-container {
  border-bottom: 4px solid $green;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding: 10px 0 20px;
}

.book-detail-title {
  color: $black;
  font-size: 24px;
  font-weight: bold;
  margin-right: 15px;
}

.info-container {
  align-items: flex-start;
}

.detail-container {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
}

.info-detail-name {
  color: $black;
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
}

.info-detail {
  font-size: 16px;
}
</style>