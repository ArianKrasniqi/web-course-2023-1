const colors = ['Blue', 'Green']

colors.push('Yellow')

colors[1] = 'Red'

const removedFirst = colors.shift()
console.log('Vlera e larguar eshte: ', removedFirst)

colors.push('Orange', 'Aqua')

colors.push(['Color1', 'Color2', 'Color3'])

console.log(colors[4][2])
console.log('colors: ', colors)
