<template>
    <main class="mt-5 flex flex-col">
        <div class="flex mb-4 flex-wrap justify-center">

            <form class="w-full max-w-md font-nunito"
                  :action="formAction"
                  @submit.prevent="validateBeforeSubmit"
                  ref="form"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  netlify>
                <input type="hidden" name="form-name" value="contact"/>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-full px-3 mb-3 md:mb-0">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-nome">Nome Completo</label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                               :class="{'input': true, 'border-red': errors.has('nome') }"
                               name="nome"
                               v-model="nome"
                               v-validate="'required'"
                               id="grid-nome"
                               type="text">
                        <p class="text-red text-xs italic"
                           v-if="errors.has('nome')">{{ errors.first('nome') }}</p>

                    </div>
                </div>


                <div class="flex flex-wrap -mx-3 mb-2"
                     v-show="hasFilled('nome')">
                    <div class="w-full px-3 mb-2 md:mb-0"
                         :class="{'input': true, 'md:w-1/2': hasFilled('email') }">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-email">E-mail</label>
                        <div class="relative">
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                   :class="{'input': true, 'border-red': errors.has('email') }"
                                   name="email"
                                   v-model="email"
                                   v-validate="'required|email'"
                                   id="grid-email"
                                   type="text">
                            <p class="text-red text-xs italic"
                               v-if="errors.has('email')">{{ errors.first('email') }}</p>
                        </div>

                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0"
                         v-show="hasFilled('email')">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-telefone">Telefone</label>
                        <div class="relative">
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                   :class="{'input': true, 'border-red': errors.has('telefone') }"
                                   name="telefone"
                                   v-model="telefone"
                                   v-validate="'required'"
                                   id="grid-telefone"
                                   type="text">
                            <p class="text-red text-xs italic"
                               v-if="errors.has('telefone')">{{ errors.first('telefone') }}</p>
                        </div>

                    </div>
                </div>


                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-mensagem">Mensagem</label>
                        <textarea
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded pt-3 pb-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                :class="{'input': true, 'border-red': errors.has('mensagem') }"
                                name="mensagem"
                                v-validate="'required|min:50'"
                                v-model="mensagem"
                                @input="textareaResize" ref="textarea" rows="3"
                                id="grid-mensagem"/>
                        <p class="text-red text-xs italic"
                           v-if="errors.has('mensagem')">{{ errors.first('mensagem') }}</p>
                        <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>

                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2"
                     v-show="hasFilled('mensagem')">
                    <div class="w-full px-3 mb-3 md:mb-0"
                         :class="{'input': true, 'md:w-1/2': hasFilled('estado') }">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-estado">Estado</label>
                        <div class="relative">
                            <Estados @onEstadoSelected="changeEstado"
                                     :class="{'input': true, 'border-red': errors.has('estado') }"
                                     name="estado"
                                     v-validate="'required'"
                                     v-model="estado"
                                     id="grid-estado"/>
                            <p class="text-red text-xs italic"
                               v-if="errors.has('estado')">{{ errors.first('estado') }}</p>
                        </div>

                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0"
                         v-if="hasFilled('estado')">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-cidade">Cidade</label>
                        <p class="text-red text-xs italic"
                           v-if="errors.has('estado')">{{ errors.first('estado') }}</p>
                        <div class="relative">
                            <Cidades
                                    :class="{'input': true, 'border-red': errors.has('cidade') }"
                                    name="cidade"
                                    v-validate="'required'"
                                    v-model="cidade"
                                    :estado="estado"
                                    @onCidadeSelected="changeCidade"
                                    id="grid-cidade"/>
                            <p class="text-red text-xs italic"
                               v-if="errors.has('cidade')">{{ errors.first('cidade') }}</p>
                        </div>

                    </div>
                </div>

                <div class="w-full px-3 mb-3 md:mb-0">
                    <div class="flex items-center justify-center px-3 my-6 md:mb-0 items-center">

                        <button class="shadow bg-green hover:bg-green-dark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit">Enviar
                        </button>

                    </div>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
	import VueTextareaAutosize from 'vue-textarea-autosize'
	import Estados from './Estados'

	export default {
		name: 'Contato',
		components: {VueTextareaAutosize, Estados},
		props: {},
		data() {
			return {
				nome: null,
				email: null,
				telefone: null,
				estado: null,
				cidade: null,
				mensagem: '',
			}
		},
		computed: {
			formAction() {
				return (process.env.NODE_ENV === 'production') ? '/.netlify/functions/contact' : 'http://localhost:9000/.netlify/functions/contact'
			}
		},
		methods: {
			async validateBeforeSubmit() {
				let result = false
				try {
					// TODO: Add UX like this
					//  https://forestry-community.slack.com/join/shared_invite/enQtNDAxMTU5NzcwMzA3LWUyYTk3NDY2ZDNiMjFhNmVlMjExM2FjYzFhNjJhNjU2NTc2ODVjZTdlYjJiODhhZDgwYTVhYjY0ZGU3ZWFmYzM
					result = await this.$validator.validateAll()
					if (!result) {
						throw new Error('Form is not valid')
						return
					}
					console.log(this.$data)

					const response = await fetch(this.formAction, {
						method: 'POST',
						body: JSON.stringify(this.$data)
					})
					const body = response.json()
					if (Number(response.status) !== 200) {
						if(response.body.error){
							alert(response.body.error)
                        }
						throw new Error('Status ${response.status}. Error submitting the form. ')
						return
					}
				} catch (error) {
					console.log(error)
					return
				}

				// Show success
				this.showSuccess(this.$data)

				return true
			},

			showSuccess(data) {
				alert('It works!')
				alert(data)
			},

			hasFilled(field) {
				return (!this.errors.has(field) && this[field])
			},
			textareaResize() {
				this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px'
			},
			changeEstado(estado) {
				this.estado = estado
			},
			changeCidade(cidade) {
				this.cidade = cidade
			}
		}
		,
		mounted() {
			this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px'
		}
	}
</script>
<style>
</style>
