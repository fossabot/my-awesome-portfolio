<template>
    <main class="flex-col w-full" aria-labelledby="main-title">

        <header class="hero uppercase font-nunito px-4 py-2 m-2">

            <img v-if="data.heroImage" class="rounded shadow-lg" :src="$withBase(data.heroImage)"
                 :alt="data.heroAlt || 'hero'"/>

            <h1 class="font-nunito text-2xl sm:text-3xl" v-if="data.heroText !== null" id="main-title">{{ data.heroText ||
                $title || 'Hello' }}</h1>

            <p class="description my-6 mx-auto leading-tight font-nunito text-xl md:text-2xl">
                {{ data.tagline || $description || 'Welcome to your VuePress site' }}
            </p>

            <div class="links py-2 h-full sm:text-xl sm:flex sm:flex-row sm:justify-between"
                 v-if="data.links && data.links.length">
                <div class="link py-3" v-for="(link, index) in activeLinks" :key="index">
                    <router-link class="hover:text-black py-10"
                                 active-class="active"
                                 :to="link.href"
                                 v-text="link.title"
                                 v-if="!link.external"
                                 exact/>
                    <a v-else
                       :href="nav.link"
                       target="_blank">{{ nav.text }}</a>
                </div>
            </div>
        </header>
    </main>
</template>

<script>
	export default {
		computed: {
			data() {
				return this.$page.frontmatter
			},

			activeLinks() {
				return this.data.links.filter(link => !link.draft)
			},
			actionLink() {
				return {
					link: this.data.actionLink,
					text: this.data.actionText
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
    //    .bg-accent
    //        background-color $accentColor

    /*
    .home
      padding $navbarHeight 2rem 0
      max-width 960px
      .hero
        img
          max-width: 100%
          max-height 280px
          display block
          margin 3rem auto 1.5rem
        .description
          max-width 35rem
          color lighten($textColor, 40%)
        .action-button
          transition background-color .1s ease
          box-sizing border-box
      .links
        border-top 1px solid $borderColor
        padding 1.2rem 0
        margin-top 2.5rem
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .link
        flex-grow 1
        flex-basis 30%
        max-width 30%
        h2
          font-size 1.4rem
          font-weight 500
          border-bottom none
          padding-bottom 0
          color lighten($textColor, 10%)
        p
          color lighten($textColor, 25%)

    */
</style>
