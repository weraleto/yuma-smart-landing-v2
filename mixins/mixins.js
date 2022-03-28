export const formMixin = {
    data: () => {
        return {
            formSubmitted: false,
            policyAgree: true,
            form: {
                name: null,
                phone: null,
                message: null
            },
            formValidation: {
                name: {result: true, errorMessage: ''},
                phone: {result: true, errorMessage: ''},
                policy: {result: true, errorMessage: ''},
            }
        }
    },
    computed: {
        nameValid() {
            let resultObject = {result: true, errorMessage: ''}
            if (!this.form.name || !this.form.name.length) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле не может быть пустым'
            }
            else if (!(this.form.name).match(/[\wа-я]+/ig)) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле должно содержать только символы букв'
            }
            return resultObject
        },
        phoneValid() {
            let resultObject = {result: true, errorMessage: ''}
            if (!this.form.phone || !this.form.phone.length) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле не может быть пустым'
            }
            else if (!(this.form.phone).match(/\+7 \(\d{3}\) \d{3} \d{2} \d{2}/)) {
                resultObject.result = false
                resultObject.errorMessage = 'Номер введен некорректно или не полностью'
            }
            return resultObject
        },
        policyValid() {
            let resultObject = {result: true, errorMessage: ''}
            if (!this.policyAgree) {
                resultObject.result = false
                resultObject.errorMessage = 'Необходимо согласиться с политикой обработки персональных данных'
            }
            return resultObject
        }
    },
    methods: {
        checkForm() {
            let checks = []
            for (let fieldName in this.formValidation) {
                this.formValidation[fieldName] = this[`${fieldName}Valid`]
                checks.push(this.formValidation[fieldName].result)
            }
            return checks.every(function(it){return it === true})
                        
        },
        submitForm() {
            let isFormValid = this.checkForm()
            if (isFormValid) {
                this.formSubmitted = true
                this.clearForm()
            }
        },
        clearForm() {
            this.form = {
                name: null,
                phone: null,
                message: null
            }
            this.formValidation = {
                name: {result: true, errorMessage: ''},
                phone: {result: true, errorMessage: ''},
                policy: {result: true, errorMessage: ''},
            }
        }
    }
}