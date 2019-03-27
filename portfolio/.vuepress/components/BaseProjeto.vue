<template>
    <main class="flex flex-col">

        <Content/>

        <div class="flex mb-4 flex-wrap justify-center">
            <Projeto
                    v-for="projeto in shouldShowProjects"
                    :key="projeto.title"
                    :title="projeto.title"
                    :href="projeto.href"
                    :description="projeto.description"
                    :date="projeto.date"
                    :tags="projeto.tags"
            />
        </div>

    </main>
</template>
<script>
	import Projeto from './Projeto.vue'

	export default {
		name: 'BaseProjeto',
		computed: {
			shouldShowProjects() {
				return [
					...this.$page.frontmatter.projetos.filter(project => !project.draft)
				]
			},

		},
		created() {
		}
	}
</script>
<style lang="stylus">
</style>
