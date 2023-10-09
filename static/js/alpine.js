document.addEventListener('alpine:init', () => {
    Alpine.data('capstoneApp', () => {
        return {
            show: false,
            history: '',
            filename: '',
            predictedValue: '',
            images: [],

            init() {
                console.log('alpine connected...');
                this.display_images();
            },

            upload() {
                axios.post('/upload', {
                    filename: this.filename,
                })
                .then(() => {
                    console.log('uploaded...')
                    this.display_images();
                })
            },

            get_predicted(){
                axios.get('/predict')
                .then((result) => {
                    console.log(result.data)
                })
            },
            predict_class(){  
                axios.post('/predict', {
                    filename: this.filename,
                })
                .then((result) => {
                    this.display_images()
                    console.log(result.data)
                })
            },
            display_images() {
                axios.get('/display-images')
                .then((result) => {
                    this.images = result.data.images;
                    console.log(result.data)
                })
            },

        }

    })
})