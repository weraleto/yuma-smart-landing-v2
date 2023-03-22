import { Message } from 'element-ui';
import ElTabs from 'element-ui/lib/tabs'
import ElTabPane from 'element-ui/lib/tab-pane'

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

export const tabsMixin = {
    props: {
        id: String,
    },
    data: () => {
        return {
            activeName: '0',
            timer: null,
        }
    },
    components: {
        ElTabs,
        ElTabPane
    },
    mounted() {
        let navEl = document.querySelector(`#${this.id} .el-tabs__nav-scroll`)
        navEl.addEventListener('touchmove', this.handleTabScroll)
    },
    methods: {
        debounce(timeout = 100, callback){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(callback, timeout)
        },
        handleTabScroll(e) {
            const target = document.querySelector(`#${this.id} .el-tabs__nav-scroll`)
            let el = target.querySelector('.el-tabs__nav')
            let tr = el.style.transform.replace("translateX(", "").replace(")", "")
            if (target.scrollLeft == 0 && parseInt(tr) != 0) {
                this.debounce(150, function(){
                    el.style.transform = "translateX(0px)"
                })
            }
        },
    }
}

export const popoverMixin = {
    data: () => {
        return {
            activeEl: null,
            visibleEl: null,
            contentVisible: false,
            params: []
        }
    },
    methods: {
        setElProperty(el, prop, val, units='') {
            el.style[prop] = `${val}${units}`
        }
    },
    computed: {
        activeElData() {
            if (this.activeEl) {
                return this.data[this.activeEl]
            }
            return {}
        }
    },
}

export const layoutMixin = {
    methods: {
        loadScript() {
            let script = document.createElement('script')
            script.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b16224776/crm/site_button/loader_2_3yeodk.js');"
            document.body.appendChild(script)
        }
    }
}

export const cardMixin = {
    data() {
        return {
            activeCard: null,
            timer: null
        }
    },
    methods: {
      handleLayoutClick(e) {
        if (!this.$refs.cardItems) {
            return
        }
        if (!this.$refs.cardItems.contains(e.target)) {
          this.activeCard = null
        }
      },
      handleCardMouseEnter(idx) {
        clearTimeout(this.timer); 
        this.activeCard=idx
      },
      handleCardMouseLeave() {
        this.timer = setTimeout(() => {
            this.activeCard = null
        }, 1000)
      }
    }
}