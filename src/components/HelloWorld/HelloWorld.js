import axios from "axios";
const baseUrl = 'http://localhost/blog/public/api/users';
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            data :[]
        }
    },
    mounted() {
        this.list();

    },
    methods: {
        list() {
            axios
                .get(baseUrl)
                .then(response => this.data = response.data.data);
        },
        test() {
            console.log(243424);
        }
    },
    created() {

    },
};