let app = new Vue({
	el:'#appHov',
	data: {
		imgActive1:false,
		imgActive2:true,
		imgActive3:true,
	},
	methods: {
		cambiarImagen($id) {
			if ($id == 1) {
				this.imgActive1 = false

				this.imgActive2 = true
				this.imgActive3 = true
			} else if($id == 2) {
				this.imgActive2 = false

				this.imgActive1 = true
				this.imgActive3 = true
			} else if($id == 3) {
				this.imgActive3 = false

				this.imgActive1 = true
				this.imgActive2 = true
			}
		}
	}
})