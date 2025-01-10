export default {
    name:'comments',
    type:'document',
    title:'Comments',
    fields:[
        {
            name:'comments',
            type:'string',
            title:'Comments',
        },
        
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'comments',
                maxLength:96,
            },
        },
        
    ]
}