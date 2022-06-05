// @vue/component

import Dropdown from './Dropdown.vue'

export default {
    name: 'TreeChart',

    components: {Dropdown},

    mixins: [],

    props: {},

    data() {
        return {
            navigation: [
                {
                    title : 'home',
                    open  : false,
                    subNav: [
                        {
                            title : 'home - 2',
                        },
                        {
                            title: 'home - 3'
                        }
                    ]
                },
                {
                    title : 'about',
                    open  : false,
                    subNav: [
                        {
                            title: 'about - 2',
                            open  : false,
                            subNav: [
                                {
                                    title: 'about - 2'
                                },
                                {
                                    title: 'about - 3'
                                }
                            ]
                        },
                        {
                            title: 'about - 3'
                        }
                    ]
                },
                {title: 'blog'},
                {
                    title : 'contact',
                    open  : false,
                    subNav: [
                        {
                            title: 'contact - 2'
                        },
                        {
                            title: 'contact - 3'
                        }
                    ]
                },
            ]
        }
    },

    computed: {},

    watch: {},

    created() {
    },

    methods: {
        showDropDown(e) {
            this.active === e ? this.active = 0 : this.active = e;
            console.log(e)
        }
    }
}
