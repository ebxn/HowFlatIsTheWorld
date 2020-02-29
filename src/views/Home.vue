<template>
  <div class="flex flex-col justify-around items-center h-full">
    <div class="flex flex-col">
      <h1 class="mt-10 text-4xl text-white font-bold">
        It's not.
      </h1>
      <span class="animate inline-block bg-white w-32 h-1" />
    </div>

    <earf />

    <div class="mb-10 ">
      <h2 class="mb-4 text-xl text-white text-center font-semibold">
        Tell a flat earther!
      </h2>
      <ul class="text-red-100">
        <li class="inline-block mx-4">
          <a
            onClick="MyWindow=window.open('https://twitter.com/share?url=http://howflatisthe.world&amp;text=Is%20the%20world%20flat?&amp;hashtags=flatearth')"
          >
            <img
              src="@/assets/twitter.png"
              alt="The twitter logo"
            >
          </a>
        </li>
        <li class="inline-block mx-4">
          <a
            onClick="MyWindow=window.open('http://www.facebook.com/sharer.php?u=http://howflatisthe.world')"
          >
            <img
              src="@/assets/facebook.png"
              alt="The facebook logo"
            >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Earf from '@/components/Earf.vue'

  export default {
    name: 'Home',
    components: {
      Earf
    },
    setup (props, ctx) {
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
