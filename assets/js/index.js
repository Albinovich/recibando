import jQuery from 'jquery';

const recibando = {
    receiptData: [],

    init: ()=>{
        recibando.addEventListeners();
        console.log('recibando on');
    },

    addEventListeners: ()=>{
        jQuery('.input-group__input').on('focus', (ev)=>{
            recibando.animateLabelOnInputFocus(ev.target);
        });

        jQuery('.input-group__input').on('blur', (ev)=>{

        });
    },

    animateLabelOnInputFocus: (target)=>{
        jQuery(target).siblings('.input-group__label').addClass('touched');
    }
};

jQuery(()=>{
    recibando.init();
});