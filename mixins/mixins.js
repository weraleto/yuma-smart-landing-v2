export const formMixin = {
    data: () => {
        return {
            formSubmitted: false,
            form: {
                name: null,
                phone: null,
                message: null
            },
            formValidation: {
                name: {result: true, errorMessage: ''},
                phone: {result: true, errorMessage: ''},
            },
            phoneMask: '+7 (###) ### - ## - ##'
        }
    },
    computed: {
        nameValid() {
            let resultObject = {result: true, errorMessage: ''}
            if (!this.form.name || !this.form.name.length) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле должно быть заполнено'
            }
            else if (!(this.form.name).match(/^[\a-zа-я\s]+$/ig)) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле должно содержать только символы букв'
            }
            return resultObject
        },
        phoneValid() {
            let resultObject = {result: true, errorMessage: ''}
            if (!this.form.phone || !this.form.phone.length || !(this.form.phone).match(/\+7 \(\d{3}\) \d{3} - \d{2} - \d{2}/)) {
                resultObject.result = false
                resultObject.errorMessage = 'Поле должно быть заполнено'
            }
            return resultObject
        }
    },
    methods: {
        checkForm() {
            let checks = []
            for (let fieldName in this.formValidation) {
                this.formValidation[fieldName].result = this[`${fieldName}Valid`].result
                checks.push(this.formValidation[fieldName].result)

                setTimeout(()=> {
                    this.formValidation[fieldName].errorMessage = this[`${fieldName}Valid`].errorMessage
                }, 200)
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
            }
        }
    }
}