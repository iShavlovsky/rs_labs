import { Ref, ref } from 'vue';
import { Api } from '@/api';


export default function posts(blogApi: Api['blog']) {
    const posts: Ref<Article[]> = ref([]);


    async function load() {
        const res = await blogApi.loadPosts();
        console.log(res);
    }

    return {
        load
    };
}
