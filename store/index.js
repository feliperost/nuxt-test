import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                    return new Promise((resolve, reject) => {
                      setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { 
                              id: '1', 
                              title: "First post", 
                              prewviewText: "This is our first post. Testing.", 
                              thumbnail: "https://ifood-news-wp-prod.s3.us-east-1.amazonaws.com/uploads/2022/07/IFN_066_BNN_01.png"
                            },
                            { 
                              id: '2', 
                              title: "Second post", 
                              prewviewText: "This is our second post.", 
                              thumbnail: "https://ifood-news-wp-prod.s3.us-east-1.amazonaws.com/uploads/2022/07/IFN_066_BNN_01.png"
                            }
                          ])
                        resolve()
                    }, 1500)
                })
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