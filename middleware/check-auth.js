export default function(context) {
    console.log('test - middleware check auth')
    if (process.client) {
        context.store.dispatch('initAuth')
    }
    // a soluçao acima nao é ideal, pq o middleware nao funciona em todas as paginas do site... resolver /\
}