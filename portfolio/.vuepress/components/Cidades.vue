<template>
    <div>
        <!--<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"-->
               <!--id="grid-cidade" type="text">-->
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                v-model="cidade"
                id="grid-cidade">
            <option v-for="cidade in cidadesList" :value="cidade">{{cidade}}</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</template>
<script>
	import brasil from '../../setup/brasil.json'

	export default {
		name: 'Cidades',
		props: {
			estado: {
				type: String,
				required: true
			}
		},
		computed: {
			cidadesList() {
				return brasil[this.estado].cidades
			},
		},
		data() {
			return {
				cidade: null,
				brasil
			}
		},
		watch: {
			cidade() {
				this.$emit('onCidadeSelected', this.cidade)
			}
		}
	}
</script>