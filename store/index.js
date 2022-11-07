import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-blog-c4b21-default-rtdb.firebaseio.com/posts.json')
                .then(res => {
                    const postsArray = []
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e))
            },
            addPost(vuexContext, post) {
                axios.post('https://nuxt-blog-c4b21-default-rtdb.firebaseio.com/posts.json', {
                    ...postData, 
                    updatedDate: new Date()
                  })
                  .then(result => {
                    this.$router.push('/admin')
                  })
                  .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {

            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore