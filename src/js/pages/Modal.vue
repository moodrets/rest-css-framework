<template>
  <div class="rs-modals">
    <h1 class="mt-0">Modals example</h1>

    <button @click="toggleModal" class="button button-primary p-3 rds-3">Show modal</button>

    <div class="some-modal p-7 pos-fx pos-cover zi-100 d-f ov-y-a trs-30" :class="!modalVisible ? 'op-0 vs-h' : ''" @click="clickHandler">
      <div class="some-modal__overlay pos-fx pos-cover zi-1-neg pe-n bg-dark op-70"></div>
      <div class="some-modal__body pos-rel zi-10 p-9 bg-light sh-2 m-a wd-480 wd-max-100 rds-7">
        <div class="some-modal__close pos-abs pos-r-7 pos-t-7 cur-p" @click="toggleModal">
          <svg-icon name="rs-close"></svg-icon>
        </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem magnam, commodi, ut nesciunt consequuntur aspernatur a nam quaerat aliquid tenetur. Aperiam dolorem ad corporis itaque, voluptates repellat maxime eveniet.
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
