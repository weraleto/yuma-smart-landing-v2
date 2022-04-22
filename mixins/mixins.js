import { Message } from 'element-ui';

export const formMixin = {
    data: () => {
        return {
            formSubmitted: false,
            form: {
                name: null,
                phone: null
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
            else if (!(this.form.name).match(/^[\a-zа-я\s\-]+$/ig)) {
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
        async submitForm() {
            let isFormValid = this.checkForm()
            if (isFormValid) {
                let form_data = new FormData();
                for ( let key in this.form ) {
                    form_data.append(key, this.form[key]);
                }
                let res = await fetch("/api/call_request/", {
                    method: "post",
                    body: form_data
                })
                if (res && res.status == 200) {
                    this.formSubmitted = true
                    this.clearForm()
                } else {
                    Message.error({
                        type: 'error',
                        message: 'Во время отправки формы что-то пошло не так. Попробуйте снова позже',
                        duration: 10000
                    });
                }
                
            }
        },
        clearForm() {
            this.form = {
                name: null,
                phone: null
            }
            this.formValidation = {
                name: {result: true, errorMessage: ''},
                phone: {result: true, errorMessage: ''},
            }
        }
    }
}