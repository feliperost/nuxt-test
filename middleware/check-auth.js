export default function(context) {
    console.log('test - middleware check auth')
    context.store.dispatch('initAuth', context.req)

    // a soluçao acima nao é ideal, pq o middleware nao funciona em todas as paginas do site... resolver /\
}