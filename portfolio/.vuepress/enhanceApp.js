import VeeValidate, {Validator} from 'vee-validate'
import locale from './vee-validate-locales/pt_BR'

export default ({
					Vue, // the version of Vue being used in the VuePress app
					options, // the options for the root Vue instance
					router, // the router instance for the app
					siteData // site metadata
				}) => {
	// ...apply enhancements to the app
	Vue.use(VeeValidate)
	// Vue.mixin({
	// 	localize (localeName) {
	// 		// asynchronously load the locale file then localize the validator with it.
	// 		import(`./vee-validate-locales/${localeName}`).then(locale => {
	// 			Validator.localize(localeName, locale);
	// 		});
	// 	}
	// })
	Validator.localize('pt_BR', locale)
}