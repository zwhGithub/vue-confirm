import Vue from 'vue'
import ConfirmComponent from './confirm.vue'

let instance;


let ConfirmConstructor = Vue.extend(ConfirmComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Confirm = (content) => {
    initInstance();
    instance.content = content;

    return new Promise((resolve, reject)=>{
        instance.show = true;

        // fix 弹窗出来之后依旧键盘没有回收
        let inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
      //防止弹框出来 还能滚动
      document.getElementsByTagName("body")[0].style.overflow = "hidden"

        inputs.forEach((input)=>{
            input.blur();
        });

        let success = instance.success;
        let cancel = instance.cancel;
        // event
        instance.success = () => {
            success();
            resolve('ok');
        }
        instance.cancel = () => {
            cancel();
            reject('cancel');
        }
    });

}
export default {
    install (Vue) {
        Vue.prototype.$confirm = Confirm;
    }
};
