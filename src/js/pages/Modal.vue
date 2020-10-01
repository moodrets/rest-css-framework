<template>
  <div class="rs-modal">
    <h1 class="mt-0">Modal example</h1>

    <button @click="toggleModal" class="button button-primary p-3 rds-3 font-500">Show modal</button>

    <div class="some-modal p-7 pos-fx pos-cover z-100 d-f trs-30" :class="!modalVisible ? 'op-0 vs-h' : 'ov-y-a'" @click="clickHandler">
      <div class="some-modal__overlay pos-fx pos-cover z-1-neg pe-n bg-dark op-70"></div>
      <div class="some-modal__body pos-rel z-10 p-9 bg-light sh-2 m-a wd-480 wd-max-100 rds-7">
        <div class="some-modal__close pos-abs pos-r-7 pos-t-7 cur-p" @click="toggleModal">
          <svg-icon name="rs-close"></svg-icon>
        </div>
        <h2 class="mt-0">Contenteditable modal</h2>
        <div contenteditable="true">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem magnam, commodi, ut nesciunt consequuntur aspernatur a nam quaerat aliquid tenetur. Aperiam dolorem ad corporis itaque, voluptates repellat maxime eveniet.
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        modalVisible: false
      }
    },
    methods: {
      toggleModal(){
        this.modalVisible = !this.modalVisible

        if ( this.modalVisible ) {
          document.body.classList.add('ov-h')
        } else {
          document.body.classList.remove('ov-h')
        }

      },
      clickHandler(event){
        if (event.target.classList.contains('some-modal')) {
          this.toggleModal()
        }
      }
    }
  }
</script>
