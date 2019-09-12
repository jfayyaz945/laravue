// CreatePost.vue

<template>
  <div class="container">
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3" v-if="image">
              <img :src="image" class="img-responsive" height="70" width="90">
            </div>
          <div class="col-md-6">
              <input type="file" v-on:change="onImageChange" class="form-control">
          </div>
          <div class="col-md-3">
              <button class="btn btn-success btn-block" @click="uploadImage">Upload Image</button>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
            let uri = 'http://127.0.0.1:8000/api/post/create';
            this.axios.post(uri, this.post).then((response) => {
            this.$router.push({name: 'posts'});
            });
      },
      onImageChange(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
              return;
          this.createImage(files[0]);
      },
      createImage(file) {
          let reader = new FileReader();
          let vm = this;
          reader.onload = (e) => {
              vm.image = e.target.result;
          };
          reader.readAsDataURL(file);
      },
      uploadImage(){
          axios.post('/image/store',{image: this.image}).then(response => {
              if (response.data.success) {
                alert(response.data.success);
              }
          });
      }
    }
  }
</script>