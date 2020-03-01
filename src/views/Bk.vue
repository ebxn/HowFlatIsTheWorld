<template>
  <div class="flex flex-col items-center h-full">
    <!-- it's not -->
    <div class="flex flex-col mb-10 lg:mb-4">
      <h1 class="text-2xl md:text-3xl text-white font-bold">
        It's not.
      </h1>
      <span class="animate inline-block bg-white h-1" />
    </div>

    <earf />

    <!-- buttons & shirts -->
    <div class="lg:flex lg:justify-center mt-10 lg:mb-0">
      <div class="hidden lg:block w-2/12" />


      <!-- hor line -->
      <hr class="lg:hidden opacity-75 mx-auto my-10 border-2 border-white rounded-full w-24">

      <div class="lg:ml-10 lg:w-5/12">
        <h2 class="mb-4 lg:mb-0 text-lg md:text-3xl lg:text-2xl text-white text-center font-semibold">
          Get the views!
        </h2>

        <ul class="flex flex-col md:flex-row items-center">
          <li class="mb-4 md:mb-0 md:mr-4 w-full">
            <a
              href="https://teespring.com/earth-curvy-and-proud?page=1&pid=389&tsmac=store&tsmic=madapparel"
              target="_blank"
            >
              <img
                class="rounded-full w-56 lg:w-116 lg:mt-3"
                src="@/assets/vca.jpg"
                alt="A shirt with a picture of the Earth on it and the caption BLAH"
              >
            </a>
          </li>
          <li class="w-full">
            <a
              href="https://teespring.com/earth-curvy-and-proud?page=1&pid=389&tsmac=store&tsmic=madapparel"
              target="_blank"
            >
              <img
                class="rounded-full w-56 lg:w-116 lg:mt-3"
                src="@/assets/vca.jpg"
                alt="A shirt with a picture of the Earth on it and the caption BLAH"
              >
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden lg:block w-1/12" />
    </div>
  </div>
</template>

<script>
  import Earf from '@/components/Earf.vue'

  export default {
    name: 'Home',
    components: {
      Earf
    }
  }
</script>

<style>
  @keyframes growRight {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 100;
      transform: scaleX(1);
    }
  }
  .animate {
    animation: growRight 750ms ease-out 250ms 1 backwards;
    transition: opacity 1000ms ease-out;
    transform-origin: left;
  }
</style>
