// import { formatFileSize, isDefinedGlobally } from './utils';

const messages = {
  _default: (field) => `O valor do campo ${field} não é válido.`,
  after: (field, [target]) => `O campo ${field} deve estar depois do campo ${target}.`,
  alpha: (field) => `O campo ${field} deve conter somente letras.`,
  alpha_dash: (field) => `O campo ${field} deve conter letras, números e traços.`,
  alpha_num: (field) => `O campo ${field} deve conter somente letras e números.`,
  alpha_spaces: (field) => `O campo ${field} só pode conter caracteres alfabéticos e espaços.`,
  before: (field, [target]) => `O campo ${field} deve estar antes do campo ${target}.`,
  between: (field, [min, max]) => `O campo ${field} deve estar entre ${min} e ${max}.`,
  confirmed: (field, [confirmedField]) => `Os campos ${field} e ${confirmedField} devem ser iguais.`,
  credit_card: (field) => `O campo ${field} é inválido.`,
  date_between: (field, [min, max]) => `O campo ${field} deve estar entre ${min} e ${max}.`,
  date_format: (field, [format]) => `O campo ${field} deve estar no formato ${format}.`,
  decimal: (field, [decimals = '*'] = []) => `O campo ${field} deve ser numérico e deve conter ${!decimals || decimals === '*' ? '' : decimals} casas decimais.`,
  digits: (field, [length]) => `O campo ${field} deve ser numérico e ter exatamente ${length} dígitos.`,
  dimensions: (field, [width, height]) => `O campo ${field} deve ter ${width} pixels de largura por ${height} pixels de altura.`,
  email: (field) => `O campo ${field} deve ser um email válido.`,
  excluded: (field) => `O campo ${field} deve ser um valor válido.`,
  ext: (field) => `O campo ${field} deve ser um arquivo válido.`,
  image: (field) => `O campo ${field} deve ser uma imagem.`,
  included: (field) => `O campo ${field} deve ter um valor válido.`,
  integer: (field) => `O campo ${field} deve ser um número inteiro.`,
  ip: (field) => `O campo ${field} deve ser um endereço IP válido.`,
  length: (field, [length, max]) => {
    if (max) {
      return `O tamanho do campo ${field} está entre ${length} e ${max}.`;
    }

    return `O tamanho do campo ${field} deve ser ${length}.`;
  },
  max: (field, [length]) => `O campo ${field} não deve ter mais que ${length} caracteres.`,
  max_value: (field, [max]) => `O campo ${field} precisa ser ${max} ou menor.`,
  mimes: (field) => `O campo ${field} deve ser um tipo de arquivo válido.`,
  min: (field, [length]) => `O campo ${field} deve conter pelo menos ${length} caracteres.`,
  min_value: (field, [min]) => `O campo ${field} precisa ser ${min} ou maior.`,
  numeric: (field) => `O campo ${field} deve conter apenas números`,
  regex: (field) => `O campo ${field} possui um formato inválido.`,
  required: (field) => `O campo ${field} é obrigatório.`,
  // size: (field, [size]) => `O campo ${field} deve ser menor que ${formatFileSize(size)}.`,
  url: (field) => `O campo ${field} não é uma URL válida.`
};

const locale = {
  name: 'pt_BR',
  messages,
  attributes: {}
};

// if (isDefinedGlobally()) {
//   VeeValidate.Validator.localize({ [locale.name]: locale });
// }

export default locale;
