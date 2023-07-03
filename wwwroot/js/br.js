window.onload = function () {
    new Vue({
        el: "#table",
        data: {
            layer: false,//弹窗显示
            obj: {
                a1: "",
                a2: "",
                a3: "",
                a4: "",
                a5: "",
                a6: "",
                a7: "",
                a8: "",
            },
            items: [{id:1, a1: "反光板", a2: "男", a3: "2023/5/5", a4: "外科", a5: "无症状", a6: "东部", a7: "4", a8: "8" }],
            editItems: {}
        },

        methods: {
            add: function () {
                if (!this.obj.a1 || !this.obj.a2 || !this.obj.a3) return;
                var _id = Math.max(...this.items.map(function (v) { v.id }))+1;
                this.items.map(function (v) { v.id });
                    
             
                this.items.push({
                    a1: this.obj.a1,
                    a2: this.obj.a2,
                    a3: this.obj.a3,
                    a4: this.obj.a4,
                    a5: this.obj.a5,
                    a6: this.obj.a6,
                    a7: this.obj.a7,
                    a8: this.obj.a8,
                    id: _id
                });
                //清空输入
                this.obj = {};
            },
            dei: function (i) {
                this.items.splice(i, 1);
            },
            edit: function (item) {
                this.layer = true;//弹窗
                this.editItems = {
                    a1: item.a1,
                    a2: item.a2,
                    a3: item.a3,
                    a4: item.a4,
                    a5: item.a5,
                    a6: item.a6,
                    a7: item.a7,
                    a8: item.a8,
                    id: item.id

                }
            },
            update: function () {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i].id == this.editItems.id) {
                        this.items[i] = this.editItems
                        this.layer = false;//跳窗不显示
                    }
                }
            }
        }
    })
}