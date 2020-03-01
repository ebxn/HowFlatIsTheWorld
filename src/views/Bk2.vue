<template>
  <div class="flex flex-col items-center h-full">
    <!-- it's not -->
    <div class="flex flex-col mb-8 lg:mb-8">
      <h1 class="text-2xl md:text-3xl text-white font-bold">
        It's not.
      </h1>
      <span class="animate inline-block bg-white h-1" />
    </div>

    <earf />

    <!-- buttons & shirts -->
    <div class="mt-10 lg:-mt-4">
      <div class="mb-10 lg:my-12">
        <h2 class="mb-2 text-lg md:text-xl text-white text-center font-semibold">
          Share the news!
        </h2>
        <ul class="flex justify-center items-center h-full">
          <li class="inline-block mx-3">
            <a
              class="cursor-pointer"
              onClick="MyWindow=window.open('https://twitter.com/share?url=http://howflatisthe.world&amp;text=Is%20the%20world%20flat?&amp;hashtags=flatearth')"
            >
              <img
                class="w-8 md:w-10 lg:w-auto h-8 md:h-10"
                src="@/assets/twitter.png"
                alt="The twitter logo"
              >
            </a>
          </li>
          <li class="inline-block mx-3">
            <a
              class="cursor-pointer"
              onClick="MyWindow=window.open('http://www.facebook.com/sharer.php?u=http://howflatisthe.world')"
            >
              <img
                class="w-8 md:w-10 lg:w-auto h-8 md:h-10"
                src="@/assets/facebook.png"
                alt="The facebook logo"
              >
            </a>
          </li>
          <li class="inline-block mx-3">
            <a
              class="cursor-pointer"
              onClick="MyWindow=window.open('https://www.reddit.com/submit?url=https://howflatisthe.world&title=Flat%20Earth%20website')"
            >
              <img
                class="w-8 md:w-10 lg:w-auto h-8 md:h-10"
                src="@/assets/reddit.png"
                alt="The Reddit logo"
              >
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="mb-2 text-lg md:text-xl text-white text-center font-semibold">
          Get the views!
        </h2>

        <ul class="flex flex-col md:flex-row items-center">
          <li class="mb-4 md:mb-0 md:mr-4 w-full">
            <a
              href="https://teespring.com/earth-curvy-and-proud?page=1&pid=389&tsmac=store&tsmic=madapparel"
              target="_blank"
            >
              <img
                class="rounded-full w-56"
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
                class="rounded-full w-56"
                src="@/assets/vca.jpg"
                alt="A shirt with a picture of the Earth on it and the caption BLAH"
              >
            </a>
          </li>
        </ul>
      </div>

      <!-- hor line -->
      <!-- <hr class="lg:hidden opacity-75 mx-auto my-10 border-2 border-white rounded-full w-24"> -->
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
