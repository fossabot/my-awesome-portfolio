<template>
    <div class="theme-container"
         :class="pageClasses"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
        <!--<Password v-if="!isHasKey"></Password>-->

        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

        <Sidebar :items="sidebarItems"
                 @toggle-sidebar="toggleSidebar">
            <slot name="sidebar-top" slot="top"/>
            <slot name="sidebar-bottom" slot="bottom"/>
        </Sidebar>

        <div class="custom-layout" v-if="$page.frontmatter.layout">
            <component :is="$page.frontmatter.layout"/>
        </div>

        <!--@tagChange="tagChange"-->
        <Page :sidebar-items="sidebarItems">
            <slot name="page-top" slot="top"/>
            <slot name="page-bottom" slot="bottom"/>
        </Page>

        <!--<Valine :valineRefresh="valineRefresh"></Valine>-->

        <router-view></router-view>
        <SWUpdatePopup :updateEvent="swUpdateEvent"/>
    </div>
</template>
<script>
	import Vue from 'vue'
	import nprogress from 'nprogress'
	import Navbar from '@theme/components/Navbar.vue'
	import Page from '@theme/components/Page.vue'
	import Sidebar from '@theme/components/Sidebar.vue'

	import SWUpdatePopup from '@theme/components/SWUpdatePopup/'
	import { resolveSidebarItems } from '@parent-theme/util/'
	// import Valine from '@theme/components/Valine/'
	// import Password from '@theme/components/Password/'

	export default {
		components: { Page, Sidebar, Navbar, SWUpdatePopup},
        name: 'Layout',
		data() {
			return {
				isSidebarOpen: false,
				swUpdateEvent: null,
				valineRefresh: false,
				isHasKey: true
			}
		},

		computed: {
			shouldShowNavbar() {
				const {themeConfig} = this.$site
				const {frontmatter} = this.$page
				if (
					frontmatter.navbar === false
					|| themeConfig.navbar === false) {
					return false
				}
				return (
					this.$title
					|| themeConfig.logo
					|| themeConfig.repo
					|| themeConfig.nav
					|| this.$themeLocaleConfig.nav
				)
			},

			shouldShowSidebar() {
				const {frontmatter} = this.$page
				return (
					!frontmatter.home
					&& frontmatter.sidebar !== false
					&& this.sidebarItems.length
				)
			},

			sidebarItems() {
				return resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				)
			},

			pageClasses() {
				const userPageClass = this.$page.frontmatter.pageClass
				return [
					{
						'no-navbar': !this.shouldShowNavbar,
						'sidebar-open': this.isSidebarOpen,
						'no-sidebar': !this.shouldShowSidebar
					},
					userPageClass
				]
			}
		},

		mounted() {
			window.addEventListener("scroll", this.onScroll);
			// configure progress bar
			nprogress.configure({ showSpinner: false })
			this.$router.beforeEach((to, from, next) => {
				if (to.path !== from.path && !Vue.component(to.name)) {
					nprogress.start()
				}
				next()
			})

			this.$router.afterEach(() => {
				nprogress.done()
				this.isSidebarOpen = false
			})


			this.$on("sw-updated", this.onSWUpdated);
			// const keyPage = this.$site.themeConfig.keyPage
			// if (!keyPage) {
			// 	this.isHasKey =  true
			// }

			// const {keys} = keyPage
			// this.isHasKey = keys.indexOf(sessionStorage.getItem('key')) > -1
		},

		methods: {
			tagChange () {
				this.valineRefresh = true
				setTimeout(() => {
					this.valineRefresh = false
				}, 300)
			},
			toggleSidebar(to) {
				this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
			},
			// side swipe
			onTouchStart(e) {
				this.touchStart = {
					x: e.changedTouches[0].clientX,
					y: e.changedTouches[0].clientY
				};
			},
			onTouchEnd(e) {
				const dx = e.changedTouches[0].clientX - this.touchStart.x;
				const dy = e.changedTouches[0].clientY - this.touchStart.y;
				if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
					if (dx > 0 && this.touchStart.x <= 80) {
						this.toggleSidebar(true);
					} else {
						this.toggleSidebar(false);
					}
				}
			},
			onSWUpdated(e) {
				this.swUpdateEvent = e;
			}
		}
	}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="@theme/styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
    main
        margin 0 !important
        padding 0 !important
    a
        text-decoration none
        position: relative;
        font-size: 1.28rem;
        line-height: 36px;
        display: inline-block;
        :after
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $accentColor;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            transition: .3s ease-in-out;
        :hover:after
            visibility visible
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
</style>