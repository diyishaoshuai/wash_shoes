"use strict";
Component({
    externalClasses: [
        'ext-class-input',
        'ext-class-increase',
        'ext-class-decrease',
    ],
    properties: {
        value: {
            type: Number,
            observer: function (val) {
                this.setData({
                    num: val,
                });
            },
        },
        disabled: {
            type: Boolean,
            observer: function (val) {
                this.setData({
                    disabled: val,
                });
            },
        },
        step: {
            type: Number,
            value: 1,
            observer: function (val) {
                this.setData({
                    step: val,
                });
            },
        },
        size: {
            type: String,
            value: 'm',
        },
    },
    data: {
        num: 0,
        step: 1,
    },
    methods: {
        onDecrease: function () {
            if (this.data.disabled) {
                return;
              }
            var num = this.data.value - this.data.step;
            this.syncValue(num);
        },
        onIncrease: function () {
            if (this.data.disabled) {
                return;
              }
            var num = this.data.value + this.data.step;
            this.syncValue(num);
        },
        onInput: function (e) {
            var value = e.detail.value;
            this.syncValue(value);
        },
        syncValue: function (num) {
            this.setData({
                num: num,
            });
            this.triggerEvent('input', { value: num });
        },
    },
});
