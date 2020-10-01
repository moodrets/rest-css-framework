<template>
  <div class="rs-offcanvas">
    <h1 class="mt-0">Offcanvas</h1>

    <button @click="toggleOffcanvas" class="button button-success rds-3 p-3 font-500">Show offcanvas</button>

    <pre>
      <code class="font-sz-14 my-7 d-b p-5 bdr bdr-secondary-1 bg-secondary rds-2 ov-x-a">{{offcanvasCode}}</code>
    </pre>

    <div class="some-offcanvas pos-fx pos-cover z-100 trs-30" :class="!visible ? 'op-0 vs-h' : ''" @click="clickHandler">
      <div class="some-offcanvas__overlay pe-n pos-fx pos-cover z-1 bg-dark op-70"></div>
      <div class="some-offcanvas__body pos-rel z-2 bg-light sh-2 p-7 wd-280 pos-fx pos-l-0 pos-t-0 pos-b-0 ov-y-a">
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 1</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 2</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 3</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 4</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 5</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 6</button>
        <button class="button button-primary p-4 rds-4 mb-4 wd-100">Menu item 7</button>
        <p><strong>contenteditable</strong></p>
        <p contenteditable="true">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, cumque fugit ipsa earum provident est? Magni ut quis repudiandae, voluptatibus non saepe explicabo maiores tenetur atque amet omnis nihil aut!
        </p>
      </div>
    </div>

    <div class="" >

    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        visible: false,
        offcanvasCode: `
          <div class="some-offcanvas pos-fx pos-cover z-100 trs-30" class="if (hidden) op-0 vs-h">
            <div class="some-offcanvas__overlay pe-n pos-fx pos-cover z-1 bg-dark op-70"></div>
            <div class="some-offcanvas__body pos-rel z-2 bg-light sh-2 p-7 wd-280 pos-fx pos-l-0 pos-t-0 pos-b-0 ov-y-a">
              ...
            </div>
          </div>
        `
      }
    },
    methods: {
      toggleOffcanvas() {
        this.visible = !this.visible
      },
      clickHandler(event){
        if (event.target.classList.contains('some-offcanvas')) {
          this.toggleOffcanvas()
        }
      }
    }
  }
</script>
