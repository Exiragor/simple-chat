<template>
    <div class="row">
        <div class="col-md-12">
            <ul>
                <li @key="item" v-for="item in items">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',

        props: [
            'items',
        ],
    }
</script>