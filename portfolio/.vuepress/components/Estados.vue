<template>
    <div>
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                v-model="estado"
                :id="id">
            <option v-for="estado in estadosList" :value="estado.value">{{estado.text}}</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'Estados',
		props: {
			id: {
				type: String,
				required: false
			},
		},
		data() {
			return {
				estado: null,
				estadosList: [
					{value: null, text: 'Selecione um estado'},
					{value: 'AC', text: 'Acre'},
					{value: 'AL', text: 'Alagoas'},
					{value: 'AP', text: 'Amapá'},
					{value: 'AM', text: 'Amazonas'},
					{value: 'BA', text: 'Bahia'},
					{value: 'CE', text: 'Ceará'},
					{value: 'DF', text: 'Distrito Federal'},
					{value: 'ES', text: 'Espírito Santo'},
					{value: 'GO', text: 'Goiás'},
					{value: 'MA', text: 'Maranhão'},
					{value: 'MT', text: 'Mato Grosso'},
					{value: 'MS', text: 'Mato Grosso do Sul'},
					{value: 'MG', text: 'Minas Gerais'},
					{value: 'PA', text: 'Pará'},
					{value: 'PB', text: 'Paraíba'},
					{value: 'PR', text: 'Paraná'},
					{value: 'PE', text: 'Pernambuco'},
					{value: 'PI', text: 'Piauí'},
					{value: 'RJ', text: 'Rio de Janeiro'},
					{value: 'RN', text: 'Rio Grande do Norte'},
					{value: 'RS', text: 'Rio Grande do Sul'},
					{value: 'RO', text: 'Rondônia'},
					{value: 'RR', text: 'Roraima'},
					{value: 'SC', text: 'Santa Catarina'},
					{value: 'SP', text: 'São Paulo'},
					{value: 'SE', text: 'Sergipe'},
					{value: 'TO', text: 'Tocantins'}
				]
			}
		},
		watch: {
			estado() {
				this.$emit('onEstadoSelected', this.estado)
			}
		}
	}
</script>