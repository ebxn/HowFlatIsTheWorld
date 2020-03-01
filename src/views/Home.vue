<template>
  <div class="flex flex-col items-center h-full">
    <!-- it's not -->
    <div class="mt-24">
      <h1 class="animate-fade-in text-center text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
        It's not.
      </h1>
      <span class="animate-fade-right block mx-auto bg-white w-20 md:w-26 lg:w-32 h-1" />
    </div>

    <div class="md:fixed flex justify-center md:items-center my-24 md:my-0 w-full h-full">
      <!--  earth -->
      <earf />

      <!-- shirt preview -->
      <transition
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <shirt-preview
          v-if="shirt"
          :shirt="shirt"
        />
      </transition>
    </div>

    <!-- links -->
    <div class="animate-fade-up md:absolute md:bottom-0 flex flex-wrap mb-10 md:mb-24 w-full">
      <!-- socials -->
      <div class="flex flex-col justify-between mb-10 md:mb-0 w-full md:w-1/2">
        <h2 class="mb-4 md:mb-0 text-center text-white font-bold">
          Share online!
        </h2>
        <ul class="flex justify-center">
          <li class="md:transition-opacity md:duration-150 inline-block md:opacity-75 md:hover:opacity-100">
            <a
              onClick="MyWindow=window.open('https://twitter.com/share?url=http://howflatisthe.world&amp;text=Is%20the%20world%20flat?&amp;hashtags=flatearth')"
              class="cursor-pointer"
            >
              <img
                class="w-12 h-12"
                src="@/assets/twitter.png"
                alt="The twitter logo"
              >
            </a>
          </li>
          <li class="md:transition-opacity md:duration-150 inline-block md:opacity-75 md:hover:opacity-100 mx-4">
            <a
              onClick="MyWindow=window.open('http://www.facebook.com/sharer.php?u=http://howflatisthe.world')"
              class="cursor-pointer"
            >
              <img
                class="w-12 h-12"
                src="@/assets/facebook.png"
                alt="The facebook logo"
              >
            </a>
          </li>
          <li class="md:transition-opacity md:duration-150 inline-block md:opacity-75 md:hover:opacity-100">
            <a
              onClick="MyWindow=window.open('https://www.reddit.com/submit?url=https://howflatisthe.world&title=Flat%20Earth%20website')"
              class="cursor-pointer"
            >
              <img
                class="w-12 h-12"
                src="@/assets/reddit.png"
                alt="The Reddit logo"
              >
            </a>
          </li>
        </ul>
      </div>

      <!-- shirts -->
      <div class="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 class="mb-4 md:mb-0 text-center text-white font-bold">
            ...or look damn fine!
          </h2>
          <h3 class="hidden md:block md:mb-2 text-xs text-center text-gray-400 font-medium">
            HOVER TO PREVIEW
          </h3>
        </div>
        <ul class="flex flex-col md:flex-row items-center md:items-start md:justify-center">
          <li
            class="md:transition-opacity md:duration-150 flex justify-center md:inline-block md:opacity-75 md:hover:opacity-100 md:mx-2 mb-4 md:mb-0 w-full md:w-auto"
            @mouseenter="updateCurrentHoveredShirt('shirt-round')"
            @mouseleave="clearCurrentHoveredShirt()"
          >
            <a
              class="cursor-pointer"
              ahref="https://teespring.com/round-2020"
            >
              <img
                class="rounded-lg w-64 h-64 md:w-12 md:h-12"
                src="@/assets/shirt-round.jpg"
                alt="A t-shirt design featuring the word ROUND with the O replaced by a globe."
              >
            </a>
          </li>
          <li
            class="md:transition-opacity md:duration-150 flex justify-center md:inline-block md:opacity-75 md:hover:opacity-100 md:mx-2 w-full md:w-auto"
            @mouseenter="updateCurrentHoveredShirt('shirt-curvy')"
            @mouseleave="clearCurrentHoveredShirt()"
          >
            <a
              class="cursor-pointer"
            >
              <img
                class="rounded-lg w-64 h-64 md:w-12 md:h-12"
                src="@/assets/shirt-curvy.jpg"
                alt="A t-shirt design featuring the text curvy and proud with an image of a globe."
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from '@vue/composition-api'
  import Earf from '@/components/Earf.vue'
  import ShirtPreview from '@/components/ShirtPreview.vue'

  export default {
    name: 'Home',
    components: {
      Earf,
      ShirtPreview
    },
    setup (props, ctx) {
      const shirt = ref('')

      const updateCurrentHoveredShirt = (name) => {
        if (window.innerWidth > 768) {
          shirt.value = name
        } else {
          shirt.value = ''
        }
      }

      const clearCurrentHoveredShirt = () => {
        shirt.value = ''
      }

      return {
        shirt,
        updateCurrentHoveredShirt,
        clearCurrentHoveredShirt
      }
    }
  }
</script>

<style>
  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 100;
      transform: scaleX(1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 100;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 750ms ease-out 600ms 1 backwards;
    transform-origin: left;
  }

  .animate-fade-right {
    animation: fadeRight 750ms cubic-bezier(.29,0,.38,1) 1000ms 1 backwards;
    transform-origin: left;
  }

  .animate-fade-up {
    animation: fadeUp 850ms cubic-bezier(.29,0,.38,1) 2150ms 1 backwards;
    transform-origin: left;
  }
</style>
