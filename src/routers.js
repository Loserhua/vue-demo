
export default [{
  path: '/',
  component:require('./components/Hello.vue')
},
{
  path:'/hello',
  name:'one',
  component:require('./components/Hello.vue')
},
{
  path:'/example1',
  name:'example1',
  component:require('./components/example1.vue')

},
{
  path:'/example2',
  name:'example2',
  component:require('./components/example2.vue')

}
]
