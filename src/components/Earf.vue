<template>
  <div>
    <div ref="earf" />
  </div>
</template>

<script>
  import * as THREE from '@/../node_modules/three/build/three.module'
  import { onMounted } from '@vue/composition-api'

  export default {
    name: 'Earf',
    setup (props, ctx) {
      let camera, scene, renderer
      let world

      onMounted(() => {
        init()
        animate()
        ctx.refs.earf.appendChild(renderer.domElement)
      })

      const init = () => {
        camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          0.01,
          1000
        )
        camera.position.z = 2

        scene = new THREE.Scene()

        scene.add(new THREE.AmbientLight(0x333333))

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(5, 3, 5)
        scene.add(light)

        const noClouds = require('@/assets/2_no_clouds_4k.jpg')
        const bumpMap = require('@/assets/elev_bump_4k.jpg')
        const specMap = require('@/assets/water_4k.png')

        world = new THREE.Mesh(
          new THREE.SphereGeometry(0.5, 32, 32),
          new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(noClouds),
            bumpMap: new THREE.TextureLoader().load(bumpMap),
            bumpScale: 0.005,
            specularMap: new THREE.TextureLoader().load(specMap),
            specular: new THREE.Color('grey')
          })
        )

        scene.add(world)

        renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75)

        window.addEventListener('resize', onWindowResize, false)
      }

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75)
      }

      const animate = () => {
        requestAnimationFrame(animate)
        world.rotation.y += 0.01
        renderer.render(scene, camera)
      }

      return {
      }
    }
  }
</script>
