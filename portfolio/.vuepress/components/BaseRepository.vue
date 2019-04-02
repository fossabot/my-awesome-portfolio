<template>
    <div class="mt-5 flex flex-col items-center">

            <ul class="flex mb-4 justify-center list-reset">
                <li class="inline-block text-center border border-green rounded py-2 px-4 mr-4 bg-green hover:bg-green-dark text-white">
                    gh:
                    <repository-count/>
                </li>
                <li class="inline-block text-center border border-green rounded py-2 px-4 mr-4 bg-green hover:bg-green-dark text-white">
                    gist:
                    <repository-count provider="gist"/>
                </li>
                <li class="inline-block text-center border border-green rounded py-2 px-4 mr-4 bg-green hover:bg-green-dark text-white">
                    gl:
                    <repository-count provider="gitlab"/>
                </li>
            </ul>

    </div>
</template>
<script>
	import RepositoryCount from './RepositoryCount.vue'

	export default {
		name: 'BaseRepository',
	}
</script>
<style lang="stylus">
</style>
