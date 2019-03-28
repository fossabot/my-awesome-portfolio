<template>
    <div class="rounded overflow-hidden shadow-lg my-5 mx-5 w-1/3 flex-none">
        <img class="w-full" :src="displayImage" :alt="title">
        <div class="px-6 py-4">
            <div class="mb-2 font-nunito flex items-center justify-between leading-tight">
                <a class="font-bold text-xl"
                   :href="href"
                   target="_blank"
                   v-text="title"
                   rel="noopener noreferrer"></a>
                <span class="text-sm">
                    {{ displayDate }}
                </span>
            </div>
            <p class="text-grey-darker text-base">
                {{ description }}
            </p>
        </div>
        <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2"
                          v-for="tag in tags">#{{ tag }}</span>
        </div>
    </div>
</template>
<script>
	import moment from 'moment'
	import 'moment/locale/pt-br'

	export default {
		name: 'Projeto',
		props: {
			title: {
				type: String,
				required: true
			},
			href: {
				type: String,
				required: true
			},
			description: String,
			date: String,
			tags: {
				type: Array,
				required: true
			}
		},
		beforeMount(){
			const protocol = location.protocol
			const slashes = protocol.concat('//')
			this.host = slashes.concat(window.location.hostname)
        },
		computed: {
			displayImage() {
				return 'https://http2pic.haschek.at/api.php?' +
					'onfail=' + this.host + '/images/no-image.svg' +
					'&ondomainfail=' + this.host + '/images/no-image.svg' +
					'&js=yes' +
					'&type=png' +
					'&cache=1' +
					'&viewport=810x400' +
					'&url=' + encodeURI(this.href)
			},
			displayDate() {
				const m = moment(this.date)
				m.locale('pt-BR')
				return m.format('Do MMM YY')
			}
		},
		data() {
			return {
				host: ''
            }
		}
	}
</script>
<style lang="stylus">
</style>
