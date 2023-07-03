window.onload = function () {
    new Vue({
        el: "#table",
        data: {
            layer: false,//弹窗显示
            obj: {
                a1: "",
                a3: "",
                a4: "",
                a5: "",
            },
            items: [{ id: 1, a1: "麻醉类药物", a3: "是", a4: "外科", a5: "29" }],
            editItems: {}
        },

        methods: {
            add: function () {
                if (!this.obj.a1 || !this.obj.a3) return;
                var _id = Math.max(...this.items.map(function (v) { v.id })) + 1;
                this.items.map(function (v) { v.id });


                this.items.push({
                    a1: this.obj.a1,
                    a3: this.obj.a3,
                    a4: this.obj.a4,
                    a5: this.obj.a5,
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
                    a3: item.a3,
                    a4: item.a4,
                    a5: item.a5,
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